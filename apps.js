function showProps() {
	var main = document.getElementsByTagName("body")[0];
	console.log(main);
	for (var prop in location) {
		console.log(prop);
		var elem = document.createElement("p");
		var text = document.createTextNode(prop + ": " + location[prop]);
		elem.appendChild(text);
		main.appendChild(elem);
	}

	var enlace = document.getElementsByTagName("a")[0]
	var href = enlace.href;
	console.log(href.split("?"));			
	var querystring = href.split("?")[1];	
	console.log(querystring);
	var elem =document.createElement("p");
	var text = document.createTextNode("el querystring del enlace es: " +  querystring + " recuerda que es todo lo que aparece luego del signo ? en una url");
	elem.appendChild(text);
	main.appendChild(elem);		
}