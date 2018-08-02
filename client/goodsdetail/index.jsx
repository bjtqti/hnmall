"use strict";
import './index.css'
//import '../common/responsive'
import React from 'react'
import ReactDOM from "react-dom"
import GoodsDetailApp from './wrap.jsx';
 

if (module.hot) {
    module.hot.accept()
}

 
var initialState =JSON.parse(document.getElementById("initial-state").textContent);
	//console.log(initialState)
ReactDOM.hydrate(<GoodsDetailApp initialState={initialState} />,document.getElementById('app'))
	
  
 