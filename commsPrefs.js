function editDetails(id) {
	var title = $('#CommunicateTitle'+id).text();
	$('#CommunicateTitle'+id).html('<input type="text" name="title">');
	$('#CommunicateTitle'+id+' input').val(title);
	var details = $('#CommunicateDetails'+id).text();
	$('#CommunicateDetails'+id).html('<input type="text" name="details">');
	$('#CommunicateDetails'+id+' input').val(details);

}
