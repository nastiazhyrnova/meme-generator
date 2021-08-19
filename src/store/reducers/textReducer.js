import { CHANGE_COLOR } from '../actionTypes';

const initialState = {
	top: {
		text: '',
		color: '#ffffff',
		size: '75px',
		font: 'Arial',
	},
	bottom: {
		text: '',
		color: '#ffffff',
		size: '75px',
		font: 'Arial',
	},
};

const textReducer = (state = initialState, action) => {
	switch (action.type) {
		case CHANGE_COLOR:
			// if (action.textType === 'top') {
			const newTopText = { ...state.top };
			console.log(newTopText);
			return {
				...state,
				newTopText,
				// };
			};

		default:
			return state;
	}
};

export default textReducer;
