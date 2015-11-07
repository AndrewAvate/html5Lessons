window.onload = drawCircle;

function drawCircle() {
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    context.beginPath();
    context.fillStyle = "red";
    context.arc(150, 150, 40, 0, 2 * Math.PI, true);
    context.lineWidth = 10;
    context.stroke();
    context.fill();

}

function drawTriangle() {
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");

    context.beginPath();
    context.moveTo(100, 150);
    context.lineTo(250, 75);
    context.lineTo(125, 30);
    context.closePath();
    context.lineWidth = 5;
    context.stroke();
    context.fillStyle = "red";
    context.fill();
}

