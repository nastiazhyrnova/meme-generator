import { combineReducers, createStore } from 'redux';

import textReducer from './reducers/textReducer';
import canvasSizeReducer from './reducers/canvasSizeReducer';
import canvasImageReducer from './reducers/canvasImageReducer';

const reducers = combineReducers({
	text: textReducer,
	canvasSize: canvasSizeReducer,
	canvasImage: canvasImageReducer,
});

const store = createStore(
	reducers,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
