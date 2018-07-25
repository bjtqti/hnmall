"use strict";
import './index.css'
import React from 'react'
import ReactDOM from "react-dom"
import IndexApp from './wrap.jsx';
 

if (module.hot) {
    module.hot.accept()
}

 
var initialState =JSON.parse(document.getElementById("initial-state").textContent);
	//console.log(initialState)
ReactDOM.hydrate(<IndexApp initialState={initialState} />,document.getElementById('app'))
	
  
 