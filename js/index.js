$(function(){
	$("footer span").click(function(){
		$("body,html").stop().animate({scrollTop:0},300);
	})
	$(".cons .left_").click(function(){
		$(".cons .left_").hide();
		$(".cons .right_").show();
		$(".con").show();
		$(".cons").css({"left":"30%","box-shadow":"-4px 0px 4px rgba(0,0,0,0.5)"});
	})
	$(".con,.cons .right_").click(function(){
		$(".cons .right_").hide();
		$(".cons .left_").show();
		$(".con").hide();
		$(".cons").css({"left":"100%","box-shadow":"-4px 0px 4px rgba(0,0,0,0)"});
	})
})
