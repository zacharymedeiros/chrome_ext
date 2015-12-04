//look up document vs window
var userMessage;


document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('createLink');
    // onClick's logic below:
    link.addEventListener('click', function() {

       
		//Stores times and comments and then generates a message for the backend
		//Currently uses a set amount of comments, changeable in the future
		//Potential solutions:
		//-> window.name
		//-> initialize global object in the beginning

		var time1Value = document.getElementById("time1").value;
		var time2Value = document.getElementById("time2").value;
		var time3Value = document.getElementById("time3").value;

		var comment1Value = document.getElementById("comment1").value;
		var comment2Value = document.getElementById("comment2").value;
		var comment3Value = document.getElementById("comment3").value;

		var messageArray = [time1Value, time2Value, time3Value, comment1Value, comment2Value, comment3Value];
		userMessage = JSON.stringify(messageArray);

	});

});