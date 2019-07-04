import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Root from './Root';
import {Provider} from 'react-redux';
import configureStore from './store';

const store = configureStore();

ReactDOM.render(
	<Provider store={store}>
		<Root />
	</Provider>, 
document.getElementById('root'));
