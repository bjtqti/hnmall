 
let { markupOfRoute ,fetchApi} = require('../lib')

exports.login = async function(ctx, next) {
  let ret,markup = '',initialState={};
  try {
    ret = await fetchApi('index.php/topapi',{
      method:"POST",
      data:{
        format:'json',
        v:'v1',
        method:'user.index'
      }
    })
  }catch(err){
    throw err;
  }

  if(ret.code===0){
    initialState = {appId:ret.data.weixin_login.appKey};
  }
  //console.log(ret,initialState)

  try {
    markup = await markupOfRoute('login', initialState)
  } catch (err) {
    throw err
  }
  await ctx.render('login', {
    markup,
    initialState: JSON.stringify(initialState)
  })
}

exports.sendSms = async function(ctx,next){
  let {phone} = ctx.request.body;
  //console.log(phone)
  try {
    ret = await fetchApi('index.php/topapi',{
      method:'POST',
      data:{
        format:'json',
        v:'v1',
        method:'user.sendSms',
        mobile:phone,
        type:'topapi-signin'
      }
    })
  }catch(err){
    throw err;
  }

  //if(ret.status===200 && ret.data){
    ctx.body = ret
  //}
}

exports.signIn = async function(ctx,next){
  let {phone,code} = ctx.request.body;
  //console.log(phone,code)

  try {
    ret = await fetchApi('index.php/topapi',{
      method:"POST",
      data:{
        format:'json',
        v:'v1',
        method:'user.login',
        account:phone,
        vcode:code,
        type:'mobile',
        deviceid:'mobile'
      }
    })
  }catch(err){
    throw err;
  }
  //console.log(ret)
  //if(ret.status===200 && ret.data){
    ctx.body = ret
  //}
}

exports.weixinLogin = async function(ctx,next){
   
  try {
    ret = await fetchApi('index.php/topapi',{
      method:"POST",
      data:{
        format:'json',
        v:'v1',
        method:'user.index'
      }
    })
  }catch(err){
    throw err;
  }

  //if(ret.status===200 && ret.data){
    ctx.body = ret
  //}
}


