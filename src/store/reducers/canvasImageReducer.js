import { SET_CANVAS_IMAGE, CLEAR_CANVAS_IMAGE } from '../actionTypes';

const canvasImageReducer = (state = null, action) => {
	switch (action.type) {
		case SET_CANVAS_IMAGE:
			return action.canvas;
		case CLEAR_CANVAS_IMAGE:
			return null;
		default:
			return state;
	}
};

export default canvasImageReducer;
