"use strict";

let { markupOfRoute ,fetchApi,getUri,formatPrice} = require('../lib')


function formatGoodsInfo(res){
  let images = res.item.images.map((path)=>{
    return getUri(path)
  });
  let spec = res.item.spec;
  let attr = [];
  let sku = [];
  let book = {};
  
  spec.specs.forEach((item)=>{
    let values = [];
    let arr = spec.specSku[0].spec_sku_id.split('_');
    item.spec_values.forEach((v,i)=>{
      let id = v.spec_value_id+"";
      book[id] = v.spec_value;
      values.push({
        id:id,
        value:v.spec_value,
        checked:arr.indexOf(id)!==-1 ? true:false
      })
    })
    attr.push({
      id:item.spec_id,
      name:item.spec_name,
      values:values
    })
  })

  spec.specSku.forEach((item,i)=>{
    let arr = item.spec_sku_id.split('_');
    let name = [];
    arr.forEach((key,i)=>{
      name[i]=book[key]
    })
    sku.push({
      id:item.spec_sku_id,
      skuid:item.sku_id,
      value:name.join(';'),
      price:formatPrice(item.price),
      store:parseInt(item.store),
      valid:!!item.valid,
      checked:i===0
    })
  })

  return {
    item_id:res.item.item_id,
    title:res.item.title,
    sub_title:res.item.sub_title,
    price:formatPrice(res.item.price),
    mkt_price:formatPrice(res.item.mkt_price),
    images:images,
    share_title:res.item.share_title,
    store:parseInt(res.item.realStore),
    sub_stock:parseInt(res.item.sub_stock),
    unit:res.item.unit,
    user_max_limit:res.item.user_max_limit,
    shop_id:res.item.shop_id,
    share_sub_title:res.item.share_sub_title,
    shareurl:res.shareurl,
    shoplogo:getUri(res.shop.shop_logo),
    shopname:res.shop.shopname,
    attr:attr,
    sku:sku,
    valid:!!res.item.valid,
    thumbnail:getUri(res.item.image_default_id)
  }
}

/**
 * 商品详情页
 */
exports.goods = async function(ctx, next) {
  let goodsID = ctx.params.id;
  let shopID = ctx.request.query.shop; 
  let ret,markup = '',initialState={};

  try {
    ret = await fetchApi('index.php/topapi',{
      method:'POST',
      data:{
        format:'json',
        v:'v1',
        item_id:goodsID,
        shop_id:shopID,
        method:'item.detail'
      }
    })
  }catch(err){
    throw err;
  }

  initialState = formatGoodsInfo(ret.data);
   
console.log(initialState)
  try {
    markup = await markupOfRoute('goodsdetail', initialState)
  } catch (err) {
    throw err
  }
  await ctx.render('goodsdetail', {
    markup,
    initialState: JSON.stringify(initialState)
  })
}

/**
 * 商品参数
 */
exports.goodsDetail = async function(ctx,next){
  let {id} = ctx.request.body;
  let props = [];
  let remark = [];
  let desc = '';
  let ret;
  try {
    ret = await fetchApi('index.php/topapi',{
      method:'POST',
      data:{
        format:'json',
        v:'v1',
        method:'item.desc',
        item_id:id
      }
    })
  }catch(err){
    throw err;
  }
  desc = ret.data.wap_desc;
  if(ret.data && ret.data.natureProps.length){
    ret.data.natureProps.forEach((item)=>{
      props.push({
        id:item.prop_value_id,
        name:item.prop_name,
        value:item.prop_value
      })
    })
  }

  for(let key in ret.data.remark){
    remark.push({
      name:key,
      value:ret.data.remark[key]
    })
  }

  //if(ret.code===0 && ret.data){

    ctx.body = {props,remark,desc}
  //}
}