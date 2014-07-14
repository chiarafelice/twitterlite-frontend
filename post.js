var button = document.getElementById("tweetButton");

button.onclick = function() { 
	$.post("http://localhost:8080/twitterlite-ws/tweets?username="+
		document.getElementById("usernameInput").value+
		"&content="+document.getElementById("tweetInput").value.replace(/#/g,"%23"), function( data ) {
			console.log(document.getElementById("usernameInput").value + " " + document.getElementById("tweetInput").value);
		});
}






