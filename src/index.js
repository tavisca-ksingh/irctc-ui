import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Search from './Search/Search';


ReactDOM.render(<Search/>, document.getElementById('root'));


serviceWorker.unregister();
