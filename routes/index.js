// const router = require('koa-router')()

// router.get('/', async (ctx, next) => {
//   await ctx.render('index', {
//     title: 'Hello Koa 2!'
//   })
// })

// router.get('/string', async (ctx, next) => {
//   ctx.body = 'koa2 string'
// })

// router.get('/json', async (ctx, next) => {
//   ctx.body = {
//     title: 'koa2 json'
//   }
// })

const users = require('./users')
const test = require('./test')
const articleType = require('./articleType')
const upload = require('./upload')


module.exports = {
  users,
  test,
  articleType,
  upload
}
