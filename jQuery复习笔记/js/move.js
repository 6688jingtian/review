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
            function move(obj,target,strr,fnEnd)
			{
				clearInterval(obj.timer);
				obj.timer=setInterval(function()
				{
				   if(strr=='opacity')
				   {
				   	  var cur=Math.round(parseFloat(getstyle(obj,strr))*100);
				   }
				   else
				   {
				   	   var cur=parseInt(getstyle(obj,strr));
				   }
				   var speed=(target-cur)/10;
				   speed=speed>0?Math.ceil(speed):Math.floor(speed);
				   if(cur==target)
				   {
				   	  clearInterval(obj.timer);
				   	  if(fnEnd)fnEnd();
				   }
				   else
				   {
				   	  if(strr=='opacity')
				   	  {
				   	  	obj.style.filter='alpha(opacity:'+(cur+speed+')') ;
				   	  	obj.style.opacity=(cur+speed)/100;
				   	  }
				   	  else
				   	  {
				   	  	obj.style[strr]=cur+speed+'px';
				   	  }
				      
				   }
				},30);
			};