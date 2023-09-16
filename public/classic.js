let gameStarted = false;

$(document).keypress(function () {
    console.log("Key pressed!");

    if (gameStarted === false) {
        gameStarted = true;
    }
})

function startGame() {
    // Get width of window
    let width = $(".window").css("width").slice(0, -2);
    console.log(width);
    let height = $(".window").css("height").slice(0, -2);
    console.log(height);

    let randomLocation = [Math.floor(Math.random() * (width - 50)), Math.floor(Math.random() * (width - 50))];
    console.log(randomLocation);
    let $circle = $("<div></div>").addClass("circle").css({ "top": randomLocation[0] + "px", "left": randomLocation[1] + "px" });
    $(".window").append($circle);
}

function makeCircle() {

}

startGame();
