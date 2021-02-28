let moment = require('moment')
const { count } = require('../model/test/test')


const loginSuccess = (ctx, data, token, msg, resultCode) => {
    ctx.status = 200
    return ctx.body = {
        "code": 2000,
        "data": data,
        "token": token,
        "message": msg ? msg : '登录成功!',
        "resultCode": resultCode === 0 ? 0 : 1
    } 
}
/**
 * 登录失败
 * @param {*} ctx 
 * @param {*} data 
 * @param {*} msg 
 * @param {*} resultCode 
 */
const loginError = (ctx, msg, resultCode) => {
    ctx.status = 200
    return ctx.body = {
        "code": 4000,
        "message": msg ? msg : '登陆失败,请重试!',
        "resultCode": resultCode === 0 ? 0 : 1
    } 
}
/**
 * 返回结果
 * @param {*} ctx 
 * @param {*} data 返回数据
 * @param {*} msg msg
 * @param {*} resultCode 
 */
const getResult = (ctx, data, msg, resultCode, count) => {
    ctx.status = 200
    if(count){
        return ctx.body = {
            "code": 2000,
            "data": data,
            "total": count,
            "message": msg ? msg : null,
            "resultCode": resultCode === 0 ? 0 : 1
        } 
    }else{
        return ctx.body = {
            "code": 2000,
            "data": data,
            "message": msg ? msg : null,
            "resultCode": resultCode === 0 ? 0 : 1
        } 
    }
    
}

/**
 * 返回错误信息
 * @param {*} ctx 
 * @param {*} err 错误信息
 * @param {*} msg msg
 */
const getError = (ctx, err, msg = '服务端异常') => {
    return ctx.body = {
        "data": err.toString(),
        "message": msg,
        "resultCode": 0
    }
}

/**
 * 通用时间格式化工具
 * @param {*} data 时间数据
 */
const formatTime = (data) => {
    return moment(data).format('YYYY-MM-DD HH:mm:ss')
}

/**
 * 下划线转驼峰
 * @param {*} data 需要转换数据格式的数据
 */
const toCamel = (data) => {
    return data.replace(/\_(\w)/g, function (all, letter) {
        return letter.toUpperCase()
    })
}

/**
 * 驼峰转下划线
 * @param {*} data 需要转换数据格式的数据
 */
const toLine = (data) => {
    return data.replace(/([A-Z])/g, "_$1").toLowerCase()
}

/**
 * 格式化时间
 * @param {*} date 需要转换数据格式的数据
 */
function rTime(date) {
    var json_date = new Date(date).toJSON();
    return new Date(new Date(json_date) + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '')
  }

module.exports = {
    loginSuccess,
    loginError,
    getResult,
    getError,
    formatTime,
    toCamel,
    toLine,
    rTime
}

