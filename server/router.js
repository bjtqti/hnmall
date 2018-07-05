let Router = require('koa-router')
let { index, goodslist,shopinfo,notFound } = require('./controller/main')
let {category,categoryList} = require('./controller/category')

const router = new Router()

router.get('/', index)
router.get('/category',category);
router.get('/category/list',categoryList);
router.get('/goodslist',goodslist)

router.get('/shopinfo',shopinfo)

router.all('*', notFound)

module.exports = router