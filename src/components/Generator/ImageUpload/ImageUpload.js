import { useRef } from 'react';

import Button from '../../UI/Button';

const ImageUpload = props => {
	const imageFileRef = useRef();

	const onClickUpload = e => {
		e.preventDefault();
		imageFileRef.current.click();
	};

	return (
		<>
			<Button onClick={onClickUpload}>UPLOAD YOUR IMAGE HERE</Button>
			<input
				type='file'
				accept='image/jpg'
				onChange={props.uploadImageHandler}
				ref={imageFileRef}
				style={{ display: 'none' }}
			/>
		</>
	);
};

export default ImageUpload;
