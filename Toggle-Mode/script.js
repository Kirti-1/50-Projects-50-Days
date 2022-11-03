
var ball = document.getElementById("ball");

ball.addEventListener("click", function () {
  // console.log("hello");
  if (ball.classList.contains("left")) {
    ball.classList.remove("left");
    ball.classList.add("right");
    document.body.style.backgroundColor = "black";
    document.getElementsByTagName("h2")[0].style.color = "white";
  } else {
    ball.classList.remove("right");
    ball.classList.add("left");
    document.body.style.backgroundColor = "white";
    document.getElementsByTagName("h2")[0].style.color = "black";
  }
});
