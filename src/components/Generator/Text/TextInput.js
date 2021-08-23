import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import Input from '../../UI/Input';
import FlexColumn from '../../UI/FlexColumn';
import FlexRow from '../../UI/FlexRow';
import FontColor from './Font/FontColor/FontColor';
import FontSize from './Font/FontSize';
import Font from './Font/Font';

import { CHANGE_TEXT } from '../../../store/actionTypes';

const TextChangeFieldsWrapper = styled.div`
	height: 2.5rem;
	display: flex;
	flex-direction: row;
	gap: 0.5rem;
	width: 100%;
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
				<p>{props.title}</p>
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
						<Font textlocation={props.textlocation} />
						<FontSize textlocation={props.textlocation} />
						<FontColor textlocation={props.textlocation} />
					</TextChangeFieldsWrapper>
				</FlexRow>
			</FlexColumn>
		</>
	);
};

export default TextInput;
