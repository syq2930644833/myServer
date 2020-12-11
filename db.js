const mongoose = require('mongoose');

const MONGODB_URI = "mongodb://localhost:27017/test";

// => 连接数据库
mongoose.connect(MONGODB_URI, { useNewUrlParser: true }, (err) => {
	if (err) {
		console.log('mongodb connect fail!');
		return;
	}
	console.log("mongodb connect success!")
});

/**
* 连接异常 error 数据库连接错误
*/
mongoose.connection.on('error',function(err) {
	console.log('Mongoose connection error: '+ err);
  });
  /**
  * 连接断开 disconnected 连接异常断开
  */
  mongoose.connection.on('disconnected',function() {
	console.log('Mongoose connection disconnected');
  });

module.exports = mongoose;