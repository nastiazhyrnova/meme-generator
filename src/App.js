import { useState, useRef } from 'react';

import Canvas from './Canvas';
import ImageInput from './ImageInput';

const App = () => {
	const [image, setImage] = useState(null);
	const [upperText, setUpperText] = useState('');

	const upperTextRef = useRef();

	const uploadImageHandler = e => {
		e.preventDefault();
		console.log(e.target.files[0]);
		if (e.target.files[0]) {
			const reader = new FileReader();
			reader.onloadend = () => {
				const img = new Image();
				img.src = reader.result;
				setImage(img);
			};
			reader.readAsDataURL(e.target.files[0]);
		}
	};

	const upperTextHandler = e => {
		setUpperText(e.target.value);
	};

	const resetAll = () => {
		setImage(null);
		upperTextRef.current.value = '';
	};

	return (
		<div className='App'>
			<Canvas image={image} upperText={upperText} />
			<form>
				<ImageInput uploadImageHandler={uploadImageHandler} />
				<br></br>
				<input type='Text' onChange={upperTextHandler} ref={upperTextRef} />
				<br></br>
				<button type='button' onClick={resetAll}>
					Clear
				</button>
			</form>
			<br></br>
		</div>
	);
};

export default App;
