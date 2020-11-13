const router = require('koa-router')()


router.get('/user', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/user/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

module.exports = router
