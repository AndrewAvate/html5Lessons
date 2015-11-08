window.onload = drawSmile;


function drawSmile() {
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");

    //face
    context.beginPath();
    context.arc(300, 300, 200, 0, 2*Math.PI, true);
    context.fillStyle = "#ffffcc";
    context.fill();
    context.stroke();
    
    //left eye
    context.beginPath();
    context.arc(200, 250, 25, 0, 2*Math.PI, true);
    context.stroke();

    //right eye
    context.beginPath();
    context.arc(400, 250, 25, 0, 2*Math.PI, true);
    context.stroke();

    //nose
    context.beginPath();
    context.moveTo(300, 300);
    context.lineTo(300, 350);
    context.stroke();
    
    //mouth
    context.beginPath();
    context.arc(300, 350, 75, 20*Math.PI/180, 160*Math.PI/180, false);
    context.stroke();
}

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

