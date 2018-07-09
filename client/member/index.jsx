"use strict";
import './index.css'
//import '../common/responsive'
import React from 'react'
import ReactDOM from "react-dom"
import {Index} from './app';
 

if (module.hot) {
    module.hot.accept()
}


ReactDOM.hydrate(<Index />,document.getElementById('app'))
	
  
 