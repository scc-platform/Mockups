$(document).ready(function(){
	$('#SendMessageExtras').hide();
	$('#SendMessageText').keyup(function() {
		if ($('#SendMessageText').val() == '') {
			$('#SendMessageExtras').hide();
		} else {
			$('#SendMessageExtras').show();
		}
	});
});
