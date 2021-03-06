var canvas;
var ctx;

var i_max = 1.5;
var i_min = -1.5;
var r_max = -2.5;
var r_min = 1.5;

var max_iter = 1024;
var escape = 1025;
var pallete = [];

function createTask(row) {
	var task = {
		row: row,
		width: rowData.width,
		generation: generation,
		r_min: r_min,
		r_max: r_max,
		i: i_max + (i_min - i_max) * row/canvas.height,
		max_iter: max_iter,
		escape: escape
	};
	return task;
}

function makePallete() {
	function wrap(x) {
		x = ((x + 256) & 0x1ff) - 256;
		if (x < 0) x = -x;
		return x;
	}	
	for (var i = 0; i < max_iter; i++) {
		pallete.push([wrap(7*i), wrap(5*i), wrap(11*i)]);
	}
}

function drawRow (workerResults) {
	var values = workerResults.values;
	var pixelData = rowData.data;
	for(var i = 0; i < rowData.width; i++){
		var red = i * 4;
		var green = i * 4 + 1;
		var blue = i * 4 + 2;
		var alpha = i * 4 + 3;
		pixelData[alpha]  = 255;
		if (values[i] < 0) {
			pixelData[red] = pixelData[green] = pixelData[blue] = 0;
		} else {
			var color = this.pallete[values[i]];
			pixelData[red] = color[0];
			pixelData[green] = color[1];
			pixelData[blue] = color[2];
		}
	}
	ctx.putImageData(this.rowData, 0, workerResults.row);
}

function setupGraphics() {
	canvas = document.getElementById("fractal");
	ctx = canvas.getContext("2d");
	
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	var width = ((i_max - i_min) * canvas.width/canvas.height);
	var r_mid = (r_max + r_min) / 2;
	r_min = r_mid - width/2;
	r_max = r_mid + width/2;
	rowData = ctx.createImageData(canvas.width, 1);

	makePallete();
}

function computeRow(task) {
	var iter = 0;
	var c_i = task.i;
	var max_iter = task.max_iter;
	var escape = task.escape * task.escape;
	task.values = [];
	for (var i = 0; i < task.width; i++) {
		var c_r = task.r_min + (task.r_max - task.r_min) * i/task.width;
		var z_r = 0, z_i = 0;
		for (iter = 0; z_r*z_r + z_i*z_i < escape && iter < max_iter; iter++) {
			//z -> z^2 + c
			var tmp = z_r*z_r - z_i*z_i + c_r;
			z_i = 2 * z_r * z_i + c_i;
			z_r = tmp;
		}
		if (iter == max_iter) {
			iter = -1;
		}
		task.values.push(iter);
	}

	return task;
}