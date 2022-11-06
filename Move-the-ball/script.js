var ball = document.getElementById("ball");
// var x = getRandomNumber(500);
// var y = getRandomNumber(500);
// // ball.style.transform = 'translate(' +  x + 'vw,' + y + 'vh)';
// ball.style.top = x + 'px';
// ball.style.left = y + 'px';

function getRandomNumber(maxRange){
    return Math.floor(Math.random() * maxRange);
}

function moveupward(){
    var ydist = ball.getBoundingClientRect().top;
    var y = ydist;
    var scrollEvent = setInterval(()=>{
        
        if(y<=0){
            clearInterval(scrollEvent);
            return;
        }
        ball.style.top = y + 'px';
        y -= 5;

    }, 25);
}
function moveleft(){
    var xdist = ball.getBoundingClientRect().x;
    var x = xdist;
    var scrollEvent = setInterval(()=>{
        
        if(x<=0){
            clearInterval(scrollEvent);
            return;
        }
        ball.style.left = x + 'px';
        x -= 5;

    }, 25);
}

function moveright(){
    var xdist = ball.getBoundingClientRect().x;
    var x = xdist;
    var scrollEvent = setInterval(()=>{
        
        if(x>window.innerWidth-ball.getBoundingClientRect().width-20){
            clearInterval(scrollEvent);
            return;
        }
        ball.style.left = x + 'px';
        x += 5;

    }, 25);
}
function movedown(){
    var ydist = ball.getBoundingClientRect().top;
    var y = ydist;
    var scrollEvent = setInterval(()=>{
        
        if(y>=window.innerHeight-ball.getBoundingClientRect().height-20){
            clearInterval(scrollEvent);
            return;
        }
        ball.style.top = y + 'px';
        y += 5;

    }, 25);
}


document.addEventListener('keydown', (e)=>{
    var keypressed = e.key;
    switch(keypressed.toLowerCase()){
        case 'w': console.log('w'); moveupward(); break;
        case 'a': console.log('a'); moveleft(); break;
        case 's': console.log('s'); movedown(); break;
        case 'd': console.log('d'); moveright(); break;
    }
})