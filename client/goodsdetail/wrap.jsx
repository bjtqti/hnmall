'use strict'
import React,{Component} from "react";
import {Provider,connect} from "react-redux";
import rootReducer from "./reducer";
import createStoreWithMiddleware,{wrapComponentWithActions} from "../lib/redux-helper";
import {GoodsDetail} from "./app.jsx";
import * as actions from "./actions";

let GoodsDetailConnected = connect((state)=>{
    return state;
})(wrapComponentWithActions(GoodsDetail,actions));

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

class GoodsDetailApp extends Component{
    render(){
        const goodsDetail = this.props.initialState;
        const initialState = {
            goods:{
                goodsDetail,
                isFetching:false,
                isFetched:false
            }
        };
        let store = configureStore(initialState);
        return (
            <Provider store={store}>
                <GoodsDetailConnected />
            </Provider>
        )
    }
}

export default GoodsDetailApp;