var load = function() {


	var toggleInput = function() {
		$('.input-form').toggle('display');
	};

	$('#editor').on('click', toggleInput); 



	var deleteButton = "<button type='button' class='delete-button'>Delete</button>";

	var ratingSystem = "<input type='radio' name='group1' value'1 Star'>1 Star <input type='radio' name='group1' value'2 Star'>2 Star <input type='radio' name='group1' value'3 Star'>3 Star <input type='radio' name='group1' value'4 Star'>4 Star <input type='radio' name='group1' value'5 Star'>5 Star <br>";

	var getNewQuote = function() {
		$("#quote-list").append($("<li>" + $('#quote-input').val() + "<br />" + "<span class='author-item'>" + '&mdash; ' + $('#author-input').val() + "</span>" + "<br />" + ratingSystem + deleteButton + "</li>"));

	};


	$(document).on("click",".delete-button",function() {
		$(this).parent().remove();
	});


	$('#quote-form').submit(function(event) {
		event.preventDefault();
		if (($('#quote-input') || $('#author-input')) === null) {
			alert("You left a field blank");
		}
		else {
		getNewQuote();
		}
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
	