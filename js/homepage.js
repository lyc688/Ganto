const dark = document.getElementById("dark"),
	light = document.getElementById("light");
function judge(){
	if(localStorage.getItem("theme") === "dark"){
		dark.setAttribute("media","all");
		light.setAttribute("media","not all");
		for(var i = 0; i < 4; i ++){
			var a_color = document.getElementsByName("a")[i].style.color;
			if(a_color === "black"){
				   document.getElementsByName("a")[i].style.color = "white";
			}
		}
	}else if(localStorage.getItem("theme") === "light"){
		dark.setAttribute("media","not all");
		light.setAttribute("media","all");
		for(var i = 0; i < 4; i ++){
			var a_color = document.getElementsByName("a")[i].style.color;
			if(a_color === "white"){
				   document.getElementsByName("a")[i].style.color = "black";
			}
		}
	}else{
		localStorage.setItem("theme","light");
	}
	
}
(() => {
	judge();
})();
window.onload = function(){
	document.querySelector(".toggle").onclick = function(){
		if(localStorage.getItem("theme") === "dark"){
			localStorage.setItem("theme","light");
		}else{
			localStorage.setItem("theme","dark");
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
