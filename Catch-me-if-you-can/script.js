var box = document.getElementById('catch-me-box');

var winHeight = window.innerHeight;
var winWidth = window.innerWidth;
console.log(winHeight, winWidth);


function getNewDimensions(boxW, boxH){
    var newX = Math.floor((Math.random() * winWidth) + 1 - boxW);
    var newY = Math.floor((Math.random() * winHeight) + 1 - boxH);

    if(newX<0){
        newX = 0;
    }
    if(newY<0){
        newY=0;
    }
    if(newX >  winWidth){
        newX = winWidth - boxW;
    }
    if(newY > winHeight){
        newY = winHeight - boxH;
    }

    return {x:newX, y:newY};
}

box.addEventListener('mouseover',()=>{
    var boxW = box.getBoundingClientRect().width;
    var boxH = box.getBoundingClientRect().height;

    var newDimension = getNewDimensions(boxW, boxH);

    
    box.style.top = newDimension.y + 'px';
    box.style.left = newDimension.x + 'px';
})