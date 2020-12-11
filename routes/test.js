const testController = require('../src/controller/test/test')

const router = require('koa-router')()

router.post('/v1/test/createArticleTitle', testController.createArticleTitle)
router.get('/v1/test/findArticle', testController.findArticle)

module.exports = router