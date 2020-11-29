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
