const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let currcounter = 1;
next.addEventListener('click', () => {
    currcounter++;

    if(currcounter > circles.length){
        currcounter = circles.length;
    }

    updateTheBar();
});

prev.addEventListener('click', () => {
    currcounter--;

    if(currcounter < 1){
        currcounter = 1;
    }
    updateTheBar();

});

function updateTheBar(){
    circles.forEach((circle, idx) => {
        if(currcounter > idx){
            circle.classList.add("active");
        }else{
            circle.classList.remove("active");
        }
    });

    const active = document.querySelectorAll(".active");
    console.log(active.length, circles.length);

    progress.style.width = ((active.length-1)/(circles.length-1)) * 100 + '%';

    if(currcounter == circles.length){
        next.disabled = true;
    }else if(currcounter == 1){
        prev.disabled = true;
    }else{
        next.disabled = false;
        prev.disabled = false;
    }


}   
