import { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import ColorPicker from './ColorPicker';

import textChangeFieldsStyle from '../../../../../styles/textChangeFieldsStyle';

const ColorButton = styled.button`
	${textChangeFieldsStyle};
	padding: 0.5rem;
	flex: 0 0 auto;
	height: 100%;
	width: 2.5rem;
	&:hover {
		cursor: pointer;
	}
`;

const FontColor = props => {
	const [showColorPicker, setShowColorPicker] = useState(false);

	const textStore = useSelector(state => state.text);

	return (
		<>
			<ColorButton
				{...props}
				title='Text color'
				bgColor={textStore[props.textlocation].color}
				onClick={() => setShowColorPicker(!showColorPicker)}></ColorButton>
			{showColorPicker && (
				<ColorPicker
					textlocation={props.textlocation}
					showColorPicker={showColorPicker}
					closeColorPicker={() => setShowColorPicker(false)}
				/>
			)}
		</>
	);
};

export default FontColor;
