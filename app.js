/*eslint-env node*/

//------------------------------------------------------------------------------
// node.js starter application for Bluemix
//------------------------------------------------------------------------------

// This application uses express as its web server
// for more info, see: http://expressjs.com
var express = require('express');

// Require HTTPS module in order to make a call against the Server API
var https = require('https');

// cfenv provides access to your Cloud Foundry environment
// for more info, see: https://www.npmjs.com/package/cfenv
var cfenv = require('cfenv');

// create a new express server
var app = express();

// get the app environment from Cloud Foundry
var appEnv = cfenv.getAppEnv();


// serve the files out of ./public as our main files
app.use(	express.static(__dirname + '/public'));


// start server on the specified port and binding host
app.listen(appEnv.port, '0.0.0.0', function() {
	// print a message when the server starts listening
 	console.log("server starting on " + appEnv.url);
});


// GET against API
app.get("/device", function (response) {
	
	// credentials required for Basic Auth
	var apiKey = "a-e0u82m-gnf2vqkjhh";
	var apiToken = "CPZV9(T(Aj*BFC2bBp";
	
	// add headers for authorization & content type
    var options = {
        host: 'e0u82m.internetofthings.ibmcloud.com',
        path: '/api/v0002/historian/types/ESP8266/devices/DHT11-1',
        auth: apiKey + ':' + apiToken,
        headers: {
            'Authorization': 'Basic ' + new Buffer( apiKey + ':' + apiToken ).toString('base64'),
            'Content-Type': 'application/json'
        }      
    };
    
    var request = https.request(options, function(res){
				console.log('STATUS: ' + res.statusCode);
  				console.log('HEADERS: ' + JSON.stringify(res.headers));
  				res.on('data', function (chunk) {
    				console.log('BODY: ' + chunk);
  				});
    	});
    		
	request.on('error', function(e) {
	  		console.error(e);
	});
	
//	response.send('hello world');
//	// write data to request body
//	request.writeHead('content-type','application/json') ;
//	request.write(postData);
//	request.end();

	
});


