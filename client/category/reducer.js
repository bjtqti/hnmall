'use strict';

import {combineReducers} from "redux";
import {isArray} from '../lib'
import {
	START_FETCH_LIST,FINISH_FETCH_LIST
} from './constant'
 

function category(state={},action){
    switch(action.type){
        case START_FETCH_LIST:
            return {...state,isFetching:true,isFetched:false}
        case FINISH_FETCH_LIST:
            let categoryList = action.res;
            return {...state,categoryList,isFetched:true,isFetching:false}
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    category
});

export default rootReducer;