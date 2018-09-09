var background = document.querySelector("body");
var helpButton = document.querySelector(".question");
var toggleButton = document.querySelector(".toggler");
var helpDisplay = document.querySelector(".help");
var colourDisplay = document.querySelector(".colours");
var advancedTools = document.querySelectorAll(".advance-tips");
var colourButtons = document.querySelectorAll("button");
helpButton.addEventListener("click", function () {
    helpDisplay.classList.toggle("hidden");
    colourDisplay.classList.toggle("hidden");
});
toggleButton.addEventListener("click", function () {
    toggleButton.classList.toggle("fa-toggle-off");
    toggleButton.classList.toggle("fa-toggle-on");
    showAdvanceTools();
});
function showAdvanceTools() {
    for (var i = 0; i < advancedTools.length; i++) {
        advancedTools[i].classList.toggle("hidden");
    }
}
function returnRandom(start, length) {
    return Math.floor(Math.random() * length) + start;
}
function randomColourChannel() {
    return returnRandom(0, 255);
}
function initialiseButtons() {
    for (var i = 0; i < colourButtons.length; i++) {
        colourButtons[i].addEventListener("click", function () {
            background.style.backgroundColor = randomColour();
        });
    }
}
function randomColour() {
    var colourString = "rgb(" + randomColourChannel() + "," + randomColourChannel() + "," + randomColourChannel() + ")";
    return colourString;
}
function setColour() {
    return "rgb(100,200,30)";
}
function initialiseApp() {
    initialiseButtons();
}
initialiseApp();
