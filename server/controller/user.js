 
let { markupOfRoute ,request} = require('../lib')

exports.login = async function(ctx, next) {
  let ret,markup = '',initialState={};
   

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

  try {
    ret = await request('index.php/topapi',{
      method:'user.sendSms',
      mobile:phone,
      type:'topapi-signin'
    })
  }catch(err){
    throw err;
  }

  if(ret.status===200 && ret.data){
    ctx.body = ret.data
  }
}

exports.userLogin = async function(ctx,next){
  let {phone,code} = ctx.request.body;
  //console.log(phone,type,ctx.request.body)

  try {
    ret = await request('index.php/topapi',{
      method:'user.login',
      account:phone,
      vcode:code,
      type:'mobile',
      deviceid:'mobile'
    })
  }catch(err){
    throw err;
  }

  if(ret.status===200 && ret.data){
    ctx.body = ret.data
  }
}