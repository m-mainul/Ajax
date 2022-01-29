(function() {
	// Target the element
	var link = document.getElementsByTagName("a")[0];

	link.onclick = function() {
		Ajax.ajax('files/ajax.txt', {
			method 		: "GET",
			complete 	: function(response) {
				alert(response);
			}
		});
		return false;  
	}

	var form = document.getElementsByTagName('form')[0];

	form.onsubmit = function() {
		var emailVal = document.getElementById("email").value;
		var url = form.getAttribute("action");

		Ajax.ajax(url, {
			method: "POST",
			data: {
				email: emailVal
			},
			complete: function(response) {
				var body = document.getElementsByTagName("body")[0];
				var d = document.createElement("div");
				body.appendChild(d);

				var div = document.getElementsByTagName("div")[0];
				div.innerHTML = response;
			}
		})
		return false;
	}
})();