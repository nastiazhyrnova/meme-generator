import { combineReducers, createStore } from 'redux';

import textReducer from './reducers/textReducer';
import canvasSizeReducer from './reducers/canvasSizeReducer';

const reducers = combineReducers({
	text: textReducer,
	canvasSize: canvasSizeReducer,
});

const store = createStore(
	reducers,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
