var loca = location.search;
var usernameQS = loca.replace(/%22/g,"");
var username = usernameQS.split("=");

if(username[1]!=null){
$.get( "http://localhost:8080/twitterlite-ws/messages/user?user="+username[1], function( data ) {
  $( ".result" ).html( data );
 console.log(data);
});
}else{
window.location="error.html";
}