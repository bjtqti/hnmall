"use strict";

let { markupOfRoute ,fetchApi} = require('../lib');

exports.index = async function(ctx, next) {
  let ret,markup = '',initialState={}
  
  try {
    ret = await fetchApi("index.php/topapi",{
      method:'POST',
      data:{
        format:'json',
        v:'v1',
        method:'theme.modules',
        tmpl:'index'
      }
    })
  } catch (err) {
    throw err
  }
  //console.log(ret)
  if (ret.code === 0 && ret.data) {
    //console.log(ret.data)
    initialState = ret.data;
    
  }
  
  try {
    markup = await markupOfRoute('index', initialState, ctx)
  } catch (err) {
    throw err
  }
  await ctx.render('index', {
    markup,
    initialState: JSON.stringify(initialState)
  })
}
/**
 * 猜你喜欢的商品
 */
exports.goodslist = async function(ctx,next){
  let ret;
  let {token='',page=1,size=20} = ctx.request.body;
    // ctx.res.setHeader('Access-Control-Allow-Origin', '*')
    // ctx.res.setHeader(
    //     'Access-Control-Allow-Methods',
    //     'GET,PUT,POST,DELETE,OPTIONS'
    // )
    // ctx.res.setHeader(
    //     'Access-Control-Allow-Headers',
    //     'Content-Type, Authorization, Content-Length, X-Requested-With, Accept, x-csrf-token, origin'
    // )

  try {
    ret = await fetchApi("/index.php/topapi",{
      method:'POST',
      data:{
        format:'json',
        v:'v1',
        method:'theme.guesslike',
        accessToken:token,
        page_no:page,
        page_size:size
      }
    })
  }catch(err){
    throw err;
  }

  //if(ret.code===0 && ret.data){
    ctx.body = ret.data
  //}
}

/**
 * 微信授权信息
 */
exports.weixinInfo =async function(ctx,next){
  let url = ctx.request.body.url;
  let ret;
  try {
    ret = await fetchApi('/wap/wxshare.html',{
      params:{url:url}
    })
  }catch(err){
    throw err;
  }
  //console.log(ret)
  ctx.body = ret;
}

/**
 * 附近微店信息
 */
exports.shopinfo = async function(ctx,next){
  //console.log(ctx.request.query)
   
  let {lat,lng} = ctx.request.body;
  let ret = await fetchApi('/oto/store-api.html',{
    params:{
      method:'shop.index.storeone',
      dimensions:lat,
      longitude:lng,
      storenum:1,
      length:4
    }
  })
  ctx.body = ret;
}

/**
 * 获取用户token
 */
exports.getUserToken = async function(ctx,next){
  let {code} = ctx.request.body;
  let ret;
  try {
    ret = await fetchApi('/weidian/code-token.html',{
      data:{
        code:code
      }
    })
  }catch(err){
    throw(err)
  }
 // console.log(code)
  ctx.body = ret;
}

/**
 * 检查token是否过期
 */
exports.checkToken = async function(ctx,next){
  let {token} = ctx.request.body;
  let ret;
  try {
    ret = await fetchApi("/index.php/topapi",{
      method:'POST',
      data:{
        format:'json',
        v:'v1',
        method:'member.index',
        accessToken:token
      }
    })
  }catch(err){
    throw (err)
  }
  //console.log(token)
  ctx.body = ret;
}

/**
 * 微信分享回调
 */
exports.wxShare = async function(ctx,next){
  let {data} = ctx.request.body;
  let ret;
  try {
    ret = await fetchApi("/wap/wxaddsharelog.html",{
      method:"POST",
      data:{
        data:data
      }
    })
  }catch (err){
    throw(err)
  }
  ctx.body = ret;
}


exports.error = async function (ctx, next) {
  try {
    await next()
  } catch (err) {
    if (err.code === 404) {
      let ret = await ctx.render('404')
    } else {
      await ctx.render('error', { msg: err.message })
    }
  }
}

exports.notFound = async function (ctx) {
  await ctx.render('404')
}