document.body.addEventListener("mouseup", function(e) {
	var mobile = document.getElementsByClassName("mobile")[0];
	var close = document.getElementById("close");
	if ((e.target != mobile && e.target.parentNode != mobile)) {
		mobile.classList.remove("leftmost")

	}
})

function toggleMenu(){
	var mobile = document.getElementsByClassName("mobile")[0];
	var overlay = document.getElementsByClassName("overlay")[0];
	mobile.classList.toggle("leftmost");
	overlay.classList.toggle("overlay-dark")

}