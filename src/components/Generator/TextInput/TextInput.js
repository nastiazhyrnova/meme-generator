import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import Input from '../../UI/Input';
import FlexColumn from '../../UI/FlexColumn';
import FlexRow from '../../UI/FlexRow';
import FontColor from './Font/FontColor/FontColor';
import FontSizes from './Font/FontSizes';
import Fonts from './Font/Fonts';

import { CHANGE_TEXT } from '../../../store/actionTypes';

const TextChangeFieldsWrapper = styled.div`
	height: 2.5rem;
	display: flex;
	flex-direction: row;
	gap: 0.5rem;
	width: 100%;
`;

const Title = styled.p`
	opacity: ${props => (props.disabled ? '0.4' : '1')};
`;

const TextInput = props => {
	const dispatch = useDispatch();

	const onTextChange = e => {
		dispatch({
			type: CHANGE_TEXT,
			textlocation: props.textlocation,
			text: e.target.value,
		});
	};

	return (
		<>
			<FlexColumn gap='0.75rem'>
				<Title disabled={props.disabled}>{props.title}</Title>
				<FlexRow gap='0.5rem'>
					<FlexRow>
						<Input
							{...props}
							type='text'
							onChange={e => onTextChange(e)}
							width='100%'
						/>
					</FlexRow>
					<TextChangeFieldsWrapper>
						<Fonts
							textlocation={props.textlocation}
							disabled={props.disabled}
						/>
						<FontSizes
							textlocation={props.textlocation}
							disabled={props.disabled}
						/>
						<FontColor
							textlocation={props.textlocation}
							disabled={props.disabled}
						/>
					</TextChangeFieldsWrapper>
				</FlexRow>
			</FlexColumn>
		</>
	);
};

export default TextInput;
