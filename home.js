filterSelection("all");

function filterSelection(category) {
  const items = document.querySelectorAll(".content");

  if (category === "all") category = "";

  items.forEach(el => {
    el.classList.remove("show");


    if (el.className.indexOf(category) > -1) {
      el.classList.add("show");
    }
  });
}


// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("main");
var btns = btnContainer.getElementsByClassName("btn");

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {

// Remove active from all buttons
    for (var j = 0; j < btns.length; j++) {
      btns[j].classList.remove("active");
    }

// Add active to clicked button
    this.classList.add("active");
  });
}
