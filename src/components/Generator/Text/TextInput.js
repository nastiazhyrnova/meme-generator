import React, { useRef } from 'react';

import Color from './TextComponents/Color/Color';
import Size from './TextComponents/Size';
import Font from './TextComponents/Font';

import Input from '../../UI/Input';
import FlexColumn from '../../UI/FlexColumn';
import FlexRow from '../../UI/FlexRow';

const TextInput = props => {
	const textRef = useRef();

	return (
		<>
			<FlexColumn>
				<p>{props.title}</p>
				<Input
					{...props}
					type='text'
					onChange={() => {}}
					ref={textRef}
					width='100%'
				/>
				<FlexRow>
					<Color />
					<Size />
					<Font />
				</FlexRow>
			</FlexColumn>
		</>
	);
};

export default TextInput;
