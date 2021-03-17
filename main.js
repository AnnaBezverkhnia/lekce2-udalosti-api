
let paragraph = document.getElementById("js-paragraph");

// Text odstavce se obarví do červená:

function CervenaBarva() {
paragraph.classList.toggle("cerveny");
}

// Tučný text odstavce při najetí myší:

/**function ztucni(udalost) {
    console.log(udalost);
    udalost.target.style.fontWeight = "bold";   
}*/

function ztucni() {
    paragraph.style.fontWeight = 'bold';
}

// Tlačitko pro zvětšení textu odstavce:

function ZvetsitText() {
    
    let style = window.getComputedStyle(paragraph, null).getPropertyValue('font-size');
    let currentSize = parseFloat(style);
    console.log(currentSize);
    paragraph.style.fontSize = (currentSize + 1) + "px";
   
}

// Audio Player:
let audioElement = document.querySelector('#js-audio');

function prehraj(elementSelector) {
    audioElement.play();
}

function zastav(elementSelector) {
    audioElement.pause();
}

function tichy(elementSelector) {
    audioElement.volume = 0;
}

function prumer(elementSelector) {
    audioElement.volume = 0.5;
}

function hlasity(elementSelector) {
    audioElement.volume = 1;
}

function zacatek(elementSelector) {
    audioElement.currentTime = 0;
}