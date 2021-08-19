import { cloneDeep } from 'lodash';

import {
	CHANGE_COLOR,
	CHANGE_TEXT,
	CHANGE_FONT,
	CHANGE_FONTSIZE,
} from './actionTypes';

const changeTextPropertyAction = (state, action, property) => {
	const newState = cloneDeep(state);
	newState[action.textlocation][property] = action[property];
	return newState;
};

const initialState = {
	top: {
		text: '',
		color: '#ffffff',
		fontSize: '75px',
		font: 'Arial',
	},
	bottom: {
		text: '',
		color: '#ffffff',
		size: '75px',
		fontSize: 'Arial',
	},
};

const textReducer = (state = initialState, action) => {
	switch (action.type) {
		case CHANGE_COLOR:
			return changeTextPropertyAction(state, action, 'color');
		case CHANGE_TEXT:
			// console.log(action);
			// return state;

			return changeTextPropertyAction(state, action, 'text');
		case CHANGE_FONT:
			return changeTextPropertyAction(state, action, 'font');
		case CHANGE_FONTSIZE:
			return changeTextPropertyAction(state, action, 'fontSize');
		default:
			return state;
	}
};

export default textReducer;
