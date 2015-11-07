window.onload = executor;

//init script
function executor() {
	var button = document.getElementById("previewButton");
	button.onclick = previewHandler;
}

//submit handler
function previewHandler() {
	var canvas = document.getElementById("tshirtCanvas");
	var context = canvas.getContext("2d");

    //clear canvas
    fillBackgroundColor(canvas, context);

	var selectObj = document.getElementById("shape");
	var index = selectObj.selectedIndex;
	var shape = selectObj[index].value;

	if (shape == "squares") {
		for (var squares = 0; squares < 20; squares++) {
			drawSquare(canvas, context);
		}
	} else if (shape == "circles") {
		for (var circles = 0; circles < 20; circles++) {
			drawCircle(canvas, context);
		}
	}
}

function drawCircle(canvas, context) {
	var radius = Math.floor(Math.random() * 40);
	var x = Math.floor(Math.random() * canvas.width);
	var y = Math.floor(Math.random() * canvas.height);
	context.beginPath();
	//context.fillStyle = "lightblue";
	context.fillStyle = "red";
	context.arc(x, y, radius, 0, 2 * Math.PI, true);
	context.fill();
}

//draw square on the canvas
function drawSquare (canvas, context) {
	var width = Math.floor(Math.random() * 40);
	var x = Math.floor(Math.random() * canvas.width);
	var y = Math.floor(Math.random() * canvas.height);
	//context.fillStyle = "lightblue";
	context.fillStyle = "red";
	context.fillRect(x, y, width, width);
}

//clear canvas, it fills background by background color :)
function fillBackgroundColor(canvas, context) {
	var selectObj = document.getElementById("backgroundColor");
	var index = selectObj.selectedIndex;
	var bgColor = selectObj.options[index].value;
	context.fillStyle = bgColor;
	context.fillRect(0, 0, canvas.width, canvas.height);
}