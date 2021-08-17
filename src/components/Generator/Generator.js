import { useState, useRef } from 'react';
import styled from 'styled-components';

import Canvas from './Canvas';
import ImageInput from './ImageInput';
import Button from '../UI/Button';

const GeneratorWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	height: 100vh;
`;

const Generator = () => {
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
		<GeneratorWrapper>
			<h1>Meme Generator</h1>
			<ImageInput uploadImageHandler={uploadImageHandler} />
			<Canvas image={image} upperText={upperText} />
			<input type='Text' onChange={upperTextHandler} ref={upperTextRef} />
			<Button type='button' onClick={resetAll}>
				Reset all
			</Button>
		</GeneratorWrapper>
	);
};

export default Generator;
