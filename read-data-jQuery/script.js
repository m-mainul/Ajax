$.getJSON('data.json', function(data) {
	var output = '<ul>';
	$.each(data, function(key, val) {
		output += '<li>' + val.name + '</li>';
	});
	output += '</ul>';
	// $('#update').html(output);
	// $('#update').append(output); //append will add the text before the content
	$('#update').prepend(output); //prepend will add the text after the content
});