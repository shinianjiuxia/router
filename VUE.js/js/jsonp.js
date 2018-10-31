(function(){
	
	// 命名空间
	
	window.jsonp = function(obj){
		
		obj.fnName = obj.fnName || 'jquery'+(Math.random()+'').substring(2);
		var oS = document.createElement('script');
		var head = document.getElementsByTagName('head')[0];
		
		// 处理data对象里面的各种属性
		var str = '';
		obj.data[obj.callback] = obj.fnName;
		
		for(var attr in obj.data){
			str+=  attr+'='+obj.data[attr]+'&';
		}
		oS.src = obj.url+'?'+str;  	
		//https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=成龙
		

		head.appendChild(oS);
		// 自己事先先写好一个函数，而且函数是全局函数
		window[obj.fnName] = function(data){	
			//alert('我被条用了')
			obj.success(data);
		}
		
		
	}
	
})()
