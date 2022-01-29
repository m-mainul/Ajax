(function() {
	// Target the element
	var link = document.getElementsByTagName("a")[0];

	link.onclick = function() {
		// XHR Object
		var xhr = new XMLHttpRequest();

		// handle the "onreadystatechange" event
		// xhr.readyState property values
		// 0 = uninitialized basically meaning that the request hasn't open yet
		// 1 = Loading basically meaning the request has been opened
		// 2 = Loaded that means request has been sent to the server
		// 3 = Interactive i.e server process the request & reponse back
		// 4 = Complete i.e. request is finished we access to the server response

		// open the request
		// first one is method second one is file & third is request is asynchronous or synchrounous
		// by default asynchronous & true means asynchronous
		

		xhr.onreadystatechange = function(){
			if ((xhr.readyState == 4) && (xhr.status == 200 || xhr.status == 304)) {
				// When linked is clicked on then ajax request is happening & creating a div
				// insert it into the html body
				var body 		= document.getElementsByTagName("body")[0];
				var heading		= xhr.responseXML.getElementsByTagName("heading")[0].firstChild.nodeValue;
				var h2 			= document.createElement("h2");
				var h2Text		= document.createTextNode(heading);
				h2.appendChild(h2Text);

				var list 		= document.createElement("ul");

				// This will return only the items tag but we need digging further
				var items 		= xhr.responseXML.getElementsByTagName("items")[0];
				console.log(items);
				items 			= items.getElementsByTagName("item");
				console.log(items);

				for(var i=0; i<items.length; i++) {
					var item 	= items[i].firstChild.nodeValue;
					var li 	 	= document.createElement("li");
					var liText 	= document.createTextNode(item);
					li.appendChild(liText);
					list.appendChild(li);

				}

				body.appendChild(h2);
				body.appendChild(list);



				body.removeChild(link);
			}
		};
		
		xhr.open("GET", "files/ajax.xml", true);
		// send the request
		// xhr.send(null) is null because our request is get not a post method
		xhr.send(null);

		// In able to disable the default behavior of our link	
		return false;  
	}
})();