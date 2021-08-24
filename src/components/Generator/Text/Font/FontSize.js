import { useDispatch } from 'react-redux';

import Select from '../../../UI/Select';

import { CHANGE_FONTSIZE } from '../../../../store/actionTypes';

const FontSize = props => {
	const dispatch = useDispatch();

	const changeFontSize = e => {
		dispatch({
			type: CHANGE_FONTSIZE,
			textlocation: props.textlocation,
			fontSize: e.target.value,
		});
	};

	return (
		<Select {...props} onChange={changeFontSize}>
			<option value='75px'>75</option>
			<option value='70px'>70</option>
			<option value='65px'>65</option>
			<option value='60px'>60</option>
			<option value='55px'>55</option>
			<option value='50px'>50</option>
			<option value='45px'>45</option>
		</Select>
	);
};

export default FontSize;
