var a = document.getElementById("blue-man");
var b = document.getElementById("orange-kid");
var c = document.getElementById("boxone");
var d = document.getElementById("boxtwo");


// call this function when "orange-kid" is clicked!
function moveGif(elem){
	b.classList.add("fly-forward");
	c.classList.add("opaque");
	d.classList.remove("opaque");
	a.classList.remove("power-up");
}

// call this function when "blue-man" is clicked!
function changePicture(){
	a.classList.add("power-up");
	d.classList.add("opaque");
	c.classList.remove("opaque");
	b.classList.remove("fly-forward");
}
