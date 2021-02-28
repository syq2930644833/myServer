const User = require('../../model/user/user')

class userServices{
    static async createUser(data){
        let result = await User.create(data)
        return result
    }

    static async loginQuery({account, passWord}){
        let result = await User.find({},{passWord:0}).where({ account: account, passWord: passWord })
        return result
    }
  
    static async findUserbyId(id){
        let result = await User.findOne({_id:id},{passWord:0})
        return result
    }
}

module.exports = userServices
