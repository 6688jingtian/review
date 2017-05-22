function ajax(url,fnSucc,fuFail)
{
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
	oAjax.open('GET',url,true);
	
	//3.发送请求
	oAjax.send();
	
	//4.接收返回值
	oAjax.onreadystatechange=function()
	{
		if(oAjax.readyState==4)//解析完成
		{
			if(oAjax.status==200)
			{
				fnSucc(oAjax.responseText);
			}
			else
			{
				if(fnFail)
				{
					fnFail(oAjax.status);
				}
			}
		}
	};
};