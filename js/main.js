document.body.addEventListener("mouseup", function(e) {
	var mobile = document.getElementsByClassName("mobile")[0];
	// var mobileSide = document.getElementsByClassName("mobile-sidebar")[0];
	var close = document.getElementById("close");
	if ((e.target != mobile && e.target.parentNode != mobile)) {
		mobile.classList.remove("leftmost")
	}
})

document.body.addEventListener("touchend", function(e) {
	var mobile = document.getElementsByClassName("mobile")[0];
	var close = document.getElementById("close");
	if ((e.target != mobile && e.target.parentNode != mobile)) {
		mobile.classList.remove("leftmost")
	}
})

function toggleMenu(){
	var mobile = document.getElementsByClassName("mobile")[0];
	var overlay = document.getElementsByClassName("overlay")[0];
	if (mobile) {
		mobile.classList.toggle("leftmost");
	}
}