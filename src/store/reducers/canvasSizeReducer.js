import { CHANGE_CANVAS_SIZE } from '../actionTypes';

const canvasSizeReducer = (state = 500, action) => {
	switch (action.type) {
		case CHANGE_CANVAS_SIZE:
			return action.size;
		default:
			return state;
	}
};

export default canvasSizeReducer;
