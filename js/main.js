// Function generates random number and multiplies it by 1520
function generateRandom() {
    return (Math.random() * 1520);
}

// Function generates a random hexadecimal number
function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for(let i = 0, i < 6, i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
// On click creates new circle with random coordinates
$(".btn").on("click", () => {
    var $ball = $("<div></div>").addClass("ball");
    $ball.css({"left": generateRandom(), "top": generateRandom()});
    $("body").append($ball);
});


