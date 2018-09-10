var background: HTMLElement = document.querySelector("body");
var helpButton: HTMLElement = document.querySelector(".question");
var toggleButton: HTMLElement = document.querySelector(".toggler");
var helpDisplay: HTMLElement = document.querySelector(".help");
var colourDisplay: HTMLElement = document.querySelector(".colours");
var rgbDisplay: HTMLElement = document.querySelector(".colours span#rgb-colour");
var hexDisplay: HTMLElement = document.querySelector(".colours span#hex-colour");
var advancedTools: NodeListOf<HTMLElement> = document.querySelectorAll(".advance-tips");
var colourButtons: NodeListOf<HTMLElement> = document.querySelectorAll("button");

/* From http://www.javascripter.net/faq/rgbtohex.htm */
function rgbToHex(R: number,G: number,B: number) {return toHex(R)+toHex(G)+toHex(B)}
function toHex(n: number) {
 n = parseInt(n,10);
 if (isNaN(n)) return "00";
 n = Math.max(0,Math.min(n,255));
 return "0123456789ABCDEF".charAt((n-n%16)/16)
      + "0123456789ABCDEF".charAt(n%16);
}
/* -------------- */


helpButton.addEventListener("click",function(): void{
    helpDisplay.classList.toggle("hidden");
    colourDisplay.classList.toggle("hidden");
});

toggleButton.addEventListener("click",function(): void{
    toggleButton.classList.toggle("fa-toggle-off");
    toggleButton.classList.toggle("fa-toggle-on");
    showAdvanceTools();
});

function showAdvanceTools(): void{
    for(let i: number = 0; i < advancedTools.length ; i++){
        advancedTools[i].classList.toggle("hidden");
    }
}

function returnRandom(start: number, length: number): number{
    return Math.floor(Math.random() * length) + start;
}

function buttonRandomColourGenerator(buttonID: string): number{
    if(buttonID === "random"){
        return returnRandom(0,255);
    }
    else if(buttonID === "light"){
        return returnRandom(200,55);
    }
    else if(buttonID === "dark"){
        return returnRandom(0,55);
    }else{
        return returnRandom(0,255);
    }
}

function initialiseButtons(): void{
    for(let i: number = 0; i < colourButtons.length ; i++){
        colourButtons[i].addEventListener("click",function(){
            background.style.backgroundColor = randomColour(this.id);
        })
    }
}
function randomColour(buttonID: string): string{
    let r = buttonRandomColourGenerator(buttonID);
    let g = buttonRandomColourGenerator(buttonID);
    let b = buttonRandomColourGenerator(buttonID);
    changeFontColour(r,g,b);
    updateRGBDisplay(r,g,b);
    return returnColourString(r,g,b);
}
function returnColourString(r: number, g:number, b:number): string{
    return "rgb(" + r + "," + g + "," + b + ")";
}
function updateRGBDisplay(r: number, g:number, b:number): void{
    rgbDisplay.textContent = r + "," + g + "," + b;
    hexDisplay.textContent = rgbToHex(r,g,b);
}
function changeFontColour(r: number, g:number, b:number): void{
    let allUnder128 : boolean = r < 128 && g < 128 && b < 128;
    let twoUnder60: boolean = (r < 60 && g < 60) || (b < 60 && g < 60) || (r < 60 && b < 60);
    if(allUnder128 || twoUnder60){
        background.style.color = "white";
    }
    else{
        background.style.color = "black";
    }
}
function initialiseApp(): void{
    initialiseButtons();
}

initialiseApp();