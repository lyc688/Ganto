function judge(){
	if(localStorage.getItem("theme") === "dark"){
		document.getElementsByTagName("html")[0].setAttribute("data-theme","dark");
	}else if(localStorage.getItem("theme") === "light"){
		document.getElementsByTagName("html")[0].setAttribute("data-theme","light");
	}else if(localStorage.getItem("theme") === "auto"){
		document.getElementsByTagName("html")[0].removeAttribute("data-theme");
	}else{
		localStorage.setItem("theme","auto");
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
	console.log("homepage.js");
	// 通知
	var title = "小站已经适配深色模式";
	var content = "在“关于”页 -> “模式”栏切换。";
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
