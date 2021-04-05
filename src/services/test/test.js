const exhibitionTest = require('../../model/test/test')

class testServices{
    static async createArticle(data){
        let result = await exhibitionTest.create(data)
        return result
    }
    static async findArticle(user_id, page, limit){
        let result = await exhibitionTest.find({user_id:user_id},{comments:0}).sort({date:-1}).skip((page - 0 - 1)*(limit - 0)).limit(limit - 0)
        let count = await exhibitionTest.count({user_id:user_id})
        return {result,count}
    }
    static async findArticlebyId(id){
        let result = await exhibitionTest.findOne({_id:id})
        return result
    }
}

module.exports = testServices
