var body = document.querySelector("body");
var colourBody = document.querySelector(".body");

var light = document.querySelector("#light");
var random = document.querySelector("#random");
var dark = document.querySelector("#dark");

var colour = document.querySelector("#colour");
var hex = document.querySelector("#hex");

var rInput = document.querySelector("#red");
var gInput = document.querySelector("#green");
var bInput = document.querySelector("#blue");

var previous = document.querySelector("#previous");
var next = document.querySelector("#next");

var help = document.querySelector(".fa-question-circle");
var toggler = document.querySelector(".fa-toggle-off");

var redLock = document.querySelector("#redLock");
var greenLock = document.querySelector("#greenLock");
var blueLock = document.querySelector("#blueLock");

var advanceTools = document.querySelectorAll(".hider");
var helpBar = document.querySelector(".helphider");
/*--------*/

var r = 255;
var g = 255;
var b = 255;

var rPrevious = r;
var gPrevious = g;
var bPrevious = b;

var rNext = r;
var gNext = g;
var bNext = b;

var rLocked = false;
var gLocked = false;
var bLocked = false;

/*--------*/

var colString; //string
var hexString; //string
var whiteFont; //boolean
var toggled = false; //boolean




/*

function colourAllowedHTML(colourString){
return "<input id=\""+colourString+"\" name=\""+colourString+"\" placeholder=\"255\" min=\"0\" max=\"255\" required=\"\" type=\"number\">";
};

function colourDisabledHTML(colourString){
return "<input id=\""+colourString+"\" name=\""+colourString+"\" placeholder=\"255\" min=\"0\" max=\"255\" readonly=\"\" type=\"number\">"
};

*/


/* From http://www.javascripter.net/faq/rgbtohex.htm */
function rgbToHex(R,G,B) {return toHex(R)+toHex(G)+toHex(B)}
function toHex(n) {
 n = parseInt(n,10);
 if (isNaN(n)) return "00";
 n = Math.max(0,Math.min(n,255));
 return "0123456789ABCDEF".charAt((n-n%16)/16)
      + "0123456789ABCDEF".charAt(n%16);
}
/* -------------- */

function rand(length,bottom){
	return Math.floor(Math.random() * length) + bottom;
};


function rgbRand (length,bottom){
	if((length+bottom) <= 255){
		if(!rLocked){r = rand(length,bottom);}
		if(!gLocked){g = rand(length,bottom);}
		if(!bLocked){b = rand(length,bottom);}
	}
};
function assignPrevious(){
	rPrevious = r;
	gPrevious = g;
	bPrevious = b;
	previous.classList.remove("hidden");
};

function assignNext(){
	rNext = r;
	gNext = g;
	bNext = b;
	next.classList.add("hidden");
};

function stringColour(r,g,b){
	whiteFont = (r < 55 && g < 55) ||(r < 55 && b < 65)||(b < 65 && g < 55);
	if(whiteFont){
		body.style.color = "white";
	}else{
		body.style.color = "black";
	}
	hexString = rgbToHex(r,g,b);
	colString = "rgb(" + r + "," + g + "," + b + ")";
	colour.textContent = colString;
	hex.textContent = hexString;
	rInput.value = r;
	gInput.value = g;
	bInput.value = b;
	body.style.backgroundColor = colString;
};

random.addEventListener("click",function(){
	assignPrevious();
	rgbRand(255,0);
	stringColour(r,g,b);
	assignNext();
	
});

light.addEventListener("click",function(){
	assignPrevious();
	rgbRand(55,200);
	stringColour(r,g,b);
	assignNext();
});

dark.addEventListener("click",function(){
	assignPrevious();
	rgbRand(55,0);
	stringColour(r,g,b);
	assignNext();
});

rInput.addEventListener("change",function(){
	r = rInput.value;
	stringColour(rInput.value,g,b);
});

gInput.addEventListener("change",function(){
	g = gInput.value;
	stringColour(r,gInput.value,b);
});

bInput.addEventListener("change",function(){
	b = bInput.value;
	stringColour(r,g,bInput.value);
});


previous.addEventListener("click",function(){
	stringColour(rPrevious,gPrevious,bPrevious);
	next.classList.remove("hidden");
	previous.classList.add("hidden");
});

next.addEventListener("click",function(){
	stringColour(rNext,gNext,bNext);
	next.classList.add("hidden");
	previous.classList.remove("hidden");
});

toggler.addEventListener("click",function(){
	if(!toggled){
		toggler.classList.remove("fa-toggle-off");
		toggler.classList.add("fa-toggle-on");
	}else{
		toggler.classList.remove("fa-toggle-on");
		toggler.classList.add("fa-toggle-off");
	}
	for(var i = 0; i <advanceTools.length ; i++){
			advanceTools[i].classList.toggle("hider");
		}
	toggled = !toggled;
});

redLock.addEventListener("click",function(){
	if(!rLocked){
		redLock.classList.remove("fa-unlock");
		redLock.classList.add("fa-lock");
		//rInput.outerHTML = colourDisabledHTML("red");
	}else{
		redLock.classList.remove("fa-lock");
		redLock.classList.add("fa-unlock");
		//rInput.outerHTML = colourAllowedHTML("red");
	}
	
	rLocked = !rLocked;
});

greenLock.addEventListener("click",function(){
	if(!gLocked){
		greenLock.classList.remove("fa-unlock");
		greenLock.classList.add("fa-lock");
		//gInput.outerHTML = colourDisabledHTML("green");
	}else{
		greenLock.classList.remove("fa-lock");
		greenLock.classList.add("fa-unlock");
		//gInput.outerHTML = colourAllowedHTML("green");
	}
	
	gLocked = !gLocked;
});

blueLock.addEventListener("click",function(){
	if(!bLocked){
		blueLock.classList.remove("fa-unlock");
		blueLock.classList.add("fa-lock");
		//bInput.outerHTML = colourDisabledHTML("blue");
	}else{
		blueLock.classList.remove("fa-lock");
		blueLock.classList.add("fa-unlock");
		//bInput.outerHTML = colourAllowedHTML("blue");
	}
	bLocked = !bLocked;
});

help.addEventListener("click",function(){
	colourBody.classList.toggle("helphider");
	helpBar.classList.toggle("helphider");
});