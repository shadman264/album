import {applyMiddleware, createStore, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './index.reducer';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = () => createStore(
	rootReducer,
	composeEnhancer(applyMiddleware(thunkMiddleware))
);

export default configureStore;