$(function(){
	$("footer span").click(function(){
		$("body,html").animate({scrollTop:0});
	})
	$(".cons .left_").click(function(){
		$(".cons .left_").hide();
		$(".cons .right_").show();
		$(".con").show();
		$(".cons").css({"left":"50%"});
	})
	$(".cons .right_").click(function(){
		$(".cons .right_").hide();
		$(".cons .left_").show();
		$(".con").hide();
		$(".cons").css({"left":"100%"});
	})
})
