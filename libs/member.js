var redis = require("redis");
var config = require("../config/config");

/**
 * 查询我所在群
 * @param {string} name 查询用户
 */
exports.getgroup = function(name){
	client = redis.createClient(config.redis);
	var name = client.Hgetall(name)
	
	
	//验证是否登录
//	this.verify = function(){
		return true
//	}
}