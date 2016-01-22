/**
 * Created by Administrator on 13-11-15.
 */

var env 	= 'development',
//  env 	= 'production',
    port 	= null,// redis settings
    io		= null;	// socket port settings

// development in local
if (env == 'development')
{
    port  = 230
    redis = "redis://auth:123qqq@127.0.0.1:6379";
    
}
// according to different person
if(env == 'production')
{
    port  = 10
    redis = "redis://auth:123qqq@127.0.0.1:6379";
}


module.exports ={
    port:port,
    redis:redis,
}
