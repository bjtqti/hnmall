"use strict";

let fs = require("fs");
let { markupOfRoute ,fetchApi,getUri} = require('../lib');
 

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
        icon:getUri(item.cat_logo),
        children:formatCateList(item['lv'+k],k+1)
      })
    })

    return categorys;
}

exports.category = async function(ctx, next) {
  let ret = '',markup = '',initialState=[];
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
  
  //由于接口太慢，先用缓存数据填充，稍后更新为真实的数据
  //if(fs.existsSync('./cate.json')){
    initialState = require('../cache/category.json');
  //}
  
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
  let ret,list=[];
  try {
    ret = await fetchApi('index.php/topapi',{
      method:'POST',
      data:{
        format:'json',
        v:'v1',
        method:'category.itemCategory'
      }
    })
  }catch(err){
    throw err;
  }

  if(ret.code === 0 && ret.data){
    list = formatCateList(ret.data.categorys);
    fs.writeFile('./server/cache/category.json', JSON.stringify(list),function(err){
      if(err){
        console.log(err)
      }
    });
  }

  ctx.body = {
    categoryList:list
  }
}

