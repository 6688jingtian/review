;(function($)//jquery插件开发模板
{
   	$.fn.tab=function(options){
   		var defaults={
   			//各种参数，各种属性
   			currentClass:'current',
   			box1Class:'#box1 li',
   			box2Class:'#box2 div',
   			eventType:'mouseover'
   		}
   		var options=$.extend(defaults,options);
   		this.each(function(){
   			//实现功能的代码
   			var _this=$(this);
   			_this.find(options.box1Class).bind(options.eventType,function(){
   				$(this).addClass(options.currentClass).siblings().removeClass(options.currentClass);
   				var index=$(this).index();
   				_this.find(options.box2Class).eq(index).show().siblings().hide()
   			})
   		});
   		return this;
   	} 
})(jQuery)