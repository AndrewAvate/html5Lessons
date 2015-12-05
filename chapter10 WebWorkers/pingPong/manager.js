window.onload = init;

function init() {
	var numWorker = 3;
	var workers = [];

	for(var i = 0; i < numWorker; i++) {
		var worker = new Worker("worker.js");
		worker.onmessage = function(event) {
			alert(event.target + " says " + event.data);
		};

		workers.push(worker);
	}


	for (var i = 0; i < workers.length; i++) {
		workers[i].postMessage("ping")
	};
}