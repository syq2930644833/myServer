const testController = require('../src/controller/test/test')

const router = require('koa-router')()

router.post('/v1/test/createArticle', testController.createArticle)
router.get('/v1/test/findArticle', testController.findArticle)
router.get('/v1/test/findArticlebyId', testController.findArticlebyId)

module.exports = router