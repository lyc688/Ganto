function gClick(gEvent){
// 	console.log(gEvent.pageX, gEvent.pageY);
	const body = document.querySelector("body");
	const span = document.createElement("span");
	span.classList.add("gClick");
	span.style.top = gEvent.pageY + "px";
	span.style.left = gEvent.pageX + "px";
	body.append(span);
	setTimeout(() => {
		span.remove();
	}, 750);
}
document.querySelector("html").onclick = function(gEvent){
	gClick(gEvent);
// 	console.log(gEvent);
}
