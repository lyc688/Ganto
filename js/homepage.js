const dark = document.getElementById("dark"),
	light = document.getElementById("light");
function judge(){
	if(localStorage.getItem("theme") === "dark"){
		dark.setAttribute("media","all");
		light.setAttribute("media","not all");

	}else if(localStorage.getItem("theme") === "light"){
		dark.setAttribute("media","not all");
		light.setAttribute("media","all");
	}else{
		localStorage.setItem("theme","light");
	}
}
(() => {
	judge();
})();
window.onload = function(){
	if(localStorage.getItem("theme") === "dark"){
		document.getElementsByTagName("a")[parseInt(localStorage.getItem("num"))].style.color = "white";
	}else{
		document.getElementsByTagName("a")[parseInt(localStorage.getItem("num"))].style.color = "black";
	}
	var a = document.getElementsByTagName('a'); // 获取所有a元素
	for(var j=0; j<a.length; j++){
		a[j].index = j; // 为第j个a元素添加一个index属性，赋值为j
		a[j].addEventListener('click',function() {
			localStorage.setItem("num",this.index);
			// 为第j个a元素添加一个click事件，当元素被点击时，则会设置localStorage储存起来
		})
	}
	document.querySelector(".toggle").onclick = function(){
		if(localStorage.getItem("theme") === "dark"){
			localStorage.setItem("theme","light");
			document.getElementsByTagName("a")[parseInt(localStorage.getItem("num"))].style.color = "black";
		}else{
			localStorage.setItem("theme","dark");
			document.getElementsByTagName("a")[parseInt(localStorage.getItem("num"))].style.color = "white";
			
		}
		judge();
	}
	console.log("%c   ____  \n" +
		"  / ___\\ \n"+
		" / /   __  \n"+
		"/ /____\\ \\  \n"+
		"\\________/ https://ganto.cn","color: #3742FA;"
	);

	var _hmt = _hmt || [];
	(function() {
		var hm = document.createElement("script");
		hm.src = "https://hm.baidu.com/hm.js?02903c6e6f5f09461f68d07b7887f5ea";
		var s = document.getElementsByTagName("script")[0]; 
		s.parentNode.insertBefore(hm, s);
	})();
// 	document.querySelector(".demo span").onclick=function(){
// 		window.open("https://live.bilibili.com/6");
// 	}
}
