'use strict';
import {fetchApi,localCache} from '../lib'
import {
	START_FETCH_LIST,FINISH_FETCH_LIST,
	LOCAL_STORE_CATE
} from './constant'


function startFetchList(param){
	return {
		type:START_FETCH_LIST,
		param
	}
}

function finishFetchList(param,res){
	return {
		type:FINISH_FETCH_LIST,
		param,
		res
	}
}

/**
 * 获取分类数据
 */
export function fetchCategory(param){
    return (dispatch)=>{
    	let cache = localCache(LOCAL_STORE_CATE);
        dispatch(startFetchList(param));
        if(cache){
        	dispatch(finishFetchList(param,cache));
        }else{
	        fetchApi('/category/list',{
				method:'POST'
			}).then((res)=>{
				let list = res.categoryList;
				localCache(LOCAL_STORE_CATE,list,60*60)
	            dispatch(finishFetchList(param,list));
	        });
        }
    }
}


