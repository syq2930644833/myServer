// 引入mongoose
const mongoose = require('../../../db')
// 创建Schema对象
let Schema = mongoose.Schema

let articleTypeSchema = new Schema({
    label: String,
    value: String,
    date: { type: Date, default: Date.now },
})

let ArticleType = mongoose.model('articleType', articleTypeSchema)

module.exports = ArticleType

// ArticleType.create({
//     label: 'Html5',
//     value: '6'
// }, function (err) {
//     if (!err) {
//         console.log('数据插入成功');
//     } else {
//         console.log('err', err);
//     }
// })

// ArticleType.find({}, function (err, docs) {
//     if (!err) {
//         console.log('docs', docs);
//     }
// })