$(function(){
	$(".li i").eq(0).hide();
	
	$(".logo a").dblclick(function(){
		$(".tc").css("opacity","1");
		$(".tc span").html("恭喜你发现彩蛋");
	})
	
	$(".tc i").dblclick(function(){
		$(".tc").css("opacity","0");
	});
	
	$(".tc i").click(function(){
		$(".tc span").html("阿Sir，双击啊");
	});
	
	$("#left_").click(function(){
		$(".con .con_").css("border-radius","22px 22px 22px 0");
		$(".li").show();
		$(".li").css("z-index","99")
	})
	
	$("#right_").click(function(){
		var v = $("#v").val();
		if(v == "小胡的课表"){
			window.open("https://cevno.cn/hd");
		}else if(v == "小李的课表"){
			window.open("https://cevno.cn/kb");
		}else{
			var vvv = $("#v").attr('name');
			at(vvv,v);
		}
	})
	
	$("#v").focus(function(){
		$(".bimg").css({"transform":"scale(1.2)","filter":"blur(10px)"});
		$(".li").hide();
		$(".con .con_").css("border-radius","22px");
	})
	
	$("#v").blur(function(){
		var text = $("#v").val();
		if(text == ''){
			$(".bimg").css({"transform":"scale(1)","filter":"blur(0px)"});
		}else{
			return;
		}
	})
	
	$(document).keyup(function(e){
		if(e.keyCode ==13){
			$("#right_").trigger("click");
		}
	});
	
	$(".li i").click(function(){
		$(this).hide().siblings().show();
		$(".li").hide();
		$(".con .con_").css("border-radius","22px");
		var tt = $(this).css('backgroundImage');
		$("#left_").css({"background":tt+"no-repeat center","background-size":"40%"});
		var i = $(".li i").index(this);
		if(i == 0){
			$("#v").attr('name','baidu');
		}else if(i == 1){
			$("#v").attr('name','google');
		}else if(i == 2){
			$("#v").attr('name','360');
		}else if(i == 3){
			$("#v").attr('name','bing');
		}else if(i == 4){
			$("#v").attr('name','sogou');
		}
	})
	
	
	
	$(".bimg").click(function(){
		$(".li").hide();
		$(".con .con_").css("border-radius","22px");
	})
	
	
	$("#v").on("input",function(e){
		var text = $("#v").val();
		if(text == ''){
			$(".box .box_con").html('');
			$(".box .box_con").slideUp();
			
			var isFocus=$("#v").is(":focus");
			if(true==isFocus){
				return;
			}else{
				$(".bimg").css({"transform":"scale(1)","filter":"blur(0px)"});
			}
			
		}else{
			$(".box .box_con").slideDown();
			$(".bimg").css({"transform":"scale(1.2)","filter":"blur(10px)"});
			$.ajax({
				url: 'https://suggestion.baidu.com/su?wd=' + text + '&cb=evev',
				type: 'get',
				dataType: 'jsonp',//跨域请求
				jsonpCallback: "evev",
				success:function(data){
					if(data.s.length == 0){
						return;
					}else{
						var con = "";
						for(var i = 0; i < data.s.length; i++){
							con += "<span onclick = ai(this) name = " + data.s[i] + ">" + data.s[i] + "</span>"
							$(".box .box_con").html(con);
						}
					}
				},
				error:function(err){
					// console.log("请求失败",err);
					return;
				}
			})
		}
	})
	
	
})

function at(ev,evv){
	if(ev == "baidu"){
		window.open("https://www.baidu.com/s?wd=" + evv);
	}else if(ev == "google"){
		window.open("https://www.google.com/search?q=" + evv);
	}else if(ev == "360"){
		window.open("https://www.so.com/s?q=" + evv);
	}else if(ev == "bing"){
		window.open("https://cn.bing.com/search?q=" + evv);
	}else if(ev == "sogou"){
		window.open("https://www.sogou.com/tx?query=" + evv);
	}
}
function ai(e){
	var ui = $(e).attr('name');
	$("#v").val(ui);
	var vvv = $("#v").attr('name');
	at(vvv,ui);
}
