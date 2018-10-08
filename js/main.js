

/*  popukate the div sketchContainer with the cells to be painted*/
var container = document.querySelector(".sketchContainer");
var div = document.createElement('div');
div.classList.add('square');

for (var i = 1; i <= 256; i++){
  container.appendChild(div.cloneNode());
  
}
/* 
- sets te eventListeners for click and drag
- checks if the cell is painted, if painted -> remove color, else paint 
*/
var sqs = document.querySelectorAll(".square");
sqs.forEach(sqr=>{
    sqr.addEventListener('click', (e) => {
        sqr.classList.toggle('painted');
        if (sqr.classList.contains('painted')) {
            sqr.setAttribute("style", "background-color:"+mainColor);  
        }else{
            sqr.setAttribute("style", "background-color: inherit");
        }
    });
    sqr.addEventListener('mouseover', (e) => {
        if (e.buttons == 1) {
            sqr.classList.add('painted');
            sqr.setAttribute("style", "background-color:"+mainColor);
        }
    });
});

/* when the reset button is pressed resets the color of all the cells */
var resetBtn = document.querySelector(".reset-btn");
resetBtn.addEventListener('click', (e) => resetCells());

function resetCells() {
    //sqs.forEach(sqr => sqr.classList.remove('painted'));
        sqs.forEach(sqr => sqr.setAttribute('style', 'background-color:inherit'));
}
/* gets the value from the color picker to set the main color and change the color of the square inside the button */
var mainColor = "black";
var colorDisplay = document.querySelector(".colorPick > i");
    function updateColor(col) {
        colorDisplay.setAttribute("style","color: #" + col);
        mainColor = '#'+col;
        
    }
//var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || safari.pushNotification);

/*if (isSafari) {
    var chooseColor = document.querySelector(".colorPick"); /*This one is the button that will activte the input type color 
    var colorDisplay = document.querySelector(".colorPick > i");
    var colorPicker = document.querySelector("#colorPickerSafari"); /*This one is the input type color
    
    function updateColor(col) {
        colorDisplay.setAttribute("style","color: #" + col);
        mainColor = col;
        
    }
    chooseColor.addEventListener('click', (e) =>colorPicker.jscolor.show());    
}else{
    var chooseColor = document.querySelector(".colorPick"); /*This one is the button that will activte the input type color 
    var colorDisplay = document.querySelector(".colorPick > i");
    var colorPicker = document.querySelector("#colorPicker"); /*This one is the input type color
    
    colorPicker.addEventListener("input", (e) => {
        mainColor = document.querySelector("#colorPicker").value;
        colorDisplay.setAttribute("style","color:" + mainColor);
    });
    
    chooseColor.addEventListener('click', (e) =>colorPicker.click());
}*/

    