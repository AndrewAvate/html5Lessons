window.onload = execRequest;


//this function send request to the web server
function execRequest() {
	var url = "http://localhost/gumball/sales.json";
	//var url = "http://gumball.wickedlysmart.com";
	var request = new XMLHttpRequest();
	request.open("GET", url);

	request.onload = function() {
		if (request.status == 200) {
			updateSales(request.responseText);
		}
	};

	request.send(null);
}

//display server's response on the page
function updateSales(responseText) {
	var salesDiv = document.getElementById("sales");
	var sales = JSON.parse(responseText);

	for (var i = 0; i < sales.length; i++) {
		var sale = sales[i];
		var div = document.createElement("div");
		div.setAttribute("class", "saleItem");
		div.innerHTML = sale.name + " sold " + sale.sales + " gumbaslls";
		salesDiv.appendChild(div);
	}
}