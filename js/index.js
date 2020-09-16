$(function(){
	$("footer span").click(function(){
		$("body,html").stop().animate({scrollTop:0},300);
	})
	$(".cons .left_").click(function(){
		$("body").css({"overflow":"hidden"});
		$(".cons .left_").fadeOut();
		$(".cons .right_").fadeIn();
		$(".con").show();
		$(".cons").css({"left":"30%","box-shadow":"-4px 0px 4px rgba(0,0,0,0.5)"});
	})
	$(".con,.cons .right_").click(function(){
		$("body").css({"overflow":"auto"});
		$(".cons .right_").fadeOut();
		$(".cons .left_").fadeIn();
		$(".con").hide();
		$(".cons").css({"left":"100%","box-shadow":"-4px 0px 4px rgba(0,0,0,0)"});
	})
})
