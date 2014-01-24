var load = function() {


	var toggleInput = function() {
		$('.input-form').toggle('display');
	};

	$('#editor').on('click', toggleInput); 


	var getNewQuote = function() {
		$("#quote-list").append($("<li>" + $('#quote-input').val() + "<br />" + "<span class='author-item'>" + '&mdash; ' + $('#author-input').val() + "</span>" + "<button type='button' class='delete-button'>Delete</button>" + "</li>"));

	};


	$(document).on("click",".delete-button",function() {
		$(this).parent().remove();
	});


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

	// var createQuote = function() {
	// 	getNewQuote();
	// };
	