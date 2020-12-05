function judge(){
	if(localStorage.getItem("theme") === "dark"){
		document.getElementsByTagName("html")[0].setAttribute("data-theme","dark");
	}else if(localStorage.getItem("theme") === "light"){
		document.getElementsByTagName("html")[0].setAttribute("data-theme","light");
	}
}
(() => {
	if (window.matchMedia('(prefers-color-scheme)').matches === true) {
	}else{
		console.log("抱歉！您的浏览器不支持prefers-color-scheme！");
		if(localStorage.getItem("theme") === "dark"){
			document.getElementsByTagName("html")[0].setAttribute("data-theme","dark");
		}else if(localStorage.getItem("theme") === "light"){
			document.getElementsByTagName("html")[0].setAttribute("data-theme","light");
		}else{
			localStorage.setItem("theme","light");
		}
	}
	judge();
})();
window.onload = function(){
	// 点击切换深色/浅色模式
	document.querySelector(".toggle").onclick = function(){
		if(localStorage.getItem("theme") === "dark"){
			localStorage.setItem("theme","light");
		}else if(localStorage.getItem("theme") === "light"){
			localStorage.setItem("theme","dark");
		}else{
			localStorage.setItem("theme","dark");
		}
		judge();
	}
	
	// 通知
// 	var title = "小站已经适配深色模式";
	var title = "biubiu送拳头账号";
// 	var content = "单击辣条可以切换深色/浅色模式，也可自动响应系统的深色/浅色模式。但是依然遵循人为喜好优先的原则。";
	var url = "https://baidu.com";
	var content = "新用户可上车，小队满3人以上全员的LOL手游台服拳头账号，活动12月8日截止。速来上车<a href=" + url + ">点击链接上车</a>";
	//localStorage.setItem("flag","true"); // 如果需要强制一直显示通知，请取消此条代码注释
	if(localStorage.getItem("flag") === "true" && localStorage.getItem("content") === content){
		document.querySelector(".title").innerHTML = title;
		document.querySelector(".content").innerHTML = content;
		document.querySelector(".notice").style.display = "block";
	}else if(localStorage.getItem("flag") === "true" && localStorage.getItem("content") !== content){
		document.querySelector(".title").innerHTML = title;
		document.querySelector(".content").innerHTML = content;
		document.querySelector(".notice").style.display = "block";
	}else if(localStorage.getItem("flag") !== "true" && localStorage.getItem("content") === content){
		localStorage.setItem("flag","false");
	}else if(localStorage.getItem("flag") !== "true" && localStorage.getItem("content") !== content){
		document.querySelector(".title").innerHTML = title;
		document.querySelector(".content").innerHTML = content;
		document.querySelector(".notice").style.display = "block";
		localStorage.setItem("content",content);
		localStorage.setItem("flag","true");
	}
	document.querySelector(".off").onclick = function(){
		document.querySelector(".notice").style.display = "none";
		localStorage.setItem("flag","false");
	}
	
	
	
// 	document.querySelector(".demo span").onclick=function(){
// 		window.open("https://live.bilibili.com/6");
// 	}
}
