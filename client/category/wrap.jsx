'use strict'
import React,{Component} from "react";
import {Provider,connect} from "react-redux";
import rootReducer from "./reducer";
import createStoreWithMiddleware,{wrapComponentWithActions} from "../lib/redux-helper";
import {Category} from "./app.jsx";
import * as actions from "./actions";

let CategoryConnected = connect((state)=>{
    return state;
})(wrapComponentWithActions(Category,actions));

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

class CategoryApp extends Component{
    render(){
        const categoryList = this.props.initialState;
        const initialState = {
            category:{
                categoryList,
                isFetching:false,
                isFetched:false
            }
        };
        let store = configureStore(initialState);
        return (
            <Provider store={store}>
                <CategoryConnected />
            </Provider>
        )
    }
}

export default CategoryApp;