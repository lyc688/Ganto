function judge(){
	if(localStorage.getItem("theme") === "dark"){
		document.getElementsByTagName("html")[0].setAttribute("data-theme","dark");
		document.querySelector(".dark").style.borderColor = "#3888df";
	}else if(localStorage.getItem("theme") === "light"){
		document.getElementsByTagName("html")[0].setAttribute("data-theme","light");
		document.querySelector(".light").style.borderColor = "#3888df";
	}else if(localStorage.getItem("theme") === "auto"){
		document.getElementsByTagName("html")[0].removeAttribute("data-theme");
		document.querySelector(".auto").style.borderColor = "#3888df";
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
	
	//点击auto窗口，删除thml标签data-theme属性
	document.querySelector(".auto").onclick = function(){
		if (window.matchMedia('(prefers-color-scheme)').matches === true) {
			localStorage.setItem("theme","auto");
		}else{
			console.log("抱歉！您的浏览器不支持prefers-color-scheme！即auto模式无法生效，已自动设置为Light模式。");
			if(localStorage.getItem("theme") === "dark"){
				document.getElementsByTagName("html")[0].setAttribute("data-theme","dark");
			}else if(localStorage.getItem("theme") === "light"){
				document.getElementsByTagName("html")[0].setAttribute("data-theme","light");
			}else{
				localStorage.setItem("theme","light");
			}
		}
		judge();
	}
	
	// 点击切换深色/浅色模式
	document.querySelector(".light").onclick = function(){
		localStorage.setItem("theme","light");
		judge();
	}
	document.querySelector(".dark").onclick = function(){
		localStorage.setItem("theme","dark");
		judge();
	}
	
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
