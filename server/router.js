let Router = require('koa-router')
let { index, goodslist,shopinfo,weixinInfo,notFound } = require('./controller/main')
let {category,categoryList} = require('./controller/category')
let {login,sendSms,signIn,weixinLogin} = require('./controller/login')
const router = new Router()

router.get('/', index)
router.get('/index.html', index)
router.get('/category.html',category);
router.post('/index/goodslist',goodslist);
router.post('/index/shop',shopinfo);
router.post('/index/weixin',weixinInfo);
router.post('/category/list',categoryList);
router.get('/login.html',login);
//router.get('/member.html',member);
router.post('/login/sms',sendSms);
router.post('/login/sign',signIn);
router.post('/login/wexin',weixinLogin);

router.all('*', notFound)

module.exports = router