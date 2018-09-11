'use strict';

import {combineReducers} from "redux";
import {isArray} from '../lib'
import {
	START_FETCH_LIST,FINISH_FETCH_LIST,
	START_GET_STORE,FINISH_GET_STORE,
    START_FETCH_MODULES,FINISH_FETCH_MODULES,
} from './constant'
 
function formartGoodsList(goodsList,list){
	if(!isArray(goodsList)){
		return isArray(list) ? list : [];
	}
	if(!isArray(list)){
		return goodsList
	}
	return [...goodsList,...list];
} 

function index(state={},action){
    switch(action.type){
        case START_FETCH_MODULES:
            return {...state,isGetching:true,isGetched:false}
        case FINISH_FETCH_MODULES:
        //console.log(res)
            let {modules,more_url} = action.res.modules;
            return {...state,isGetching:false,isGetched:true,modules,more_url}
        case START_FETCH_LIST:
            return {...state,isFetching:true,isFetched:false}
        case FINISH_FETCH_LIST:
        	let {res,param} = action;
        	let goodsList=formartGoodsList(state.goodsList,res.list);
        	let pageIndex = param.page+1;
        	let empty = isArray(res.list) && res.list.length ? false : true;
            return {...state,goodsList,pageIndex,isFetched:empty,isFetching:false}
        case START_GET_STORE:
        	return {...state,isUpdating:true,isUpdated:false}
        case FINISH_GET_STORE:
            //console.log(action)
        	let shops = action.res? action.res.message:null;
        	return {...state,isUpdating:false,isUpdated:true,coords:action.param,shops}
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    index
});

export default rootReducer;