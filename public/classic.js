let gameStarted = false;
let windowDimension = $(".window").css("width").slice(0, -2);
let numCircles = 10;

$(document).keypress(function () {
    console.log("Key pressed!");

    if (gameStarted === false) {
        gameStarted = true;
    }
})

function startGame() {
    $("h2").text(numCircles);
    newCircle();
}

function newCircle() {
    let randomLocation = [Math.floor(Math.random() * (windowDimension - 50)), Math.floor(Math.random() * (windowDimension - 50))];
    console.log(randomLocation);
    let $circle = $("<div></div>").addClass("circle").css({ "top": randomLocation[0] + "px", "left": randomLocation[1] + "px" });

    $(".window").append($circle);
    console.log("Created new circle");

    listenCircleClick();
}

startGame();

function listenCircleClick() {
    $(".circle").click(function () {
        numCircles--;
        $("h2").text(numCircles);
        $(this).remove();

        if (numCircles === 0) {
            endGame();
        }
        else {
            newCircle();
            console.log($(".circle"));
        }
    })
}