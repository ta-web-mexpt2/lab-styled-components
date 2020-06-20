import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import Uikit from "uikit";
import "uikit/dist/css/uikit.min.css";
import Icons from "uikit/dist/js/uikit-icons";
	
Uikit.use(Icons);


ReactDOM.render(
    <App />,
  document.getElementById('root')
);

