"use strict";
import './index.css'
//import '../common/responsive'
import React from 'react'
import ReactDOM from "react-dom"
import {Index} from './app';
 

if (module.hot) {
    module.hot.accept()
}

var initialState =JSON.parse(document.getElementById("initial-state").textContent);

ReactDOM.hydrate(<Index initialState={initialState}/>,document.getElementById('app'))
	
  
 