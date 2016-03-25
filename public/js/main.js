/*
** setting resources, and encoding credential
*/
/*eslint-env node, browser, jquery*/


/*globals d3 */
var local = true;
var endpoint = null;

if (local){
	endpoint = "/endpoint/DHT11-1.json";
}else{
	endpoint = "https://a-e0u82m-gnf2vqkjhh:CPZV9(T(Aj*BFC2bBp@e0u82m.internetofthings.ibmcloud.com/api/v0002/historian/types/ESP8266/devices/DHT11-1";
}

//
var apiKey = "a-e0u82m-gnf2vqkjhh";
var apiToken = "CPZV9(T(Aj*BFC2bBp";
//
var basic_auth = "Basic " + btoa(apiKey + ":" + apiToken); // base64 of concat of key+token

console.log("Authorization", basic_auth);

/*
** Call against the API to get the data
*/
//$.ajax({
//	url: endpoint,
//	headers: {
//        'Authorization':basic_auth,
//        'Content-Type':'application/json'
//    },
//    dataType: "jsonp",
//	
//})
//.done(function (data) {
//	$("#result").html(data);
//});

d3.json(endpoint, function(json){
	console.log("d3 displays:", json);
});