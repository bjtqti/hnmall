'use strict';

import {combineReducers} from "redux";
import {isArray} from '../lib'
import {
	START_FETCH_DETAIL,FINISH_FETCH_DETAIL,
    TOGGLE_ITEM_ATTR,CLOSE_ALERT
} from './constant'

function toggleItem(attr,param){
    let {i,j} = param;
    let checked = !attr[i].values[j].checked;
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

function checkError(sku){
    let exist = false;
    for(let s of sku){
        if(s.checked){
            exist = true;
            break;
        }
    }
    return exist ? '' : '无效的商品规格';
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
            let goodsDetail = {...state.goodsDetail,attr,sku}
            let error = checkError(sku);
            return {...state,goodsDetail,error}
        case CLOSE_ALERT:
            return {...state,error:false}
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    goods
});

export default rootReducer;