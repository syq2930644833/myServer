const ArticleTypeController = require('../src/controller/articleType/articleType')

const router = require('koa-router')()

router.post('/v1/test/createArticleType', ArticleTypeController.createArticleType)
router.get('/v1/test/findArticleType', ArticleTypeController.findArticleType)
router.get('/v1/test/findArticleTypebyId', ArticleTypeController.findArticleTypebyId)

module.exports = router