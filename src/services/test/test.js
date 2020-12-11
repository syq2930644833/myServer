const exhibitionTest = require('../../model/test/test')
let utils = require('../../utils/utils')

class testServices{
    static async createArticleTitle(data){
        let result = await exhibitionTest.create(data)
        return result
    }
    static async findArticle(){
        let result = await exhibitionTest.find()
        return result
    }
}

module.exports = testServices
