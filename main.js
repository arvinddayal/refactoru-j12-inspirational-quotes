var load = function() {


	var toggleInput = function() {
		$('.input-form').toggle('display');
	};

	$('#editor').on('click', toggleInput); 

	var updateName = function() {
		var x = $('#quote-input').val();
		$('#quote').text(x);
	};
	
	var updateBio = function() {
		var x = $('#author-input').val();
		$('#author').text(x);
	};	


	$('#submit-changes').click(function(event) {
		updateName();
		updateBio();
		event.preventDefault();	
	});




};

$(document).on('ready', load);
