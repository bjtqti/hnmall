let Router = require('koa-router')
let { index, goodslist,notFound } = require('./controller/main')

const router = new Router()

router.get('/', index)

router.get('/goodslist',goodslist)

router.all('*', notFound)

module.exports = router