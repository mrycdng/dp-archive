//toggles about div on and off

const about = document.getElementById('about');
const plus = document.getElementById('plus');
const home = document.getElementById('home');

let clicked = true;

let showOrHide = function(){
    if (clicked) {
        about.style.display = 'block';

        plus.innerHTML = "X";
        plus.style.mixBlendMode = "multiply";
        plus.style.backgroundColor = "white";

        home.style.display = "none";

        clicked = false;
    }
    else {
        about.style.display = 'none';

        plus.innerHTML = "+";
        plus.style.mixBlendMode = "screen";

        home.style.display = "block";

        clicked = true;
    }
}