var request;
if(window.XMLHttpRequest) {
	request = new XMLHttpRequest();
} else {
	request = new ActiveXObject("Microsoft.XMLHTTP");
}
request.open('GET', 'data.xml');
request.onreadystatechange = function() {
	if ((request.readyState===4) && (request.status===200)){
		// parsing xml data by using ajax and dom technology
		// both work as same
		console.log(request.responseXML.getElementsByTagName('author')[2].childNodes[0]);
		console.log(request.responseXML.getElementsByTagName('author')[2].firstChild);
		// only return the node value
		console.log(request.responseXML.getElementsByTagName('author')[2].firstChild.nodeValue);

		// list the author name
		var items = request.responseXML.getElementsByTagName('author');
		var output = '<ul>';
		for (var i=0; i<items.length; i++) {
			output += '<li>' + items[i].firstChild.nodeValue + '</li>';
		}
		output += '</ul>';

		document.getElementById('update').innerHTML = output;
	}
}
request.send();