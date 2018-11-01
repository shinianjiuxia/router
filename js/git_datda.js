//网站内的数据    http/https 通信协议
//页面访问数据ajax
var http = require("http");//引入一个http模块 标准模块

var cheerio = require("cheerio");

var url= "http://sports.sina.com.cn/nba/1.stm1";

http.get(url,function(res){//请求网站地址之后 所做的处理  
	
	var html = "";
	
	res.on("data",function(chunk){//chunk每一段的数据
		html +=chunk;
		console.log(html);
	});
	
	res.on("end",function(){
		//提取页面数据
		
		var $ =cheerio.load(html);
		$("#right a").each(function(){
			
			var newUrl=$(this).attr("href");
		});
	});
	
}).on("error",function(err){//错误信息处理过程  err当前错误的相关信息 
	
	console.log(err.message);
	
});

function httpGet(url,callback){
	http.get(url,function(res){
		var html ="";
		res.on("data",function(chunk){
			html +=chunk;
		})
		
		res.on("end",function(){
			callback();//回调函数 这个是我们得到数据之后要做的是事
			
		})
		
	}).on("error",function(err){
		console.log(err.message);
	})
}
