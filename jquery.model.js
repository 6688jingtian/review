;(function($)//jquery插件开发模板
{
   	$.fn.Plugin=function(options){
   		var defaults={
   			//各种参数，各种属性
   		}
   		var options=$.extend(defaults,options);
   		this.each(function(){
   			//实现功能的代码
   		});
   		return this;//必须有，以便进行链式操作
   	}
})(jQuery)