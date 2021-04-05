const upload = require('../src/middleware/upload/upload')

const router = require('koa-router')()

router.post('/v1/test/upload',upload.single('file'), async ctx => {
    console.log('new data',ctx.req.file.filename)
    console.log('new data',ctx.req.file.path)
    ctx.status = 200
    ctx.body = {code:2000,result:'请求成功',filename:ctx.req.file.filename,filepath:`${ctx.request.origin}:8088/images/${ctx.req.file.filename}`}
})

module.exports = router