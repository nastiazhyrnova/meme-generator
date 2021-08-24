import { useDispatch } from 'react-redux';

import Select from '../../../UI/Select';

import { CHANGE_FONT } from '../../../../store/actionTypes';

const Font = props => {
	const dispatch = useDispatch();

	const changeFont = e => {
		dispatch({
			type: CHANGE_FONT,
			textlocation: props.textlocation,
			font: e.target.value,
		});
	};
	return (
		<Select {...props} onChange={changeFont}>
			<option value='Arial'>Arial</option>
			<option value='Comic Sans MS'>Comic Sans</option>
			<option value='Impact'>Impact</option>
			<option value='Pacifico'>Pacifico</option>
		</Select>
	);
};

export default Font;
