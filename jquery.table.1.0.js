;(function($)//jquery默认插件开发模板
{
   	$.fn.table=function(options){
   		var defaults={
   			//各种参数，各种属性
   			 evenRowClass:'evenRow',
   			 oddRowClass:'oddRow',
   			 currentRowClass:'currentRow',
   			 eventType0:'mouseover',
   			 eventType1:'mouseout'
   		}
   		var options=$.extend(defaults,options);//对象合并
   		this.each(function(){
   			//实现功能的代码
   			var _this=$(this);//缓存this
   			_this.find('tr:even').addClass(options.evenRowClass);
   			_this.find('tr:odd').addClass(options.oddRowClass);
   			$('tr').bind(options.eventType0,function(){//绑定事件
   				$(this).addClass(options.currentRowClass);
   			});
   			$('tr').bind(options.eventType1,function(){
   				$(this).removeClass(options.currentRowClass);
   			});
   		});
   		return this;
   	}
})(jQuery)