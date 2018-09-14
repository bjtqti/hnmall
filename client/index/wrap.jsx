'use strict'
import React,{Component} from "react";
import {Provider,connect} from "react-redux";
import rootReducer from "./reducer";
import createStoreWithMiddleware,{wrapComponentWithActions} from "../lib/redux-helper";
import {Index} from "./app.jsx";
import * as actions from "./actions";

let IndexConnected = connect((state)=>{
    return state;
})(wrapComponentWithActions(Index,actions));

function configureStore(initialState){
    const store = createStoreWithMiddleware(rootReducer, initialState);

    if (module.hot) {
        module.hot.accept('./reducer', () => {
            const nextRootReducer = require('./reducer');
            store.replaceReducer(nextRootReducer);
        });
    }
    return store
}

class IndexApp extends Component{
    render(){
        const {modules,more_url,config} = this.props.initialState;
        const initialState = {
            index:{
                config,
                modules,
                more_url,
                goodsList:[],
                pageIndex:1,
                isFetching:false,
                isFetched:false
            }
        };
        let store = configureStore(initialState);
        return (
            <Provider store={store}>
                <IndexConnected />
            </Provider>
        )
    }
}

export default IndexApp;