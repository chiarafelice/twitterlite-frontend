var loca = location.search;
var usernameQS = loca.replace(/%22/g,"");
var username = usernameQS.split("=");
console.log(username[1]);