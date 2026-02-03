//toggle about on and off

const about = document.getElementById('about');
const plus = document.getElementById('plus');
let clicked = true;

let showOrHide = function(){
    if (clicked) {
        about.style.display = 'block';
        plus.innerHTML = "X";
        plus.style.mixBlendMode = "multiply";
        clicked = false;
    }
    else {
        about.style.display = 'none';
        plus.innerHTML = "+";
        plus.style.mixBlendMode = "screen";
        clicked = true;
    }
}