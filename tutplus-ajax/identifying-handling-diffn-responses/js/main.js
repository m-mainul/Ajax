(function() {
	// Target the element
	var link = document.getElementsByTagName("a")[0];

	link.onclick = function() {
		// the argument in the ajax method
		// first one is url & second one is object
		// ajax('files/ajax.json', {} );
		// Instead of using globla method we can use namespace 
		// by placing the method into the js object
		// This object will be global but each method inside of it would be unique that object
		// & this will be reducing chances of overriding
		Ajax.ajax('files/ajax.json', {
		// for xml
		// Ajax.ajax('files/ajax.xml', {
		// for html
		// Ajax.ajax('files/ajax.html', {
		// for text
		// Ajax.ajax('files/ajax.text', {
			method 		: "GET",
			// complete callback is ran when our ajax request is complete & ready to update the page
			complete 	: function(response) {
				// for json
				// alert(response.heading);
				// for xml
				// alert(response.getElementsByTagName("heading")[0].firstChild.nodeValue);
				// for html
				// alert(response);
				// for text
				// alert(response);
				// so now user can use this or response for grab the response
				// This is will ran when our ajax request is complete & ready to update
				var body = document.getElementsByTagName("body")[0];
				
				// We can also use this keyword to hold the rquest like this.responseText
				// or like this.readyState or this.status or any other property
				// responseText & response is same thing
				// We can use this keyword here by the grace of call method
				// We use only response to hold the data instead of using xhr.response
				// var json = JSON.parse(xhr.response);
				// This is much cleaner & easier way to grab the ajax request
				var json = response;

				// alert(json);
				console.log(json);
				console.log(resopnseAgain);

				var heading		= json.heading;
				var h2 			= document.createElement("h2");
				var h2Text		= document.createTextNode(heading);
				h2.appendChild(h2Text);

				var list 		= document.createElement("ul");

				// This will return only the items tag but we need digging further
				var items 		= json.items;

				for(var key in items) {
					var item 	= items[key];
					var li 	 	= document.createElement("li");
					var liText 	= document.createTextNode(item);
					li.appendChild(liText);
					list.appendChild(li);

				}
				body.appendChild(h2);
				body.appendChild(list);



				body.removeChild(link);
			}
		});
		// XHR Object

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
			
		// send the request
		// xhr.send(null) is null because our request is get not a post method

		// In able to disable the default behavior of our link	
		return false;  
	}
})();