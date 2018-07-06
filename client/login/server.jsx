"use strict";

import React from 'react'
import {Index} from './app.jsx';
 

export default (initialState) => {
    return new Promise((resolve,reject)=>{
        let app = <Index />
        resolve({app})
    })
}