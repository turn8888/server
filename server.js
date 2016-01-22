var server = require('http');
var auth = require('./libs/auth');
var member = require('./libs/member');
var config = require('./config/config');
var app = server.createServer(function(req,res){
//	res.writeHead(404,{'Content-Type': 'text/html'})
//	res.end();
});
var io = require('socket.io')(app);


app.listen(config.port,function(){
	console.log("监听:"+config.port)	
})


//聊天
var online = {};

//驱使下线，使其禁止链接
io.on('connection',function(socket){
	
	//若会员已经登录,将其加入socket,否则将其提出socket
	socket.on('conn',function(e){
		
		console.log("链接")
		socket.emit('msg',{sb:e},function(data){
 			console.log(data);
 		})
		
		
		
		
		
		//若鉴权验证秘钥，是否存在用户
//		if(!auth.verify()){
//			//将用户加入在线列表
//			online[e.Account] = socket;
//			socket.Account = e.Account;
//			//查找用户所在的群，然后将用户加入群组
//            
//          //END
//          
//          //私信消息
//           socket.on('msg','log',function(e){
//           	
//           	if(e.Account == socket.Account){
//           		return;
//           	}else{
//           		online[e.Account].emit('msg',{e.msg},function(data){
//           			console.log(data);
//           		})
//           	}
//           	
//           	
//           })
//			
//			
//			
//			
//		}else{
//			socket.emit('dis',{})
//		}
//		
//		
	})
	
	//单聊转发
	
//	//驱使下线
//	setTimeout(function(){
//		socket.emit('dis',{})
//	},5000)
//	

	socket.on('disconnect',function(){
		console.log("退出分组")
	})
})
