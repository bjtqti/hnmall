 
let { markupOfRoute ,request} = require('../lib')

//格式化分类数据
function formatCateList (data,n) {
    let categorys = [];
    let k = n ? n : 2;
    if(!Array.isArray(data)){
      return false;
    }

    data.forEach((item)=>{
      categorys.push({
        id:item.cat_id,
        name:item.cat_name,
        icon:item.cat_logo,
        children:formatCateList(item['lv'+k],k+1)
      })
    })

    return categorys;
}

exports.category = async function(ctx, next) {
  let ret,markup = '',initialState=require('./mock').mockdata;
  // try {
  //   ret = await request('index.php/topapi',{
  //     method:'category.itemCategory'
  //   })
  // }catch(err){
  //   throw err;
  // }

  // if(ret.status===200 && ret.data){
  //   initialState = formatCateList(ret.data.data.categorys)
  // }
//console.log(initialState)
  try {
    markup = await markupOfRoute('category', initialState)
  } catch (err) {
    throw err
  }
  await ctx.render('category', {
    markup,
    initialState: JSON.stringify(initialState)
  })
}

exports.categoryList = async function(ctx,next){
  try {
    ret = await request('index.php/topapi',{
      method:'category.itemCategory'
    })
  }catch(err){
    throw err;
  }

  if(ret.status===200 && ret.data){
    let list = formatCateList(ret.data.data.categorys)

    ctx.body = {
      categoryList:list
    }
  }
}