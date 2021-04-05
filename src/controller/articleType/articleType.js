const articleTypeServices = require('../../services/articleType/articleType')
let utils = require('../../utils/utils')

class ArticleTypeController {
    static async createArticleType(ctx){
        try {
            let data = ctx.request.body
            const result = await articleTypeServices.createArticleType(data)
            return utils.getResult(ctx,result,'保存成功。',1)
        } catch (error) {
            return utils.getError(ctx,error)
        }
    }
    static async findArticleType(ctx){
        try {
            const result = await articleTypeServices.findArticleType()
            return utils.getResult(ctx,result,'查询成功。',1)
        } catch (error) {
            return utils.getError(ctx,error)
        }
    }
    static async findArticleTypebyId(ctx){
        try {
            const {id} = ctx.request.query
            const result = await articleTypeServices.findArticleTypebyId(id)
            return utils.getResult(ctx,result,'查询成功。',1)
        } catch (error) {
            return utils.getError(ctx,error)
        }
    }
}

module.exports = ArticleTypeController