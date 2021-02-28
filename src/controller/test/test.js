const exhibitionTestService = require('../../services/test/test')
let utils = require('../../utils/utils')

class exhibitionTestController {
    static async createArticle(ctx){
        try {
            let data = ctx.request.body
            const result = await exhibitionTestService.createArticle(data)
            return utils.getResult(ctx,result,'保存成功。',1)
        } catch (error) {
            return utils.getError(ctx,error)
        }
    }
    static async findArticle(ctx){
        try {
            const {user_id, page, limit} = ctx.request.query
            const {result, count} = await exhibitionTestService.findArticle(user_id, page, limit)
            return utils.getResult(ctx,result,'查询成功。',1, count)
        } catch (error) {
            return utils.getError(ctx,error)
        }
    }
    static async findArticlebyId(ctx){
        try {
            const {id} = ctx.request.query
            const result = await exhibitionTestService.findArticlebyId(id)
            return utils.getResult(ctx,result,'查询成功。',1)
        } catch (error) {
            return utils.getError(ctx,error)
        }
    }
}

module.exports = exhibitionTestController