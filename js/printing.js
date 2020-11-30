/**
*         Ganto
*         2020.11.30
**/
(() => {
	var start = "2020-09-12 04:05:24", // 设置的时间
	start_ = new Date(start).getTime(); // 设置的时间戳

	var	now = new Date(), // 现在时间
	fullyear = now.getFullYear(), // 现在年份
	month = now.getMonth()+1, // 现在月份
	date = now.getDate(), // 现在日份
	hours = now.getHours(), // 现在小时
	minutes = now.getMinutes(), // 现在分钟
	seconds = now.getSeconds(), // 现在秒钟
	time = now.getTime(); // 现在时间戳

	var run = time - start_, // 现在时间戳和设置时间戳的差
	zhD = parseInt(run/1000/60/60/24), // 将时间戳转化为天数
	zhH = parseInt((run % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)), // 将时间戳转化为小时数
	zhM = parseInt((run % (1000 * 60 * 60)) / (1000 * 60)), // 将时间戳转化为分钟数
	zhS = parseInt(run % (1000 * 60) / 1000); // 将时间戳转化为秒钟数

	// 如果数值小于10的时候，在数值前方拼接一个0
	if(month < 10){
		month = "0" + month
	}
	if(date < 10){
		date = "0" + date
	}
	if(hours < 10){
		hours = "0" + hours
	}
	if(minutes < 10){
		minutes = "0" + minutes
	}
	if(seconds < 10){
		seconds = "0" + seconds
	}
	if(zhD < 10){
		zhD = "0" + zhD
	}
	if(zhH < 10){
		zhH = "0" + zhH
	}
	if(zhM < 10){
		zhM = "0" + zhM
	}
	if(zhS < 10){
		zhS = "0" + zhS
	}
	console.log("%c   ____  \n" +
		"  / ___\\ \n"+
		" / /   __  \n"+
		"/ /____\\ \\  \n"+
		"\\________/ https://ganto.cn \n" +
		    "%c" + fullyear + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds + "\n" +
		    "小站运营 "+zhD + "天" + zhH + "小时" + zhM + "分钟" + zhS + "秒钟 了","color: #3742FA;","color: red;"
	);
	
// 	百度统计
	var _hmt = _hmt || [];
	(function() {
		var hm = document.createElement("script");
		hm.src = "https://hm.baidu.com/hm.js?02903c6e6f5f09461f68d07b7887f5ea";
		var s = document.getElementsByTagName("script")[0]; 
		s.parentNode.insertBefore(hm, s);
	})();

	
})();
