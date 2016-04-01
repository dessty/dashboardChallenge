/*eslint-env node*/

//------------------------------------------------------------------------------
// node.js starter application for Bluemix
//------------------------------------------------------------------------------

// This application uses express as its web server
// for more info, see: http://expressjs.com
var express = require('express');

// cfenv provides access to your Cloud Foundry environment
// for more info, see: https://www.npmjs.com/package/cfenv
var cfenv = require('cfenv');

// create a new express server
var app = express();

// get the app environment from Cloud Foundry
var appEnv = cfenv.getAppEnv();


// serve the files out of ./public as our main files
app.use(	express.static(__dirname + '/public'));


//app.configure(function(){
//  app.set('port', appEnv.port);  
//  app.set("view options", {layout: false});  //This one does the trick for rendering static html
//  app.engine('html', require('ejs').renderFile); 
//  app.use(app.router);
//});

app.get("/dashboard", function (req, res) {
	res.writeHead(200, {"Content-Type": "text/plain"});
	res.render("/dashboard.html");
	
//	req.header("Access-Control-Allow-Origin", "*");
//	req.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//	
//	res.header("Access-Control-Allow-Origin", "*");
//	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
});





// start server on the specified port and binding host
app.listen(appEnv.port, '0.0.0.0', function() {

	// print a message when the server starts listening
  console.log("server starting on " + appEnv.url);
});


//var request = require('request'),
//    username = "a-e0u82m-gnf2vqkjhh",
//    password = "CPZV9(T(Aj*BFC2bBp",
//    url = "https://a-e0u82m-gnf2vqkjhh:CPZV9(T(Aj*BFC2bBp@e0u82m.internetofthings.ibmcloud.com/api/v0002/historian/types/ESP8266/devices/DHT11-1",
//    auth = "Basic " + new Buffer(username + ":" + password).toString("base64");
//
//request(
//    {
//        url : url,
//        headers : {
//        	"Content-Type": "application/json",
//            "Authorization" : auth
//        }
//    },
//    function (error, response, body) {
//        console.log("RESPONSE HERE:", response);
//    }
//);
