//1.直接给jQuery添加全局函数
jQuery.myalert=function(str){//在jQuery上添加了静态方法
	alert(str);
}
//2.使用extend()方法
jQuery.extend({//extend可以将多个对象合并在一起
	myalert:function(str){
		alert(str);
	},
	haha:function(){
		alert('加油哦！')
	}
})
//3.使用命名空间
jQuery.zxit={
    myalert3:function(){//在jQuery上添加了静态方法
	alert('方法三');
     }
}