var loca = location.search;
var usernameQS = loca.replace(/%22/g,"");
var username = usernameQS.split("=");

if(username[1]!=null){
$.get( "http://localhost:8080/twitterlite-ws/messages/user?user="+username[1]+"&offset=0&limit=10", function( data ) {
 console.log(data);
	for (i = 0; i < data.length; i++) { 
	//	console.log();
		//console.log();
		
		var parentDiv = document.getElementById("content");
		
		var container = document.createElement("div");
		container.setAttribute("class","list-group");
		
		var containerSon = document.createElement("div");
		containerSon.setAttribute("class","list-group-item");
		
		var p=  document.createElement("p");
		p.setAttribute("class","list-group-item-text");
		p.innerHTML="@"+data[i].username;
		
		var h4 = document.createElement("h4");
		h4.setAttribute("class","list-group-item-heading");
		h4.innerHTML=data[i].content;
		

		containerSon.appendChild(p);
		containerSon.appendChild(h4);
		
		container.appendChild(containerSon);

		parentDiv.appendChild(container);
		
		console.log(container);
	}
});
}else{
window.location="error.html";
}


