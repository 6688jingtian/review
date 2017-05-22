function ajax(url,funsucc,funfail)
{
	//1.创建ajax对象
	if(window.XMLHttpRequest)
	{
		var oAjax=new XMLHttpRequest();
	}
	else
	{
		var oAjax=new ActiveXObject('Microsoft.XMLHTTP')//兼容ie6
	}
	
	//2.连接服务器
	oAjax.open('GET',url,true);
	
	//3.发送请求
	oAjax.send();
	
	//4.接收返回
	oAjax.onreadystatechange=function()
	{
		if(oAjax.readyState==4)
		{						
			if(oAjax.status==200)
			{
				funsucc(oAjax.responseText);
			}
			else
			{
				funfail(oAjax.status);
				alert('失败');
			}						
	    }
	};
};