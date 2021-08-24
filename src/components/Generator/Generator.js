import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import Canvas from './Canvas/Canvas';
import ImageInput from './ImageUpload/ImageInput';
import Button from '../UI/Button';
import TextInput from './Text/TextInput';
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

const Generator = () => {
	const textStore = useSelector(state => state.text);
	const canvasImageStore = useSelector(state => state.canvasImage);

	const [image, setImage] = useState(null);

	const dispatch = useDispatch();

	const uploadImageHandler = e => {
		e.preventDefault();
		if (e.target.files[0]) {
			const reader = new FileReader();
			reader.readAsDataURL(e.target.files[0]);
			const img = new Image();
			reader.onloadend = () => {
				img.src = reader.result;
				setImage(img);
			};
		}
	};

	const resetAll = () => {
		setImage(null);
		dispatch({
			type: RESET_TEXTS,
		});
	};

	return (
		<GeneratorWrapper>
			<h1>Meme Generator</h1>
			<ImageInput uploadImageHandler={uploadImageHandler} />
			<FlexRow>
				<Canvas
					image={image}
					topText={textStore.top.text}
					topTextColor={textStore.top.color}
				/>
				<FlexColumn>
					<TextInput
						title='Top text'
						type='Text'
						textlocation='top'
						placeholder='Write top text here'
						value={textStore.top.text}
					/>
					<TextInput
						title='Bottom text'
						type='Text'
						textlocation='bottom'
						placeholder='Write bottom text here'
						value={textStore.bottom.text}
					/>
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
