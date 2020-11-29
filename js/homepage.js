const dark = document.getElementById("dark"),
	light = document.getElementById("light");
function judge(){
	if(localStorage.getItem("theme") === "dark"){
		dark.setAttribute("media","all");
		light.setAttribute("media","not all");
		console.log(localStorage.getItem("num"),typeof localStorage.getItem("num"));
// 		if(localStorage.getItem("num") === "0"){
// 			document.getElementsByTagName("a")[0].style.color = "white";
// 		}else if(localStorage.getItem("num") === "1"){
// 			document.getElementsByTagName("a")[1].style.color = "white";
// 		}else if(localStorage.getItem("num") === "2"){
// 			document.getElementsByTagName("a")[2].style.color = "white"; 
// 		}else if(localStorage.getItem("num") === "3"){
// 			document.getElementsByTagName("a")[3].style.color = "white"; 
// 		}else{
// 			localStorage.setItem("num","0");
// 		}
	}else if(localStorage.getItem("theme") === "light"){
		dark.setAttribute("media","not all");
		light.setAttribute("media","all");
// 		if(localStorage.getItem("num") === "0"){
// 			document.getElementsByTagName("a")[0].style.color = "black";
// 		}else if(localStorage.getItem("num") === "1"){
// 			document.getElementsByTagName("a")[1].style.color = "black";
// 		}else if(localStorage.getItem("num") === "2"){
// 			document.getElementsByTagName("a")[2].style.color = "black"; 
// 		}else if(localStorage.getItem("num") === "3"){
// 			document.getElementsByTagName("a")[3].style.color = "black"; 
// 		}else{
// 			localStorage.setItem("num","0");
// 		}
	}else{
		localStorage.setItem("theme","light");
	}
	
	
	
}
(() => {
	judge();
})();
window.onload = function(){
	var a = document.getElementsByTagName('a'); // 获取所有li元素
	for(var j=0; j<a.length; j++){
		a[j].index = j; // 为第i个li元素添加一个index属性，赋值为i
		a[j].addEventListener('click',function() {
			localStorage.setItem("num",this.index);
			if(localStorage.getItem("theme") === "dark"){
				document.getElementsByTagName("a")[this.index].style.color = "black";
			}else{
				document.getElementsByTagName("a")[this.index].style.color = "white";

			}
			// 为第i个li元素添加一个click事件，当元素被点击时，则会在控制台输出索引
		})
	}
	
	document.querySelector(".toggle").onclick = function(){
		if(localStorage.getItem("theme") === "dark"){
			localStorage.setItem("theme","light");
			console.log(parseInt(localStorage.getItem("num")),localStorage.getItem("num"));
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
