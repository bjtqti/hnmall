"use strict";

import React from 'react'
import IndexApp from './wrap.jsx';
 

export default (initialState) => {
    return new Promise((resolve,reject)=>{
        let app = <IndexApp  initialState={initialState}/>
        resolve({app})
    })
}