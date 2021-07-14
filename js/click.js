function a(e){
	// console.log(e.pageX, e.pageY);
	const body = document.querySelector("body");
	const span = document.createElement("span");
	span.classList.add("click");
	span.style.top = e.pageY + "px";
	span.style.left = e.pageX + "px";
	body.append(span);
	setTimeout(() => {
		span.remove();
	}, 750);
}
document.querySelector("html").onclick = function(e){
	a(e);
	// console.log(e);
}
