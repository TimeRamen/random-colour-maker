var body = document.querySelector("body");
var light = document.querySelector("#light");
var random = document.querySelector("#random");
var dark = document.querySelector("#dark");
var colour = document.querySelector("#colour");
var hex = document.querySelector("#hex");

var r = 255;
var g = 255;
var b = 255;

var rPrevious = r;
var gPrevious = g;
var bPrevious = b;

var rNext = r;
var gNext = g;
var bNext = b;

var colString; //string
var hexString; //string
var whiteFont; //boolean

var rUp = document.querySelectorAll(".red")[0];
var gUp = document.querySelectorAll(".green")[0];
var bUp = document.querySelectorAll(".blue")[0];

var rDown = document.querySelectorAll(".red")[1];
var gDown = document.querySelectorAll(".green")[1];
var bDown = document.querySelectorAll(".blue")[1];

var previous = document.querySelector("#previous");
var next = document.querySelector("#next");





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
	r = rand(length,bottom);
	g = rand(length,bottom);
	b = rand(length,bottom);
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


rUp.addEventListener("click",function(){
	if(r<255){
		assignPrevious();
		r++;
		stringColour(r,g,b);
		assignNext();
	}
});

gUp.addEventListener("click",function(){
	if(g<255){
		assignPrevious();
		g++;
		stringColour(r,g,b);
		assignNext();
	}
});

bUp.addEventListener("click",function(){
	if(b<255){
		assignPrevious();
		b++;
		stringColour(r,g,b);
		assignNext();
	}
});

rDown.addEventListener("click",function(){
	if(r>0){
		assignPrevious();
		r--;
		stringColour(r,g,b);
		assignNext();
	}
	
});

gDown.addEventListener("click",function(){
	if(g>0){
		assignPrevious();
		g--;
		stringColour(r,g,b);
		assignNext();
	}
	
});

bDown.addEventListener("click",function(){
	if(b>0){
		assignPrevious();
		b--;
		stringColour(r,g,b);
		assignNext();
	}
	
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