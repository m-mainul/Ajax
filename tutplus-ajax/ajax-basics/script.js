// for(var i = 0; i<100; i++){
	//var request = new XMLHttpRequest();
	// request.open('GET','data.txt',false); -- Synchronous ajax request// first one is method //second one is location of the data file // third one is boolean value i.e we mean whether request is synchronous or not.
	// browser compatibility
	var request;
	if (window.XMLHttpRequest) { // if the browser api is the xmlhttprequest then set the request is the object of xmlhttprequest
		request = new XMLHttpRequest();
	} else {
		request = new ActiveXObject("Microsoft.XMLHTTP");
	}
	request.open('GET','data.txt'); //-- asynchronous ajax request by default// first one is method //second one is location of the data file // third one is boolean value i.e we mean whether request is synchronous or not.
	// request.send();
	request.onreadystatechange = function() {
		if((request.readyState===4) && (request.status===200)) {
			console.log(request);
			document.writeln(request.responseText);
		}
	}
	request.send();
	
// }