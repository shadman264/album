import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import allReducers from './index.reducer';

const store = createStore(allReducers);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, 
document.getElementById('root'));
