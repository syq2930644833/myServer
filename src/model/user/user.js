// 引入mongoose
const mongoose = require('../../../db')
// 创建Schema对象
let Schema = mongoose.Schema

let userSchema = new Schema({
    account: String,
    passWord: String,
    nikeName: String,
    date: { type: Date, default: Date.now },
})

let User = mongoose.model('user', userSchema)

module.exports = User

// User.create({
//     accout: 'haoqian',
//     passWord: 'hq19961004',
//     nikeName: '蒿小茜'
// }, function (err) {
//     if (!err) {
//         console.log('数据插入成功');
//     } else {
//         console.log('err', err);
//     }
// })

// User.find({}, function (err, docs) {
//     if (!err) {
//         console.log('docs', docs);
//     }
// })