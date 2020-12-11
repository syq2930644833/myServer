const exhibitionTestService = require('../../services/test/test')

class exhibitionTestController {
    static async createArticleTitle(ctx){
        let data = ctx.request.body
        const result = await exhibitionTestService.createArticleTitle(data)
        ctx.status = 200
        ctx.body = {
            "data": result,
            // "message": msg ? msg : null,
            // "resultCode": resultCode === 0 ? 0 : 1
        }
        return ctx
    }
    static async findArticle(ctx){
        const result = await exhibitionTestService.findArticle()
        ctx.status = 200
        ctx.body = {
            "data": result,
            // "message": msg ? msg : null,
            "code": result.length ? 2000 : 5001
        }
        return ctx
    }
}

module.exports = exhibitionTestController