window.onload = init;

function init() {
	var button = document.getElementById("add_button");
	var clearButton = document.getElementById("clear_button");
	button.onclick = createSticky;
	clearButton.onclick = clearStorage;


	var stickiesArray = getStickiesArray();
	for(var key in stickiesArray) {
		var value = localStorage[stickiesArray[key]];
		addStickyToDOM(value);
	}
}

function addStickyToDOM(value) {
	var stickies = document.getElementById("stickies");
	var sticky = document.createElement("li");
	var span = document.createElement("span");
	span.setAttribute("class", "sticky");
	sticky.setAttribute("class", "liSticky");
	span.innerHTML = value;
	sticky.appendChild(span);

	if(stickies.firstChild) {
		stickies.insertBefore(sticky, stickies.firstChild);
	} else {
		stickies.appendChild(sticky);
	}
}

function createSticky() {
	var stickiesArray = getStickiesArray();
	var currentDate = new Date();
	var key = "sticky_" + currentDate.getTime();
	var value = document.getElementById("note_text").value;
	stickiesArray.splice(stickiesArray.length, 0, key);
	localStorage.setItem(key, value);
	localStorage.setItem("stickiesArray", JSON.stringify(stickiesArray));
	addStickyToDOM(value)
}

function clearStorage() {
	localStorage.clear();

	var elements = document.getElementsByClassName("liSticky");
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}

function getStickiesArray() {
	var stickiesArray = localStorage["stickiesArray"];
	if(!stickiesArray) {
		stickiesArray = [];
		localStorage.setItem("stickiesArray", JSON.stringify(stickiesArray));
	} else {
		stickiesArray = JSON.parse(stickiesArray);
	}
	return stickiesArray;
}
