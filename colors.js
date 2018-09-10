var background = document.querySelector("body");
var helpButton = document.querySelector(".question");
var toggleButton = document.querySelector(".toggler");
var helpDisplay = document.querySelector(".help");
var colourDisplay = document.querySelector(".colours");
var rgbDisplay = document.querySelector(".colours span#rgb-colour");
var hexDisplay = document.querySelector(".colours span#hex-colour");
var advancedTools = document.querySelectorAll(".advance-tips");
var colourButtons = document.querySelectorAll("button");
/* From http://www.javascripter.net/faq/rgbtohex.htm */
function rgbToHex(R, G, B) { return toHex(R) + toHex(G) + toHex(B); }
function toHex(n) {
    n = parseInt(n, 10);
    if (isNaN(n))
        return "00";
    n = Math.max(0, Math.min(n, 255));
    return "0123456789ABCDEF".charAt((n - n % 16) / 16)
        + "0123456789ABCDEF".charAt(n % 16);
}
/* -------------- */
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
function buttonRandomColourGenerator(buttonID) {
    if (buttonID === "random") {
        return returnRandom(0, 255);
    }
    else if (buttonID === "light") {
        return returnRandom(200, 55);
    }
    else if (buttonID === "dark") {
        return returnRandom(0, 55);
    }
    else {
        return returnRandom(0, 255);
    }
}
function initialiseButtons() {
    for (var i = 0; i < colourButtons.length; i++) {
        colourButtons[i].addEventListener("click", function () {
            background.style.backgroundColor = randomColour(this.id);
        });
    }
}
function randomColour(buttonID) {
    var r = buttonRandomColourGenerator(buttonID);
    var g = buttonRandomColourGenerator(buttonID);
    var b = buttonRandomColourGenerator(buttonID);
    changeFontColour(r, g, b);
    updateRGBDisplay(r, g, b);
    return returnColourString(r, g, b);
}
function returnColourString(r, g, b) {
    return "rgb(" + r + "," + g + "," + b + ")";
}
function updateRGBDisplay(r, g, b) {
    rgbDisplay.textContent = r + "," + g + "," + b;
    hexDisplay.textContent = rgbToHex(r, g, b);
}
function changeFontColour(r, g, b) {
    var allUnder128 = r < 128 && g < 128 && b < 128;
    var twoUnder60 = (r < 60 && g < 60) || (b < 60 && g < 60) || (r < 60 && b < 60);
    if (allUnder128 || twoUnder60) {
        background.style.color = "white";
    }
    else {
        background.style.color = "black";
    }
}
function initialiseApp() {
    initialiseButtons();
}
initialiseApp();
