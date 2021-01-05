function a(e){
	console.log(e.pageX, e.pageY);
	const main = document.querySelector("body");
	const span = document.createElement("span");
	const i = document.createElement("i");
	span.classList.add("click");
	span.style.top = e.pageY + "px";
	span.style.left = e.pageX + "px";
	span.append(i);
	main.append(span);
	setTimeout(() => {
		span.remove();
	}, 500);
}
document.querySelector("html").onclick = function(e){
	a(e);
}
