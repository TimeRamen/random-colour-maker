var background: HTMLElement = document.querySelector("body");
var helpButton: HTMLElement = document.querySelector(".question");
var toggleButton: HTMLElement = document.querySelector(".toggler");
var helpDisplay: HTMLElement = document.querySelector(".help");
var colourDisplay: HTMLElement = document.querySelector(".colours");
var advancedTools: NodeListOf<HTMLElement> = document.querySelectorAll(".advance-tips");
var colourButtons: NodeListOf<HTMLElement> = document.querySelectorAll("button");


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

function randomColourChannel(): number{
    return returnRandom(0,255);
}

function initialiseButtons(): void{
    for(let i: number = 0; i < colourButtons.length ; i++){
        colourButtons[i].addEventListener("click",function(){
            background.style.backgroundColor = randomColour();
        })
    }
}
function randomColour(): string{
    let colourString: string = "rgb(" + randomColourChannel() + "," + randomColourChannel() + "," + randomColourChannel() + ")";
    return colourString;
}
function setColour(): string{
    return "rgb(100,200,30)";
}

function initialiseApp(): void{
    initialiseButtons();
}

initialiseApp();