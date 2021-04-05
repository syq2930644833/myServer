const ArticleType = require('../../model/articleType/articleType')

class articleTypeServices{
    static async createArticleType(data){
        let result = await ArticleType.create(data)
        return result
    }
    static async findArticleType(){
        let result = await ArticleType.find()
        return result
    }
    static async findArticleTypebyId(id){
        let result = await ArticleType.findOne({_id:id})
        return result
    }
}

module.exports = articleTypeServices
