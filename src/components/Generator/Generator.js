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

	const [image, setImage] = useState(null);

	const dispatch = useDispatch();

	const uploadImageHandler = e => {
		e.preventDefault();
		if (e.target.files[0]) {
			const reader = new FileReader();
			reader.onloadend = () => {
				const img = new Image();
				img.src = reader.result;
				setImage(img);
			};
			reader.readAsDataURL(e.target.files[0]);
		}
		//TODO: move canvasSize to redux and change image size after upload
	};

	const resetAll = () => {
		setImage(null);
		dispatch({
			type: RESET_TEXTS,
		});
		//TODO: remove values from the inputs
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
					/>
					<TextInput
						title='Bottom text'
						type='Text'
						textlocation='bottom'
						placeholder='Write bottom text here'
					/>
				</FlexColumn>
			</FlexRow>
			<FlexRow>
				<Button type='button' onClick={resetAll}>
					Reset all
				</Button>
				<Button
					type='button'
					onClick={() => {}}
					bgColor='var(--orange-color)'
					textColor='var(--main-white-color)'>
					DOWNLOAD
				</Button>
			</FlexRow>
		</GeneratorWrapper>
	);
};

export default Generator;
