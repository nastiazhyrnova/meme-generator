import { useDispatch } from 'react-redux';

import Input from '../../UI/Input';
import FlexColumn from '../../UI/FlexColumn';
import FlexRow from '../../UI/FlexRow';
import FontColor from './Font/FontColor/FontColor';
import FontSize from './Font/FontSize';
import Font from './Font/Font';

import { CHANGE_TEXT } from '../../../store/actionTypes';

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
			<FlexColumn>
				<p>{props.title}</p>
				<FlexRow height='2.5rem' gap='0.5rem'>
					<Input
						{...props}
						type='text'
						onChange={e => onTextChange(e)}
						flexgrow='1'
					/>
					<Font textlocation={props.textlocation} />
					<FontSize textlocation={props.textlocation} />
					<FontColor textlocation={props.textlocation} />
				</FlexRow>
			</FlexColumn>
		</>
	);
};

export default TextInput;
