/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';

import i18n from './locale/i18n'
import App from './components/app/App.jsx';
import reportWebVitals from './components/app/reportWebVitals';

import './css/Form.css';
import './css/Card.css';
import './css/Defaults.css';
import './css/Overwrite.css';

ReactDOM.render(<App />, document.getElementById('root'));
reportWebVitals();
