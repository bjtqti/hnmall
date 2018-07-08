let Router = require('koa-router')
let { index, goodslist,shopinfo,notFound } = require('./controller/main')
let {category,categoryList} = require('./controller/category')
let {sendSms,login,signIn} = require('./controller/login')
const router = new Router()

router.get('/', index)
router.get('/category.html',category);
router.get('/login.html',login);
router.get('/category/list',categoryList);
router.get('/index/goodslist',goodslist);
router.post('/login/sms',sendSms);
router.post('/login/sign',signIn);
router.get('/shopinfo',shopinfo)

router.all('*', notFound)

module.exports = router