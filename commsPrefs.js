var details = {};
function editDetails(id) {
	details[id] = {
		title: $('#CommunicateTitle'+id).text(),
		detail: $('#CommunicateDetails'+id).text()
	}
	$('#CommunicateTitle'+id).html('<input type="text" name="title">');
	$('#CommunicateTitle'+id+' input').val(details[id].title);
	$('#CommunicateDetails'+id).html('<input type="text" name="details">');
	$('#CommunicateDetails'+id+' input').val(details[id].detail);
	
	$('#CommunicationMethod'+id+' td.actions').html('<input type=submit value="save"> <a href="" onclick="cancelEdit('+id+'); return false;">cancel</a>');
}
function cancelEdit(id) {
	/** TODO escapeing **/
	$('#CommunicateTitle'+id).html(details[id].title);
	$('#CommunicateDetails'+id).html(details[id].detail);
	$('#CommunicationMethod'+id+' td.actions').html('<a href="" onclick="editDetails('+id+'); return false;">Edit</a> <a href="">Delete</a>');
}
