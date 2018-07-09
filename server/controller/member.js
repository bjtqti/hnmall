 
let { markupOfRoute ,request} = require('../lib')

exports.member = async function(ctx, next) {
  let ret,markup = '',initialState={};
  
  try {
    markup = await markupOfRoute('member', initialState)
  } catch (err) {
    throw err
  }
  await ctx.render('member', {
    markup,
    initialState: JSON.stringify(initialState)
  })
}