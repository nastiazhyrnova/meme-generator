import { CHANGE_COLOR } from './actionTypes';

export const changeColor = (textType, color) => dispatch => {
	dispatch({
		type: CHANGE_COLOR,
		textType,
		color,
	});
};
