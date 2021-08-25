import { useDispatch } from 'react-redux';

import Select from '../../../UI/Select';

import { CHANGE_FONTSIZE } from '../../../../store/actionTypes';

const FontSizes = props => {
	const dispatch = useDispatch();

	const changeFontSize = e => {
		dispatch({
			type: CHANGE_FONTSIZE,
			textlocation: props.textlocation,
			fontSize: e.target.value,
		});
	};

	return (
		<Select {...props} onChange={changeFontSize} width='35%'>
			<option value='75px'>75px</option>
			<option value='70px'>70px</option>
			<option value='65px'>65px</option>
			<option value='60px'>60px</option>
			<option value='55px'>55px</option>
			<option value='50px'>50px</option>
			<option value='45px'>45px</option>
			<option value='40px'>40px</option>
			<option value='35px'>35px</option>
			<option value='30px'>30px</option>
		</Select>
	);
};

export default FontSizes;
