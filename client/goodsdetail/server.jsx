"use strict";

import React from 'react'
import GoodsDetailApp from './wrap.jsx';
 

export default (initialState) => {
    return new Promise((resolve,reject)=>{
        let app = <GoodsDetailApp  initialState={initialState}/>
        resolve({app})
    })
}