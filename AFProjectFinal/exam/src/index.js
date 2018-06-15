import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import LogPage from './login';

ReactDOM.render(<LogPage />, document.getElementById('root'));
registerServiceWorker();
