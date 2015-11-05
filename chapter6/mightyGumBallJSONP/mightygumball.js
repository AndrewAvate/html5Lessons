window.onload = execRequest;


//this function send request to the web server
function execRequest() {

}

//call JSONP server's callback
function updateSales(sales) {
	var salesDiv = document.getElementById("sales");

	for (var i = 0; i < sales.length; i++) {
		var sale = sales[i];
		var div = document.createElement("div");
		div.setAttribute("class", "saleItem");
		div.innerHTML = sale.name + " sold " + sale.sales + " gumbaslls";
		salesDiv.appendChild(div);
	}
}