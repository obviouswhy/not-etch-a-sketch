var a = document.querySelector(".sketchContainer");
var div = document.createElement('div');
div.classList.add('square');
for (var i = 1; i <= 256; i++){
  a.appendChild(div.cloneNode());
  
}
var sqs = document.querySelectorAll(".square");
sqs.forEach(sqr=>{
    /*sqr.addEventListener('click', (e) => {
        sqr.classList.toggle('black');
    });*/
    sqr.addEventListener('mouseover', (e) => {
        if (e.buttons == 1) {
            sqr.classList.add('black');
        }
    });
})