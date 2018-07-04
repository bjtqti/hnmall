 
let { markupOfRoute ,request,fetchApi} = require('../lib')

exports.index = async function(ctx, next) {
  let ret,markup = '',initialState={}

  try {
    ret = await request("index.php/topapi",{
      method:'theme.modules',
      tmpl:'index'
    })
  } catch (err) {
    throw err
  }
  if (ret.status === 200 && ret.data) {
    //console.log(ret.data)
    initialState = ret.data.data;
    
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

exports.goodslist = async function(ctx,next){
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
    ret = await request("/index.php/topapi",{
      method:'theme.guesslike'
    })
  }catch(err){
    throw err;
  }

  if(ret.status===200 && ret.data){
    let list = ret.data.data.list;

    ctx.body = {
      goodslist:list
    }
  }
}

exports.shopinfo = async function(ctx,next){
   
  //console.log(ctx.request.query)
  let {lat,lng} = ctx.request.query;

  try {
    ret = await fetchApi("/oto/store-api.html?method=shop.index.storeone",{
      dimensions:lat,
      longitude:lng,
      storenum:1
    });
  } catch (err) {
    throw err;
  }
  ctx.body = ret.data
}

exports.error = async function (ctx, next) {
  try {
    await next()
  } catch (err) {
    if (err.code === 404) {
      await ctx.render('404')
    } else {
      await ctx.render('error', { msg: err.message })
    }
  }
}


exports.notFound = async function (ctx) {
  await ctx.render('404')
}