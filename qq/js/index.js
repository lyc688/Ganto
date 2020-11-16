$(function(){
	$(".push").click(function(){
		document.documentElement.requestFullscreen();//全屏
	})
	$("footer ul li").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
		$(this).removeClass("unactive").siblings().addClass("unactive");
	})
	$(".logo").click(function(){
		var m_r_w = $(".m_r").width();
		$(".m_r").animate({left:m_r_w},200);
		$(".m_l").animate({left:0},200);
		$("header").css("position","absolute");
		$("footer").css("position","absolute");
	});
	$(".m_l>span").click(function(){
		var m_l_w = $(".m_l").width();
		$(".m_r").animate({left:0},200);
		$(".m_l").animate({left:-(m_l_w)},200);
		setTimeout(function(){
			$("header").css("position","fixed");
			$("footer").css("position","fixed");
		},200);
	})
})
