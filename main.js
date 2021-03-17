
let paragraph = document.getElementById("js-paragraph");

// text odstavce se obarví dp červená:

function CervenaBarva() {
paragraph.classList.toggle("cerveny");
}

// tučný text odstavce při najetí myší:

function ztucni(udalost) {
    console.log(udalost);
    udalost.target.style.fontWeight = "bold";   
}

// tlačitko pro zvětšení textu odstavce:

function ZvetsitText() {
    
    let style = window.getComputedStyle(paragraph, null).getPropertyValue('font-size');
    let currentSize = parseFloat(style);
    console.log(currentSize);
    paragraph.style.fontSize = (currentSize + 1) + "px";
   
}


function prehraj(elementSelector) {
    let audioElement = document.querySelector(elementSelector);
    audioElement.play();
}
function zastav(elementSelector) {
    let audioElement = document.querySelector(elementSelector);
    audioElement.pause();
}

