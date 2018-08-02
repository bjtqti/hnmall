'use strict';
import {fetchApi} from '../lib'
import {
	START_FETCH_DETAIL,FINISH_FETCH_DETAIL,
	TOGGLE_ITEM_ATTR,CLOSE_ALERT
} from './constant'


function startFetchDetail(param){
	return {
		type:START_FETCH_DETAIL,
		param
	}
}

function finishFetchDetail(param,res){
	return {
		type:FINISH_FETCH_DETAIL,
		param,
		res
	}
}

/**
 * 获取商品详情
 */
export function fetchGoodsDetail(param){
    return (dispatch)=>{
        dispatch(startFetchDetail(param));
        fetchApi('/goods/detail',{
			method:'POST',
			data:{
				id:param.itemId
			}
		}).then((res)=>{
            dispatch(finishFetchDetail(param,res));
        });
        
    }
}

function finishToggleAttr(param){
	return {
		type:TOGGLE_ITEM_ATTR,
		param
	}
}

function finishCloseAlert (param){
	return {
		type:CLOSE_ALERT,
		param
	}
}

/**
 * 切换商品属性
 */
export function toggleAttr(param){
	return (dispatch)=>{
		dispatch(finishToggleAttr(param))
	}
}

/**
 * 关闭弹出框
 */
export function closeAlert(param){
	return(dispatch)=>{
		dispatch(finishCloseAlert(param))
	}
}

