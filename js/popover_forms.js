$(document).ready(function(){
	$('.add_file').on('click', function(e) {
		$('.files_area').append('<input type="file" name="attached_files[]" />');
		e.preventDefault();
		
		return false;
	});
	$('.close-button, .white_fon').click(function(e){
		$('.close-button').parent().hide('slow');
		$('.white_fon').slideUp('slow');
		e.preventDefault();
	});
	
	$('#send_request').click(function(e){
		$('.white_fon').slideDown('slow');
		$('.user_request').show('slow');
		e.preventDefault();
	});
	
	$('#callback_request').click(function(e){
		$('.white_fon').slideDown('slow');
		$('.user_callback').show('slow');
		e.preventDefault();
	});
	
	
})