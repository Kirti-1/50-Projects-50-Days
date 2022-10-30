const panels = document.querySelectorAll('.panel')
// console.log(panels);
panels.forEach((panel) => {
    // console.log(panel);
    panel.addEventListener('click', () => {
        // console.log("clicked");
        removeAllActiveClasses();
        panel.classList.add('active');
    })
}) 

function removeAllActiveClasses(){
    panels.forEach(panel => {
        panel.classList.remove('active');
    })
}