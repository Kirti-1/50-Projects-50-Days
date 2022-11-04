var shapeList = ["square","rectangle","circle","parallelogram","triangle-up","trapezoid","triangle-bottomleft","triangle-bottomright"]

var changecolor = document.getElementById("changeColor");
var changeShape = document.getElementById("changeShape");
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
changecolor.addEventListener("click", () => {
    var x = getRandomInt(256);
    var y = getRandomInt(256);
    var z = getRandomInt(256);
    var newcolor = 'rgb(' + x + ',' + y + ',' + z  + ')';
    document.getElementById("outer").style.backgroundColor = newcolor;
    console.log(newcolor);
})

changeShape.addEventListener("click", () => {
    var currshape = document.getElementById("inner").classList;
    console.log(currshape[0])
    var digit = getRandomInt(8);
    var newshape = shapeList[digit];
    while(newshape==currshape[0]){
        digit = getRandomInt(8);
        newshape = shapeList[digit];
    }
    currshape.remove(currshape[0]);
    currshape.add(newshape)
    
})

