(function() {
	// grab the first link tag from the page;
	var link = document.getElementsByTagName("a")[0];
	link.onclick = function () {
		// XHR Object
		var xhr = new XMLHttpRequest;

		// handle the "onreadystatechange" event
		// xhr.readyState property values
		// 0 = uninitialized i.e request is not open yet
		// 1 = Loading
		// 2 = Loaded i.e request is sent to the server
		// 3 = Interactive i.e request is processed & ready to sent back from the server
		// 4 = complete request is finished & we can access server response
		
		xhr.onreadystatechange = function() {
			// if the condition is true i.e our page is ready to update wiht the ajax context 
			if((xhr.readyState == 4) && (xhr.status == 200 || xhr.status == 304)) {
				// xhr.responseText;
				var body 	= document.getElementsByTagName("body")[0];
				var p 	 	= document.createElement("p");
				var pText	= document.createTextNode(xhr.responseText);
				p.appendChild(pText);
				body.appendChild(p);
			}
		}

		// Open the request
		// basically this allows us to open the web page or files from the sever via ajax
		// Generally open() method takes two arguments & few other additional arguments as well
		// The first is one is type request we make "GET" OR "POST" & Second one is file or url that we requesting
		// Here third argument is for whether the request is synchronous or asynchronous
		// The request is asynchronous by default that means user can't wait for browser refresh the request is happen in the background.
		xhr.open("GET", "files/ajax.txt", true);
		
		// Send the request
		// This method takes one parameter & that's the data that we want to send in the server.
		// for example on post request we can send the query string for the server process
		// but in your case we are going to get request we don't need any data pass to the server
		// so instead we pass null as the argument
		xhr.send(null);  
		// Here return false is used to disable the default behavior of the link
		// disable the links normal behavior
		return false;
	}
})();