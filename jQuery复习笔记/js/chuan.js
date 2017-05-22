function getstyle(obj,name)
{
	if(obj.currentStyle)
	{
		return obj.currentStyle;
	}
	else
	{
		return getComputedStyle(obj,false)[name];
	}
}
function move(obj,json,fnEnd)
{
	clearInterval(obj.timer);
	obj.timer=setInterval(function()
	{
	   var bBox=true;//假设所有值都已经到了
	   for(var strr in json)
	   {
		   if(strr=='opacity')
		   {
		   	  var cur=Math.round(parseFloat(getstyle(obj,strr))*100);
		   }
		   else
		   {
		   	  var cur=parseInt(getstyle(obj,strr));
		   }
		   var speed=(json[strr]-cur)/10;
		   speed=speed>0?Math.ceil(speed):Math.floor(speed);
		   
		   if(cur!=json[strr])
		   bBox=false;
		   if(strr=='opacity')
           {
            obj.style.filter='alpha(opacity:'+(cur+speed+')');
            obj.style.opacity=(cur+speed)/100;
           }
		   else
		   {
		   	obj.style[strr]=cur+speed+'px';
		   }
	   }
	   if(bBox)
	   {
	   	 clearInterval(obj.timer);
	   	 if(fnEnd)fnEnd();
	   }
	},30);
};
function ajax(url,funSucc,funFail)
{
	//1.创建ajax对象
	if(window.XMLHttpRequest)
	{
		var oAjax=new XMLHttpRequest();
	}
    else
    {
    	var oAjax=new ActiveXObject('Microsoft.XMLHTTP');//兼容IE6
    }
    
    //2.连接服务器
    //open（方法，服务器，异步传输）
    oAjax.open('GET','url',true);
    
    //3.发送请求
    oAjax.send();
    
    //4.接收返回
    oAjax.onreadystatechange=function()
    {
    	if(oAjax.readyState==4)//4.代表读取完成
    	{
    		if(oAjax.status==200)//http状态码
    		{
    			funSucc(oAjax.responseText);
    			//alert(oAjax.responseText);
    		}
    		else
    		{
    			funFail(oAjax.status);
    			alert("失败");
    		}
    	}
    }
}