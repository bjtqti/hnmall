'use strict'
import {
    createStore, applyMiddleware,bindActionCreators,compose
}
from "redux";
import React,{Component} from "react";
import thunkMiddleware from "redux-thunk";

const createStoreWithMiddleware = compose(
    applyMiddleware(thunkMiddleware)
)(createStore)

export default createStoreWithMiddleware;

export function wrapComponentWithActions(UnwrapperComponent,actions){
    class WrappedComponent extends Component{

        render(){
            return (
                <UnwrapperComponent {...this.props} 
                {...bindActionCreators(actions,this.props.dispatch)}/>
            )
        }
    }
    return WrappedComponent;
}

