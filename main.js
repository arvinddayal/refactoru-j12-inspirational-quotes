var load = function() {


	var toggleInput = function() {
		$('.input-form').toggle('display');
	};

	$('#editor').on('click', toggleInput); 


	var getNewQuote = function() {
		$("#quote-list").append($("<li>" + $('#quote-input').val() + "<br />" + "<span>" + $('#author-input').val() + "</span>" + "</li>"));
	};

	// var createQuote = function() {
	// 	getNewQuote();
	// };


	$('#quote-form').submit(function(event) {
		event.preventDefault();
		getNewQuote();
	});




};

$(document).on('ready', load);


	// $('#submit-changes').click(function(event) {
	// 	updateQuote();
	// 	updateAuthor();
	// 	event.preventDefault();	
	// });


	// var updateQuote = function() {
	// 	var x = $('#quote-input').val();
	// 	$('#quote').text(x);
	// };
	
	// var updateAuthor = function() {
	// 	var x = $('#author-input').val();
	// 	$('#author').text(x);
	// };	


	