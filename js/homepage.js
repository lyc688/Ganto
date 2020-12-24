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
	if(localStorage.getItem("page") === "about"){
		function themeBorderColorActive(){
		    if(localStorage.getItem("theme") === "dark"){
		      document.querySelector(".dark").style.borderColor = "#3888df";
		      document.querySelector(".dark").getElementsByTagName("img")[0].style.borderColor = "#3888df";
		      document.querySelector(".light").style.borderColor = "";
		      document.querySelector(".light").getElementsByTagName("img")[0].style.borderColor = "";
		      document.querySelector(".auto").style.borderColor = "";
		      document.querySelector(".auto").getElementsByTagName("img")[0].style.borderColor = "";
		    }else if(localStorage.getItem("theme") === "light"){
		      document.querySelector(".light").style.borderColor = "#3888df";
		      document.querySelector(".light").getElementsByTagName("img")[0].style.borderColor = "#3888df";
		      document.querySelector(".dark").style.borderColor = "";
		      document.querySelector(".dark").getElementsByTagName("img")[0].style.borderColor = "";
		      document.querySelector(".auto").style.borderColor = "";
		      document.querySelector(".auto").getElementsByTagName("img")[0].style.borderColor = "";
		    }else if(localStorage.getItem("theme") === "auto"){
		      document.querySelector(".auto").style.borderColor = "#3888df";
		      document.querySelector(".auto").getElementsByTagName("img")[0].style.borderColor = "#3888df";
		      document.querySelector(".dark").style.borderColor = "";
		      document.querySelector(".dark").getElementsByTagName("img")[0].style.borderColor = "";
		      document.querySelector(".light").style.borderColor = "";
		      document.querySelector(".light").getElementsByTagName("img")[0].style.borderColor = "";
		
		    }
		  }
		  themeBorderColorActive();
		
		  //点击auto窗口，删除thml标签data-theme属性
		  document.querySelector(".auto").onclick = function(){
		    if (window.matchMedia('(prefers-color-scheme)').matches === true) {
		      localStorage.setItem("theme","auto");
		    }else{
		      alert("抱歉！您的浏览器不支持prefers-color-scheme！即auto模式无法生效！");
		      console.log("抱歉！您的浏览器不支持prefers-color-scheme！即auto模式无法生效！");
		      if(localStorage.getItem("theme") === "dark"){
		        document.getElementsByTagName("html")[0].setAttribute("data-theme","dark");
		      }else if(localStorage.getItem("theme") === "light"){
		        document.getElementsByTagName("html")[0].setAttribute("data-theme","light");
		      }else{
		        localStorage.setItem("theme","light");
		      }
		    }
		    judge();
		    themeBorderColorActive();
		  }
		
		  // 点击切换深色/浅色模式
		  document.querySelector(".light").onclick = function(){
		    localStorage.setItem("theme","light");
		    judge();
		    themeBorderColorActive();
		  }
		  document.querySelector(".dark").onclick = function(){
		    localStorage.setItem("theme","dark");
		    judge();
		    themeBorderColorActive();
		  }
	}
	// 通知
	var title = "小站已经适配深色模式O.o";
	var content = "小站已经适配深色模式，请再“关于页 ——》 模式栏”进行切换模式。";
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
