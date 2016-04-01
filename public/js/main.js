/*
** setting resources, and encoding credential
*/
/*eslint-env node, browser, jquery*/

var local = true;
var endpoint = null;
var apiKey = "a-e0u82m-gnf2vqkjhh";
var apiToken = "CPZV9(T(Aj*BFC2bBp";
var basic_auth = "Basic " + btoa(apiKey + ":" + apiToken); // base64 of concat of key+token

// [FIXME] cross domain issue, when trying to reach json resource from distant server. Instead, call of local file
if (local){
	endpoint = "/endpoint/DHT11-1.json";
}else{
	endpoint = "/getDataFeed";
}

//console.log("Authorization", basic_auth);

/*
** D3 JS call against the API to get the data
*/
d3.json(endpoint).header("Authorization", basic_auth).get(function(error,data){
	if (error) {
    	console.log("erreor", error);
	}else {
    	console.log("d3 displays:", data);
	}
  	


	/*
	 * [CALCUL] some interpreation and calculation of the data
	 */
	
	// easier to manipulate the data in a table of objects
	var events = data.events;
	var t = [];
	// variable used to provide average insights
	var t_hum = 0,
		t_tempC = 0,
		t_tempF = 0,
		max_hum = 0;
	
	for (var event in events){
		t_hum += events[event].evt['Humid%'];	
		t_tempC +=  events[event].evt['TempC'];	
		t_tempF += events[event].evt['TempF'];
		
		max_hum = max_hum > events[event].evt['Humid%']? max_hum : events[event].evt['Humid%'];
		
		// 
		t[event] = {};
		t[event].type = events[event].device_type;	
		t[event].id = events[event].device_id;	
		t[event].status = events[event].event_type;	
		t[event].timestamp = events[event].timestamp["$date"];	
		t[event].counter = events[event].evt['counter'];	
		t[event].humidity = events[event].evt['Humid%'];	
		t[event].tempC = events[event].evt['TempC'];	
		t[event].tempF = events[event].evt['TempF'];	
	}

	// averages sent to DOM
	$("#avgHum .val").text(t_hum/events.length.toFixed(2));
	$("#avgTemp .valC").text(t_tempC/events.length.toFixed(2)+"\u2103");
	$("#avgTemp .valF").text(t_tempF/events.length.toFixed(2)+"\u2109");
	
	
	
/*
 * [VISUALIZATION]
 */
renderGraph1(t);
renderGraphHumidity(t);







});


/**
 * 
 */
function renderGraph1(data){
	
	
	var width = 500,
	    barHeight = 6;
	
	
	var x = d3.scale.linear()
	    .domain([d3.min(data), d3.max(data)])
	    .range([0, width]);
	   
	var chart = d3.select(".chart")
	    .attr("width", width)
	    .attr("height", barHeight * data.length);
	
	var bar = chart.selectAll("g")
	    .data(data)
	  	.enter().append("g")
	    .attr("transform", function(d, i) { return "translate(0," + i * barHeight + ")"; });
	
	bar.append("rect")
	    .attr("width", x)
	    .attr("height", barHeight - 3);
	
	

//	//
//	//
//	// some conventional margins over here for our svg
//	var margin = {top: 20, right: 20, bottom: 40, left: 40},
//	    width = 450 - margin.left - margin.right,
//	    height = 250 - margin.top - margin.bottom;
//	    
//	var barHeight = 6;
//	
//	// 1.a set min(x) & max(x)
//	
//	var minX = d3.min(data); // smallest value of dimension looked at
//	var maxX = d3.max(data); // biggest value of dimension looked at
//	
//	var x = d3.scale.linear()
//	    .domain([minX, maxX])
//	    .range([0, width]);
//	   
//	var chart = d3.select("#chart_temperature")
//	    .attr("width", width)
//	    .attr("height", barHeight * data.length);
//	
//	var bar = chart.selectAll("g")
//	    .data(data)
//	  	.enter().append("g")
//	    .attr("transform", function(d, i) { return "translate(0," + i * barHeight + ")"; });
//	
//	bar.append("rect")
//	    .attr("width", x)
//	    .attr("height", barHeight - 3);
}


/**
 * 
 */
function renderGraphHumidity(data){
	
	// some conventional margins over here for our svg
	var margin = {top: 20, right: 20, bottom: 40, left: 40},
	    width = 450 - margin.left - margin.right,
	    height = 250 - margin.top - margin.bottom;
	    
	    
	//    
	// set axes + few value for readibility
	//
	var minX = 0, maxX = 0,
		minY = 0, maxY = 0;
	
	
	// 1.a set min(x) & max(x)
	
	minX = d3.min(data, function(d) { return d.counter; }); // smallest value of dimension looked at
	maxX = d3.max(data, function(d) { return d.counter; }); // biggest value of dimension looked at
	
	var x = d3.scale.linear()
	    .domain([minX, maxX])
	    .range([0, width]);
	
	// 1.b set min(y) & max(y)
	minY = d3.min(data, function(d) { return d.humidity; }); // smallest value of dimension looked at
	maxY = d3.max(data, function(d) { return d.humidity; }); // biggest value of dimension looked at
	
	var y = d3.scale.linear()
	    .domain([50, 100])
	    .range([height, 0]);
	
	var xAxis = d3.svg.axis().scale(x).orient("bottom");
	var yAxis = d3.svg.axis().scale(y).orient("left");
	    
	
	
	
	// filled shape of the graph
	var area = d3.svg.area()
	    			.x(function(d) { return x( d.counter); })
	    			.y0(height)
	    			.y1(function(d) { return y( d.humidity); });
	
	
	// Chart canvas
	var chart = d3.select("#chart_humidity")
	    			.attr("width", width + margin.left + margin.right)
	    			.attr("height", height + margin.top + margin.bottom)
	  				.append("g")
	    			.attr("transform", "translate(" + margin.left + "," + margin.top + ")");
	
	
	chart.append("path")
	    .datum(data)
	    .attr("class", "area")
	    .attr("d", area);
	
	chart.append("g")
	    .attr("class", "x axis")
	    .attr("transform", "translate(0," + height + ")")
	    .call(xAxis)
	    .selectAll("text")
	    .attr("transform", "rotate(-50)").attr("x", -20)
	    .append("title")
  		.attr("x", 0)
  		.attr("dx", width-50)
  		.attr("dy", "-0.2em")
  		.text("Counter");
	
	chart.append("g")
	    .attr("class", "y axis")
	    .call(yAxis)
	    .append("text")
  		.attr("transform", "rotate(-90)")
  		.attr("y", 6)
  		.attr("dy", ".71em")
  		.style("text-anchor", "end")
  		.text("% Humidity");
		    
}
