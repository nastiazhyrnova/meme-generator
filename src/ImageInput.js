import { useRef } from 'react';

const ImageInput = props => {
	const imageFileRef = useRef();

	const onClickUpload = e => {
		e.preventDefault();
		imageFileRef.current.click();
	};

	return (
		<>
			<button onClick={onClickUpload}>UPLOAD HERE</button>
			<input
				type='file'
				accept='image/*'
				onChange={props.uploadImageHandler}
				ref={imageFileRef}
				style={{ display: 'none' }}
			/>
		</>
	);
};

export default ImageInput;
