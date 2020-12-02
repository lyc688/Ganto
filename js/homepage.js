function judge(){
	if(localStorage.getItem("theme") === "dark"){
		document.getElementsByTagName("html")[0].setAttribute("data-theme","dark");
	}else if(localStorage.getItem("theme") === "light"){
		document.getElementsByTagName("html")[0].setAttribute("data-theme","light");
	}
	if(localStorage.getItem("state") === "on"){
		document.getElementsByTagName("html")[0].removeAttribute("data-theme");
		localStorage.removeItem("theme");
	}
}
(() => {
	const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
	if(darkModeMediaQuery.matches){
   		document.getElementsByTagName("html")[0].setAttribute("data-theme","dark");
	}else{
	 	document.getElementsByTagName("html")[0].setAttribute("data-theme","light");
	}
	darkModeMediaQuery.addListener(() => {
		localStorage.setItem("state","on");
		judge();
	});
	judge();
})();
window.onload = function(){
	document.querySelector(".toggle").onclick = function(){
		if(localStorage.getItem("theme") === "dark"){
			localStorage.setItem("theme","light");
		}else if(localStorage.getItem("theme") === "light"){
			localStorage.setItem("theme","dark");
		}else{
			const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
			if(darkModeMediaQuery.matches){
		   		localStorage.setItem("theme","light");
		   	}else{
				localStorage.setItem("theme","dark");
			}
		}
		localStorage.removeItem("state");
		judge();
	}
// 	document.querySelector(".demo span").onclick=function(){
// 		window.open("https://live.bilibili.com/6");
// 	}
}
