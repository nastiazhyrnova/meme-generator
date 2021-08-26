import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import Canvas from './Canvas/Canvas';
import ImageUpload from './ImageUpload/ImageUpload';
import Button from '../UI/Button';
import TextInput from './TextInput/TextInput';
import FlexRow from '../UI/FlexRow';
import FlexColumn from '../UI/FlexColumn';

import { RESET_TEXTS } from '../../store/actionTypes';

const GeneratorWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	gap: 1.5rem;
	margin: 1rem 1rem 4rem 1rem;
`;

const Title = styled.p`
	font-size: 1.2rem;
	color: var(--purple-color);
	font-weight: 500;
`;

const Generator = () => {
	const textStore = useSelector(state => state.text);
	const canvasImageStore = useSelector(state => state.canvasImage);

	const [uploadedImage, setUploadedImage] = useState(null);

	const dispatch = useDispatch();

	const uploadImageHandler = e => {
		e.preventDefault();
		if (e.target.files[0]) {
			const reader = new FileReader();
			reader.readAsDataURL(e.target.files[0]);
			const img = new Image();
			reader.onloadend = () => {
				img.src = reader.result;
				setUploadedImage(img);
			};
		}
	};

	const resetAll = () => {
		setUploadedImage(null);
		dispatch({
			type: RESET_TEXTS,
		});
	};

	console.log(typeof uploadedImage);

	return (
		<GeneratorWrapper>
			<h1>Meme Generator</h1>
			<ImageUpload uploadImageHandler={uploadImageHandler} />
			<FlexRow>
				<Canvas image={uploadedImage} />
				<FlexColumn>
					<Title>Upload your image and add text:</Title>
					<FlexColumn>
						<TextInput
							title='Top text'
							type='Text'
							textlocation='top'
							placeholder='Write top text here'
							value={textStore.top.text}
							// disabled={!canvasImageStore}
						/>
						<TextInput
							title='Bottom text'
							type='Text'
							textlocation='bottom'
							placeholder='Write bottom text here'
							value={textStore.bottom.text}
							// disabled={!canvasImageStore}
						/>
					</FlexColumn>
				</FlexColumn>
			</FlexRow>
			<FlexRow>
				<Button type='button' onClick={resetAll}>
					Clear all
				</Button>
				<Button
					type='button'
					bgColor='var(--orange-color)'
					textColor='var(--main-white-color)'>
					<a href={canvasImageStore} download='meme.jpg'>
						DOWNLOAD
					</a>
				</Button>
			</FlexRow>
		</GeneratorWrapper>
	);
};

export default Generator;
