var container = document.querySelector(".sketchContainer");
var div = document.createElement('div');
div.classList.add('square');

for (var i = 1; i <= 256; i++){
  container.appendChild(div.cloneNode());
  
}

var sqs = document.querySelectorAll(".square");
sqs.forEach(sqr=>{
    sqr.addEventListener('click', (e) => {
        sqr.classList.toggle('painted');
    });
    sqr.addEventListener('mouseover', (e) => {
        if (e.buttons == 1) {
            sqr.classList.add('painted');
        }
    });
});

var resetBtn = document.querySelector(".reset-btn");
resetBtn.addEventListener('click', (e) => resetCells());

function resetCells() {
    sqs.forEach(sqr => sqr.classList.remove('painted'));
}

var chooseColor = document.querySelector(".colorPick"); /*This one is the button that will activte the input type color*/ 
var colorDisplay = document.querySelector(".colorPick > i");
var colorPicker = document.querySelector("#colorPicker");; /*This one is the input type color*/ 
var mainColor = "black";
colorPicker.addEventListener("input", (e) => {
    mainColor = document.querySelector("#colorPicker").value;
    colorDisplay.setAttribute("style","color:" + mainColor);
});

chooseColor.addEventListener('click', (e) =>colorPicker.click());
