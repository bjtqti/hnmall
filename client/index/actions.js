'use strict';
import {fetchApi,localCache} from '../lib'
import {GPS_KEY} from '../common/constant.js'
import {
	START_FETCH_LIST,FINISH_FETCH_LIST,
	START_GET_STORE,FINISH_GET_STORE,
	START_FETCH_MODULES,FINISH_FETCH_MODULES,
	LOCAL_CACHE_MODULES
} from './constant'



function startGetStore(){
	return {
		type:START_GET_STORE
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
	if(!param){
		param = {latitude:28.194104,longitude:113.013206};
	}
    return (dispatch)=>{
        dispatch(startGetStore());
        fetchApi('/index/shop',{
			method:'POST',
			data:{
				lat:param.latitude,
				lng:param.longitude	
			}
		}).then((res)=>{
			localCache(GPS_KEY,param,60*60);
            dispatch(finishGetStore(param,res));
        }).catch((err)=>{
        	console.log(err)
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
