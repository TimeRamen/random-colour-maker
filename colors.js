var body = document.querySelector("body");
var r = 0;
var g = 0;
var b = 0;
var buton = document.querySelector("button");
var colour = document.querySelector("#colour");
var hex = document.querySelector("#hex");
var colString;
var hexString;

var whiteFont;


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



buton.addEventListener("click",function(){
	r = Math.floor(Math.random() * 255);
	g = Math.floor(Math.random() * 255);
	b = Math.floor(Math.random() * 255);
	
	whiteFont = (r < 50 && g < 50) ||(r < 50 && b < 50)||(b < 50 && g < 50);
	
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
});