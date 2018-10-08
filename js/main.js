
var grid = document.querySelector('.gridSelector');
var container = document.querySelector(".sketchContainer");
grid.addEventListener('change', (e) => {
    deleteSquares();
    container.classList.remove('grid1', 'grid2', 'grid3');
    populate(grid.value);
});
populate(grid.value);

/*  populate the div sketchContainer with the cells to be painted*/
function populate(size) {
    
    var sqrNum;
    switch (size) {
        case '16x':
            sqrNum = (16*16);
            container.classList.add('grid1');
            break;
        case '32x':
            sqrNum = (32*32);
            container.classList.add('grid2');   
            break;
        case '64x':
            sqrNum = (64*64);
            container.classList.add('grid3');
            break;    
    
        default:
            sqrNum = (16*16);
            container.classList.add('grid1');
            break;
    }
    createSquares(sqrNum);
    initializeElements();   
}
function createSquares(squareNum) {
    var div = document.createElement('div');
    div.classList.add('square');
    for (var i = 1; i <= squareNum; i++){
        container.appendChild(div.cloneNode());  
      } 
}
function deleteSquares() {
    var sqs = document.querySelectorAll(".square");
    sqs.forEach(sqr=>sqr.parentNode.removeChild(sqr));
}
function initializeElements() {
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
}

/* gets the value from the color picker to set the main color and change the color of the square inside the button */
var mainColor = "black";
var colorDisplay = document.querySelector(".colorPick > i");
    function updateColor(col) {
        colorDisplay.setAttribute("style","color: #" + col);
        mainColor = '#'+col;       
}