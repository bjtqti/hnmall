'use strict';

import {combineReducers} from "redux";
import {isArray} from '../lib'
import {
	START_FETCH_DETAIL,FINISH_FETCH_DETAIL,
    TOGGLE_ITEM_ATTR,CLOSE_ALERT,
    TOGGLE_POPUP
} from './constant';

/**
 * 置灰不可用属性
 */

function checkStatus(attr,sku,param){
    let {i,j} = param;
    let checkedItem = attr[i].values[j];
    let validId = [];
    for(let s of sku){
        if(checkedItem.checked && s.id.indexOf(checkedItem.id) !== -1){
            let id = s.id.replace(checkedItem.id,'').replace('_','')
            validId.push(id)
        }
    }
    for(let k =0;k<attr.length;k++){
        if(k===i){
            continue;
        }
        for(let value of attr[k].values){
            value.disabled = false;
            if(validId.length && validId.indexOf(value.id) === -1){
                value.disabled = true;
            }
        }
    }
    return attr;
}

function toggleItem(attr,param){
    let {i,j} = param;
    let checkedItem = attr[i].values[j];
    let checked = !checkedItem.checked;
    let _attr = attr.map((item,m)=>{
        let values = item.values.map((val,k)=>{
            if(m===i){
                return {...val,checked:k===j?checked:false}
            }
            return {...val}
        });

        return {...item,values}
    })
    
    return _attr
}

function toggleSku(attr,sku){
    let arr = [];
    //console.log(attr)
    attr.forEach((item)=>{
        item.values.forEach((val)=>{
            val.checked && arr.push(val.id)
        })
    });
    let _sku = sku.map((item)=>{
        let id = arr.join('_');
        let checked = false;
        if(id===item.id){
            checked = true;
        }
        return {...item,checked}
    })
    return _sku;
}

function goods(state={},action){
    switch(action.type){
        case START_FETCH_DETAIL:
            return {...state,isFetching:true,isFetched:false}
        case FINISH_FETCH_DETAIL:
            let detail = action.res;
            return {...state,detail,isFetched:true,isFetching:false}
        case TOGGLE_ITEM_ATTR:
            let attr = toggleItem(state.goodsDetail.attr,action.param);
            let sku = toggleSku(attr,state.goodsDetail.sku);
            attr = checkStatus(attr,sku,action.param);
            let goodsDetail = {...state.goodsDetail,attr,sku}
            return {...state,goodsDetail}
        case CLOSE_ALERT:
            return {...state,error:false}
        case TOGGLE_POPUP:
            let popupStatus = action.param.status;
            return {...state,popupStatus}
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    goods
});

export default rootReducer;