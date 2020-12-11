// 引入mongoose
const mongoose = require('../../../db')
// 创建Schema对象
let Schema = mongoose.Schema

let exhibitionSchema = new Schema({
    title: String,
    author: String,
    introduction: String,
    // comments: [{ body: String, date: Date }],
    date: { type: Date, default: Date.now },
    hidden: Boolean,
    meta: {
        votes: Number
        //   favs:  Number
    }
})

let exhibitionTest = mongoose.model('exhibition', exhibitionSchema)

module.exports = exhibitionTest

// exhibitionTest.create({
//     title: '测试用例',
//     author: '壹朵小花吖',
//     introduction: '测试用例',
//     hidden: false,
//     meta: {
//         votes: 1334
//     }
// }, function (err) {
//     if (!err) {
//         console.log('数据插入成功');
//     } else {
//         console.log('err', err);
//     }
// })

// exhibitionTest.find({}, function (err, docs) {
//     if (!err) {
//         console.log('docs', docs);
//     }
// })

