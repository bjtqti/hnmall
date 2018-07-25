"use strict";

import React from 'react'
import CategoryApp from './wrap.jsx';
 

export default (initialState) => {
    return new Promise((resolve,reject)=>{
        let app = <CategoryApp  initialState={initialState}/>
        resolve({app})
    })
}