let Router = require('koa-router')
let { index, goodslist,shopinfo,notFound } = require('./controller/main')

const router = new Router()

router.get('/', index)

router.get('/goodslist',goodslist)

router.get('/shopinfo',shopinfo)

router.all('*', notFound)

module.exports = router