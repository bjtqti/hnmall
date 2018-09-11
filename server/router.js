let Router = require('koa-router')
let { index, goodslist,shopinfo,fetchModules,
	weixinInfo,getUserToken,checkToken,wxShare,notFound } = require('./controller/main')
let {category,categoryList} = require('./controller/category')
let {goods,goodsDetail} = require('./controller/goodsdetail')
//let {member} = require('./controller/member')
//let {login,sendSms,signIn,weixinLogin} = require('./controller/login')
const router = new Router()

router.get('/', index)
router.get('/index.html', index)
router.get('/category.html',category);
// router.get('/member.html',member);
// router.get('/login.html',login);
router.get('/item-:id.html',goods);
router.post('/index/token',getUserToken);
router.post('/index/goodslist',goodslist);
router.post('/index/shop',shopinfo);
router.post('/index/weixin',weixinInfo);
router.post('/index/wxshare',wxShare);
router.post('/index/checktoken',checkToken);
router.post('/index/modules',fetchModules);
router.post('/category/list',categoryList);
router.post('/goods/detail',goodsDetail);
// router.post('/login/sms',sendSms);
// router.post('/login/sign',signIn);
// router.post('/login/wexin',weixinLogin);

router.all('*', notFound)

module.exports = router