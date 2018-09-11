'use strict';
import {fetchApi,localCache} from '../lib'
import {
	START_FETCH_LIST,FINISH_FETCH_LIST,
	START_GET_STORE,FINISH_GET_STORE,
	START_FETCH_MODULES,FINISH_FETCH_MODULES,
	LOCAL_CACHE_MODULES
} from './constant'



function startGetStore(param){
	return {
		type:START_GET_STORE,
		param
	}
}

function finishGetStore(param,res){
	return {
		type:FINISH_GET_STORE,
		param,
		res
	}
}

function startFetchGoods(param){
	return {
		type:START_FETCH_LIST,
		param
	}
}

function finishFetchGoods(param,res){
	return {
		type:FINISH_FETCH_LIST,
		param,
		res
	}
}

function startFetchModules(){
	return {
		type:START_FETCH_MODULES
	}
}

function finshFetchModules(res){
	return {
		type : FINISH_FETCH_MODULES,
		res
	}
}

/**
 * 获取猜你喜欢商品
 */
export function fetchGoods(param){
    return (dispatch)=>{
        dispatch(startFetchGoods(param));
        fetchApi('/index/goodslist',{
			method:'POST',
			data:{
				page:param.page,
				size:param.size,
				token:param.token
			}
		}).then((res)=>{
            dispatch(finishFetchGoods(param,res));
        });
    }
}

/**
 * 获取附件微店
 */
export function getNearStore(param){
    return (dispatch)=>{
        dispatch(startGetStore(param));
        fetchApi('/index/shop',{
			method:'POST',
			data:{
				lat:param.latitude,
				lng:param.longitude	
			}
		}).then((res)=>{
            dispatch(finishGetStore(param,res));
        });
    }
}

/**
 * 获取首页模块
 */
export function fetchIndexModules(){
	return (dispatch)=>{
		dispatch(startFetchModules());
		let cache = localCache(LOCAL_CACHE_MODULES);
		if(cache){
			dispatch(finshFetchModules(cache))
		}else{
			fetchApi('/index/modules',{
				method:'POST'
			}).then((res)=>{
				//console.log(res)
				localCache(LOCAL_CACHE_MODULES,res,3600)
				dispatch(finshFetchModules(res));
			})
		}
	}
}
