const userController = require('../src/controller/user/user')
const router = require('koa-router')()


router.post('/v1/user/createUser', userController.createUser)
router.post('/v1/user/login', userController.loginQuery)
router.get('/v1/user/findUserbyId', userController.findUserbyId)

module.exports = router
