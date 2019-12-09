//my variables that make lines of code shorter in other functions.
var a = document.getElementById("lakers");
var b = document.getElementById("clippers");
var c = document.getElementById("reset");
var d = document.getElementById("lakersroster");
var e = document.getElementById("clippersroster");
var f = document.getElementById("rectangle1");
var g = document.getElementById("box");
var h = document.getElementById("bigrectangle");
var i = document.getElementById("box1");
var j = document.getElementById("rectangle");
var k = document.getElementById("bigrectangle1");
var l = document.getElementById("rectangle2");
var m = document.getElementById("lebronvskawhi");
var n = document.getElementById("bigcolumn");
var o = document.getElementById("vs");

// changes entire page to lakers page
function makeLakers(onClick){
	f.classList.remove("gradient");
	f.classList.remove("blue");
	f.classList.add("gradient3");
	g.classList.remove("gradient2");
	g.classList.remove("blue");
	g.classList.add("gradient3");
	h.classList.remove("purple");
	h.classList.add("yellow");
	i.classList.remove("gradient1");
	i.classList.remove("blue");
	i.classList.add("gradient3");
	j.classList.remove("red");
	j.classList.add("purple");
	k.classList.remove("blue");
	k.classList.add("purple");
	m.src="images/lebronnnnn.jpg";
	e.src="images/lakersalltime.jpg";
	b.src="images/oldschoollakers.PNG";
	a.classList.add("opaque");
	o.classList.add("none");
	
}

//changes entire page to clippers page
function makeClippers(){
	f.classList.remove("gradient");
	f.classList.add("gradient4");
	g.classList.remove("gradient2");
	g.classList.add("gradient4");
	h.classList.remove("purple");
	h.classList.add("red");
	i.classList.remove("gradient1");
	i.classList.add("gradient4");
	j.classList.remove("red");
	j.classList.add("blue");
	l.classList.remove("yellow");
	l.classList.add("red");
	a.classList.remove("blue");
	a.classList.add("red");
	k.classList.add("blue");
	m.src="images/kawhi.jpg";
	d.src="images/25-Clippers.jpg";
	a.src="images/oldschoolclippers.png";
	b.classList.add("opaque");
	o.classList.add("none");
}
//this function allows the page to be reset without having to click on the refresh button.
function resetButton(){
	f.classList.add("gradient");
	g.classList.add("gradient2");
	h.classList.remove("blue");
	h.classList.add("purple");
	i.classList.add("gradient1");
	j.classList.remove("blue");
	j.classList.add("red");
	l.classList.remove("blue");
	l.classList.add("yellow");
	k.classList.add("blue");
	m.src="images/lebronvskawhi.jpg";
	e.src="images/clips.png";
	d.src="images/lakesroster.jpg";
	b.src="images/clippers.PNG";
	a.src="images/lakeslogo.PNG";
	b.classList.remove("none");
	a.classList.remove("none");
	f.classList.remove("gradient3");
	f.classList.add("gradient");
	g.classList.remove("gradient3");
	g.classList.add("gradient2");
	i.classList.remove("gradient3");
	i.classList.add("gradient1");
	f.classList.remove("gradient4");
	f.classList.add("gradient");
	g.classList.remove("gradient4");
	g.classList.add("gradient2");
	i.classList.remove("gradient4");
	i.classList.add("gradient1");
	l.classList.remove("red");
	l.classList.add("yellow");
	h.classList.remove("red");
	h.classList.add("purple");
	a.classList.remove("opaque");
	b.classList.remove("opaque");
	o.classList.remove("none");
}
