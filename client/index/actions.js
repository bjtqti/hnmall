'use strict';
import {fetchApi} from '../lib'
import {
	START_FETCH_LIST,FINISH_FETCH_LIST,
	START_GET_STORE,FINISH_GET_STORE
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


