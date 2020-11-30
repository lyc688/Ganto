function judge(){
	if(localStorage.getItem("theme") === "dark"){
		document.getElementsByTagName("html")[0].setAttribute("data-theme","dark");
	}else{
		document.getElementsByTagName("html")[0].setAttribute("data-theme","light");
	}
}
(() => {
	const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
	darkModeMediaQuery.addListener((e) => {
		const darkModeOn = e.matches;
		localStorage.localStorage.removeItem("theme");
	});
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
