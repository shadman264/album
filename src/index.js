import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './index.reducer';
import thunkMiddleware from 'redux-thunk';

const store = createStore(
	rootReducer,
	applyMiddleware(thunkMiddleware)
	);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, 
document.getElementById('root'));
