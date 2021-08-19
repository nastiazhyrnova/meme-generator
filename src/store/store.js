import { combineReducers, createStore } from 'redux';

import textReducer from './textReducer';

const reducers = combineReducers({
	text: textReducer,
});

const store = createStore(
	reducers,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
