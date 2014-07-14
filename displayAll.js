$.get( "http://localhost:8080/twitterlite-ws/messages?offset=0&limit=22", function( data ) {
 console.log(data);
	for (i = 0; i < data.length; i++) { 		
		var parentDiv = document.getElementById("content");
		
		var container = document.createElement("div");
		container.setAttribute("class","list-group");
		
		var containerSon = document.createElement("div");
		containerSon.setAttribute("class","list-group-item");
		
		var p=  document.createElement("p");
		p.setAttribute("class","list-group-item-text");

    	var url = "content.html?user=%22"+data[i].username +"%22";

    	p.innerHTML = "<a href=" + url + ">" + "@"+ data[i].username + " </a>";

		
		var h4 = document.createElement("h4");
		h4.setAttribute("class","list-group-item-heading");


		var tagslistarr = data[i].content.split(' ');
		var arr=[];

		var tweet = "";

		$.each(tagslistarr,function(i,val){
		    if(tagslistarr[i].indexOf('#') == 0){
		    	var tag = tagslistarr[i].substring(1);
		    	var url = "content.html?hashtag=%22"+tag+"%22";
		    	
		    	tweet += "<a href=" + url + ">" + tagslistarr[i] + " </a>";
		        
		    } else if(tagslistarr[i].indexOf('@') == 0){
		    	var user = tagslistarr[i].substring(1);

		    	var url = "content.html?user=%22"+user+"%22";
		    	tweet += "<a href=" + url + ">" + tagslistarr[i] + " </a>";

		    } else {
		    	tweet += tagslistarr[i] + " ";
		    }
		});




		// h4.innerHTML=data[i].content;
		h4.innerHTML = tweet;

		containerSon.appendChild(p);
		containerSon.appendChild(h4);
		
		container.appendChild(containerSon);

		parentDiv.appendChild(container);
		
		console.log(container);
	}
});



