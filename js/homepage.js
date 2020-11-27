window.onload = function(){
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
$(function(){	$("demo>nav>span").click(function(){		setCookie("night","1","100000");		panduan();	})	$("demo>nav>span").dblclick(function(){		setCookie("night","0","100000");		panduan();	})			// cookie的设置	function setCookie(cname,cvalue,exdays){ // cookie名，cookie值，cookie过期时间（为从设置开始要过期的时间 即当前时间加上设置的时间 即为过期时间）		var d = new Date();		d.setTime(d.getTime()+(exdays*24*60*60*1000)); // 当前时间d.getTime()，加上设置的时间，重新给d设置		var expires = "expires="+d.toGMTString();		document.cookie = cname + "=" + cvalue + "; " + expires + "; " + "path=/"; // 设置cookie	}		// cookie的获取	function getCookie(cname){		var name = cname + "=";		var ca = document.cookie.split(';');		for(var i=0; i<ca.length; i++){			var c = ca[i].trim();			if (c.indexOf(name)==0) return c.substring(name.length,c.length);		}		return "";	}	var night = getCookie("night");	function panduan(){		night = getCookie("night");		if(night === "0"){ // 白天模式的样式			console.log("night=0;白天");			$("body").css("background","");		}else if(night === "1"){ // 夜间模式的样式			console.log("night=1;黑夜");			$("body").css("background","black");		}else{ // 如果当前页面没有night这个cookie值，就设置默认的cookie值			setCookie("night","0","100000");		}	}		panduan();	})
