const mongoose = require('mongoose');

const MONGODB_URI = "mongodb://47.93.113.182:27017/mongo";

// => 连接数据库
mongoose.connect(MONGODB_URI, { useNewUrlParser: true }, (err) => {
	if (err) {
		console.log('mongodb connect fail!');
		return;
	}
	console.log("mongodb connect success!")
});
module.exports = mongoose;