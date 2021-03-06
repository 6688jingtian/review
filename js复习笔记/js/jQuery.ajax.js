function ajax(mJson)//应该是jQuery中的ajax()函数
{
	//所有数据初始化
	var method=mJson.method||'GET';//如果没有值麼认为GET
	var data='';
	var sysn=mJson.sysn||'true'; //异步或同步
	var succ=mJson.succ;
	var fai=mJson.fai;
	if(mJson.data)
	{
		var arr=[];
		for(var key in mJson.data)
		{
			arr.push(key+'='+mJson.data[key]);
		}
		data=arr.join('&');
	}
	if(data&&method.toLowerCase()=='GET')
	{
		url+='?'+data;
	}
	
	
	//1.创建ajax对象
	if(window.XMLHttpRequest)//前面添加window兼容ie6,这样就属于是未定义的属性
	{//不会报错，返回flase,便于括号判断
	    var oAjax=new XMLHttpRequest();
	}
	else
	{
		var oAjax=new ActiveXObject('Mcrosoft.XMLHTTP');
	}
	
	//2.连接服务器(方法  文件名   异步传输)
	oAjax.open(method,url,sysn);
	
	//附加：通常在HTTP协议里，客户端像服务器取得某个网页的时候，必须发送一个HTTP
	//协议的头文件(头部添加)，告诉服务器客户端要下载什么信息以及相关的参数，可以随意添加
	oAjax.setRequestHeader('content-type','application/x-www-form-urlencoded');
	
	//3.发送请求
	oAjax.send(data);//post方式时使用，get方式时使用url后面加
	
	//4.接收返回值
	oAjax.onreadystatechange=function()
	{
		if(oAjax.readyState==4)//解析完成
			{
				if(oAjax.status==200)
				{
					succ&&succ(oAjax.responseText);
				}
				else
				{
					if(fai)
					{
						fai&&fai(oAjax.status);
					}
				}
			}
		};
};