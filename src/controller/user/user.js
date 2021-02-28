const userService = require('../../services/user/user')
const jwt = require('jsonwebtoken')
let utils = require('../../utils/utils')


class userController {
    static async createUser(ctx){
        try {
            let data = ctx.request.body
            const result = await userService.createUser(data)
            return utils.getResult(ctx,result,'保存成功。',1)
        } catch (error) {
            return utils.getError(ctx,error)
        }
    }
    static async loginQuery(ctx){
        try {
            let data = ctx.request.body
            const result = await userService.loginQuery(data)
            if(result.length){
                const payload = {
                    u_id:result[0]._id,
                    account: result[0].account,
                    nikeName: result[0].nikeName
                }
                const token = jwt.sign(payload, "secret", { expiresIn: 7200 })
                return utils.loginSuccess(ctx,result,'Bearer ' + token,'登录成功。',1)
            }else{
                return utils.loginError(ctx,'账号或密码错误,请重试!',0)
            }
        } catch (error) {
            return utils.getError(ctx,error)
        }
    }
    static async findUserbyId(ctx){
        try {
            const {id} = ctx.request.query
            const result = await userService.findUserbyId(id)
            return utils.getResult(ctx,result,'查询成功。',1)
        } catch (error) {
            return utils.getError(ctx,error)
        }
    }
}

module.exports = userController