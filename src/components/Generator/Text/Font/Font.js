import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import Select from '../../../UI/Select';

import { CHANGE_FONT } from '../../../../store/actionTypes';

const Arial = styled.option`
	font-family: 'Arial' !important;
`;
const ComicSans = styled.option`
	font-family: 'Comic Sans' !important;
`;
const Oswald = styled.option`
	font-family: 'Oswald' !important;
`;
const Pacifico = styled.option`
	font-family: 'Pacifico' !important;
`;

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
		<Select {...props} onChange={changeFont} width='65%'>
			<Arial value='Arial'>Arial</Arial>
			<ComicSans value='Comic Sans'>Comic Sans</ComicSans>
			<Oswald value='Oswald'>Oswald</Oswald>
			<Pacifico value='Pacifico'>Pacifico</Pacifico>
		</Select>
	);
};

export default Font;
