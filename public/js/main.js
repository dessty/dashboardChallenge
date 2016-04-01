$("document").ready(function(){
	
	//
	var local = true;
	var endpoint = null;
	var apiKey = "a-e0u82m-gnf2vqkjhh";
	var apiToken = "CPZV9(T(Aj*BFC2bBp";
	var basic_auth = "Basic " + btoa(apiKey + ":" + apiToken); // base64 of concat of key+token

	// [FIXME] cross domain issue, when trying to reach json resource from distant server. Instead, call of local file
	//
	if (local){
		endpoint = "https://s3-us-west-2.amazonaws.com/wheeli-contents/analytics/custom_admin/json/DHT11-1.json";
	}else{
		endpoint = "/getDataFeed";
	}

	  	
	  	var data = {"events": [{"device_type": "ESP8266", "device_id": "DHT11-1", "evt_type": "status", "timestamp":{"$date": 1458860519013}, "evt":{"counter": 211368, "Humid%": 78, "TempC": 23, "TempF": 73.4}},{"device_type": "ESP8266", "device_id": "DHT11-1", "evt_type": "status", "timestamp":{"$date": 1458860508197}, "evt":{"counter": 211357, "Humid%": 78, "TempC": 23, "TempF": 73.4}},{"device_type": "ESP8266", "device_id": "DHT11-1", "evt_type": "status", "timestamp":{"$date": 1458860497345}, "evt":{"counter": 211346, "Humid%": 78, "TempC": 23, "TempF": 73.4}},{"device_type": "ESP8266", "device_id": "DHT11-1", "evt_type": "status", "timestamp":{"$date": 1458860486493}, "evt":{"counter": 211335, "Humid%": 78, "TempC": 23, "TempF": 73.4}},{"device_type": "ESP8266", "device_id": "DHT11-1", "evt_type": "status", "timestamp":{"$date": 1458860475641}, "evt":{"counter": 211324, "Humid%": 78, "TempC": 23, "TempF": 73.4}},{"device_type": "ESP8266", "device_id": "DHT11-1", "evt_type": "status", "timestamp":{"$date": 1458860464829}, "evt":{"counter": 211313, "Humid%": 78, "TempC": 23, "TempF": 73.4}},{"device_type": "ESP8266", "device_id": "DHT11-1", "evt_type": "status", "timestamp":{"$date": 1458860453977}, "evt":{"counter": 211303, "Humid%": 78, "TempC": 23, "TempF": 73.4}},{"device_type": "ESP8266", "device_id": "DHT11-1", "evt_type": "status", "timestamp":{"$date": 1458860443125}, "evt":{"counter": 211292, "Humid%": 78, "TempC": 23, "TempF": 73.4}},{"device_type": "ESP8266", "device_id": "DHT11-1", "evt_type": "status", "timestamp":{"$date": 1458860432313}, "evt":{"counter": 211281, "Humid%": 78, "TempC": 23, "TempF": 73.4}},{"device_type": "ESP8266", "device_id": "DHT11-1", "evt_type": "status", "timestamp":{"$date": 1458860421461}, "evt":{"counter": 211270, "Humid%": 78, "TempC": 23, "TempF": 73.4}},{"device_type": "ESP8266", "device_id": "DHT11-1", "evt_type": "status", "timestamp":{"$date": 1458860410609}, "evt":{"counter": 211259, "Humid%": 78, "TempC": 23, "TempF": 73.4}},{"device_type": "ESP8266", "device_id": "DHT11-1", "evt_type": "status", "timestamp":{"$date": 1458860399757}, "evt":{"counter": 211248, "Humid%": 78, "TempC": 23, "TempF": 73.4}},{"device_type": "ESP8266", "device_id": "DHT11-1", "evt_type": "status", "timestamp":{"$date": 1458860388945}, "evt":{"counter": 211238, "Humid%": 78, "TempC": 23, "TempF": 73.4}},{"device_type": "ESP8266", "device_id": "DHT11-1", "evt_type": "status", "timestamp":{"$date": 1458860378093}, "evt":{"counter": 211227, "Humid%": 78, "TempC": 23, "TempF": 73.4}},{"device_type": "ESP8266", "device_id": "DHT11-1", "evt_type": "status", "timestamp":{"$date": 1458860367241}, "evt":{"counter": 211216, "Humid%": 78, "TempC": 23, "TempF": 73.4}},{"device_type": "ESP8266", "device_id": "DHT11-1", "evt_type": "status", "timestamp":{"$date": 1458860356409}, "evt":{"counter": 211205, "Humid%": 78, "TempC": 23, "TempF": 73.4}},{"device_type": "ESP8266", "device_id": "DHT11-1", "evt_type": "status", "timestamp":{"$date": 1458860345553}, "evt":{"counter": 211194, "Humid%": 78, "TempC": 23, "TempF": 73.4}},{"device_type": "ESP8266", "device_id": "DHT11-1", "evt_type": "status", "timestamp":{"$date": 1458860334701}, "evt":{"counter": 211183, "Humid%": 78, "TempC": 23, "TempF": 73.4}},{"device_type": "ESP8266", "device_id": "DHT11-1", "evt_type": "status", "timestamp":{"$date": 1458860323849}, "evt":{"counter": 211172, "Humid%": 78, "TempC": 23, "TempF": 73.4}},{"device_type": "ESP8266", "device_id": "DHT11-1", "evt_type": "status", "timestamp":{"$date": 1458860313037}, "evt":{"counter": 211162, "Humid%": 78, "TempC": 23, "TempF": 73.4}},{"device_type": "ESP8266", "device_id": "DHT11-1", "evt_type": "status", "timestamp":{"$date": 1458860302185}, "evt":{"counter": 211151, "Humid%": 78, "TempC": 23, "TempF": 73.4}},{"device_type": "ESP8266", "device_id": "DHT11-1", "evt_type": "status", "timestamp":{"$date": 1458860291333}, "evt":{"counter": 211140, "Humid%": 78, "TempC": 23, "TempF": 73.4}},{"device_type": "ESP8266", "device_id": "DHT11-1", "evt_type": "status", "timestamp":{"$date": 1458860280521}, "evt":{"counter": 211129, "Humid%": 78, "TempC": 23, "TempF": 73.4}},{"device_type": "ESP8266", "device_id": "DHT11-1", "evt_type": "status", "timestamp":{"$date": 1458860269669}, "evt":{"counter": 211118, "Humid%": 78, "TempC": 23, "TempF": 73.4}},{"device_type": "ESP8266", "device_id": "DHT11-1", "evt_type": "status", "timestamp":{"$date": 1458860258817}, "evt":{"counter": 211107, "Humid%": 78, "TempC": 23, "TempF": 73.4}},{"device_type": "ESP8266", "device_id": "DHT11-1", "evt_type": "status", "timestamp":{"$date": 1458860247965}, "evt":{"counter": 211097, "Humid%": 78, "TempC": 23, "TempF": 73.4}},{"device_type": "ESP8266", "device_id": "DHT11-1", "evt_type": "status", "timestamp":{"$date": 1458860237153}, "evt":{"counter": 211086, "Humid%": 78, "TempC": 23, "TempF": 73.4}},{"device_type": "ESP8266", "device_id": "DHT11-1", "evt_type": "status", "timestamp":{"$date": 1458860226301}, "evt":{"counter": 211075, "Humid%": 78, "TempC": 23, "TempF": 73.4}},{"device_type": "ESP8266", "device_id": "DHT11-1", "evt_type": "status", "timestamp":{"$date": 1458860215449}, "evt":{"counter": 211064, "Humid%": 78, "TempC": 23, "TempF": 73.4}},{"device_type": "ESP8266", "device_id": "DHT11-1", "evt_type": "status", "timestamp":{"$date": 1458860204637}, "evt":{"counter": 211053, "Humid%": 78, "TempC": 23, "TempF": 73.4}},{"device_type": "ESP8266", "device_id": "DHT11-1", "evt_type": "status", "timestamp":{"$date": 1458860193785}, "evt":{"counter": 211042, "Humid%": 78, "TempC": 23, "TempF": 73.4}},{"device_type": "ESP8266", "device_id": "DHT11-1", "evt_type": "status", "timestamp":{"$date": 1458860182933}, "evt":{"counter": 211032, "Humid%": 78, "TempC": 23, "TempF": 73.4}},{"device_type": "ESP8266", "device_id": "DHT11-1", "evt_type": "status", "timestamp":{"$date": 1458860172041}, "evt":{"counter": 211021, "Humid%": 78, "TempC": 23, "TempF": 73.4}},{"device_type": "ESP8266", "device_id": "DHT11-1", "evt_type": "status", "timestamp":{"$date": 1458860161229}, "evt":{"counter": 211010, "Humid%": 78, "TempC": 23, "TempF": 73.4}},{"device_type": "ESP8266", "device_id": "DHT11-1", "evt_type": "status", "timestamp":{"$date": 1458860150377}, "evt":{"counter": 210999, "Humid%": 78, "TempC": 23, "TempF": 73.4}},{"device_type": "ESP8266", "device_id": "DHT11-1", "evt_type": "status", "timestamp":{"$date": 1458860139525}, "evt":{"counter": 210988, "Humid%": 78, "TempC": 23, "TempF": 73.4}},{"device_type": "ESP8266", "device_id": "DHT11-1", "evt_type": "status", "timestamp":{"$date": 1458860128713}, "evt":{"counter": 210977, "Humid%": 77, "TempC": 23, "TempF": 73.4}},{"device_type": "ESP8266", "device_id": "DHT11-1", "evt_type": "status", "timestamp":{"$date": 1458860117861}, "evt":{"counter": 210966, "Humid%": 77, "TempC": 23, "TempF": 73.4}},{"device_type": "ESP8266", "device_id": "DHT11-1", "evt_type": "status", "timestamp":{"$date": 1458860107009}, "evt":{"counter": 210956, "Humid%": 77, "TempC": 23, "TempF": 73.4}},{"device_type": "ESP8266", "device_id": "DHT11-1", "evt_type": "status", "timestamp":{"$date": 1458860096153}, "evt":{"counter": 210945, "Humid%": 77, "TempC": 23, "TempF": 73.4}},{"device_type": "ESP8266", "device_id": "DHT11-1", "evt_type": "status", "timestamp":{"$date": 1458860085341}, "evt":{"counter": 210934, "Humid%": 77, "TempC": 23, "TempF": 73.4}},{"device_type": "ESP8266", "device_id": "DHT11-1", "evt_type": "status", "timestamp":{"$date": 1458860074489}, "evt":{"counter": 210923, "Humid%": 77, "TempC": 23, "TempF": 73.4}},{"device_type": "ESP8266", "device_id": "DHT11-1", "evt_type": "status", "timestamp":{"$date": 1458860063637}, "evt":{"counter": 210912, "Humid%": 77, "TempC": 23, "TempF": 73.4}},{"device_type": "ESP8266", "device_id": "DHT11-1", "evt_type": "status", "timestamp":{"$date": 1458860052821}, "evt":{"counter": 210901, "Humid%": 77, "TempC": 23, "TempF": 73.4}},{"device_type": "ESP8266", "device_id": "DHT11-1", "evt_type": "status", "timestamp":{"$date": 1458860041969}, "evt":{"counter": 210891, "Humid%": 77, "TempC": 23, "TempF": 73.4}},{"device_type": "ESP8266", "device_id": "DHT11-1", "evt_type": "status", "timestamp":{"$date": 1458860031117}, "evt":{"counter": 210880, "Humid%": 77, "TempC": 23, "TempF": 73.4}},{"device_type": "ESP8266", "device_id": "DHT11-1", "evt_type": "status", "timestamp":{"$date": 1458860020265}, "evt":{"counter": 210869, "Humid%": 77, "TempC": 23, "TempF": 73.4}},{"device_type": "ESP8266", "device_id": "DHT11-1", "evt_type": "status", "timestamp":{"$date": 1458860009453}, "evt":{"counter": 210858, "Humid%": 77, "TempC": 23, "TempF": 73.4}},{"device_type": "ESP8266", "device_id": "DHT11-1", "evt_type": "status", "timestamp":{"$date": 1458859998597}, "evt":{"counter": 210847, "Humid%": 77, "TempC": 23, "TempF": 73.4}},{"device_type": "ESP8266", "device_id": "DHT11-1", "evt_type": "status", "timestamp":{"$date": 1458859987745}, "evt":{"counter": 210836, "Humid%": 77, "TempC": 23, "TempF": 73.4}},{"device_type": "ESP8266", "device_id": "DHT11-1", "evt_type": "status", "timestamp":{"$date": 1458859976933}, "evt":{"counter": 210826, "Humid%": 77, "TempC": 23, "TempF": 73.4}},{"device_type": "ESP8266", "device_id": "DHT11-1", "evt_type": "status", "timestamp":{"$date": 1458859966081}, "evt":{"counter": 210815, "Humid%": 77, "TempC": 23, "TempF": 73.4}},{"device_type": "ESP8266", "device_id": "DHT11-1", "evt_type": "status", "timestamp":{"$date": 1458859955229}, "evt":{"counter": 210804, "Humid%": 77, "TempC": 23, "TempF": 73.4}},{"device_type": "ESP8266", "device_id": "DHT11-1", "evt_type": "status", "timestamp":{"$date": 1458859944377}, "evt":{"counter": 210793, "Humid%": 77, "TempC": 23, "TempF": 73.4}},{"device_type": "ESP8266", "device_id": "DHT11-1", "evt_type": "status", "timestamp":{"$date": 1458859933565}, "evt":{"counter": 210782, "Humid%": 77, "TempC": 23, "TempF": 73.4}},{"device_type": "ESP8266", "device_id": "DHT11-1", "evt_type": "status", "timestamp":{"$date": 1458859922713}, "evt":{"counter": 210771, "Humid%": 77, "TempC": 23, "TempF": 73.4}},{"device_type": "ESP8266", "device_id": "DHT11-1", "evt_type": "status", "timestamp":{"$date": 1458859911861}, "evt":{"counter": 210760, "Humid%": 77, "TempC": 23, "TempF": 73.4}},{"device_type": "ESP8266", "device_id": "DHT11-1", "evt_type": "status", "timestamp":{"$date": 1458859901049}, "evt":{"counter": 210750, "Humid%": 77, "TempC": 23, "TempF": 73.4}},{"device_type": "ESP8266", "device_id": "DHT11-1", "evt_type": "status", "timestamp":{"$date": 1458859890201}, "evt":{"counter": 210739, "Humid%": 77, "TempC": 23, "TempF": 73.4}},{"device_type": "ESP8266", "device_id": "DHT11-1", "evt_type": "status", "timestamp":{"$date": 1458859879349}, "evt":{"counter": 210728, "Humid%": 77, "TempC": 23, "TempF": 73.4}},{"device_type": "ESP8266", "device_id": "DHT11-1", "evt_type": "status", "timestamp":{"$date": 1458859868493}, "evt":{"counter": 210717, "Humid%": 77, "TempC": 23, "TempF": 73.4}},{"device_type": "ESP8266", "device_id": "DHT11-1", "evt_type": "status", "timestamp":{"$date": 1458859857681}, "evt":{"counter": 210706, "Humid%": 77, "TempC": 23, "TempF": 73.4}},{"device_type": "ESP8266", "device_id": "DHT11-1", "evt_type": "status", "timestamp":{"$date": 1458859846829}, "evt":{"counter": 210695, "Humid%": 77, "TempC": 23, "TempF": 73.4}},{"device_type": "ESP8266", "device_id": "DHT11-1", "evt_type": "status", "timestamp":{"$date": 1458859835973}, "evt":{"counter": 210685, "Humid%": 77, "TempC": 23, "TempF": 73.4}},{"device_type": "ESP8266", "device_id": "DHT11-1", "evt_type": "status", "timestamp":{"$date": 1458859825161}, "evt":{"counter": 210674, "Humid%": 77, "TempC": 23, "TempF": 73.4}},{"device_type": "ESP8266", "device_id": "DHT11-1", "evt_type": "status", "timestamp":{"$date": 1458859814309}, "evt":{"counter": 210663, "Humid%": 77, "TempC": 24, "TempF": 75.2}},{"device_type": "ESP8266", "device_id": "DHT11-1", "evt_type": "status", "timestamp":{"$date": 1458859803457}, "evt":{"counter": 210652, "Humid%": 76, "TempC": 23, "TempF": 73.4}},{"device_type": "ESP8266", "device_id": "DHT11-1", "evt_type": "status", "timestamp":{"$date": 1458859792605}, "evt":{"counter": 210641, "Humid%": 76, "TempC": 23, "TempF": 73.4}},{"device_type": "ESP8266", "device_id": "DHT11-1", "evt_type": "status", "timestamp":{"$date": 1458859781793}, "evt":{"counter": 210630, "Humid%": 76, "TempC": 23, "TempF": 73.4}},{"device_type": "ESP8266", "device_id": "DHT11-1", "evt_type": "status", "timestamp":{"$date": 1458859770937}, "evt":{"counter": 210620, "Humid%": 76, "TempC": 23, "TempF": 73.4}},{"device_type": "ESP8266", "device_id": "DHT11-1", "evt_type": "status", "timestamp":{"$date": 1458859760085}, "evt":{"counter": 210609, "Humid%": 76, "TempC": 23, "TempF": 73.4}},{"device_type": "ESP8266", "device_id": "DHT11-1", "evt_type": "status", "timestamp":{"$date": 1458859749273}, "evt":{"counter": 210598, "Humid%": 76, "TempC": 23, "TempF": 73.4}},{"device_type": "ESP8266", "device_id": "DHT11-1", "evt_type": "status", "timestamp":{"$date": 1458859738421}, "evt":{"counter": 210587, "Humid%": 76, "TempC": 23, "TempF": 73.4}},{"device_type": "ESP8266", "device_id": "DHT11-1", "evt_type": "status", "timestamp":{"$date": 1458859727569}, "evt":{"counter": 210576, "Humid%": 76, "TempC": 23, "TempF": 73.4}},{"device_type": "ESP8266", "device_id": "DHT11-1", "evt_type": "status", "timestamp":{"$date": 1458859716717}, "evt":{"counter": 210565, "Humid%": 76, "TempC": 23, "TempF": 73.4}},{"device_type": "ESP8266", "device_id": "DHT11-1", "evt_type": "status", "timestamp":{"$date": 1458859705905}, "evt":{"counter": 210554, "Humid%": 76, "TempC": 23, "TempF": 73.4}},{"device_type": "ESP8266", "device_id": "DHT11-1", "evt_type": "status", "timestamp":{"$date": 1458859695053}, "evt":{"counter": 210544, "Humid%": 76, "TempC": 23, "TempF": 73.4}},{"device_type": "ESP8266", "device_id": "DHT11-1", "evt_type": "status", "timestamp":{"$date": 1458859684201}, "evt":{"counter": 210533, "Humid%": 76, "TempC": 23, "TempF": 73.4}},{"device_type": "ESP8266", "device_id": "DHT11-1", "evt_type": "status", "timestamp":{"$date": 1458859673389}, "evt":{"counter": 210522, "Humid%": 76, "TempC": 23, "TempF": 73.4}},{"device_type": "ESP8266", "device_id": "DHT11-1", "evt_type": "status", "timestamp":{"$date": 1458859662537}, "evt":{"counter": 210511, "Humid%": 76, "TempC": 23, "TempF": 73.4}},{"device_type": "ESP8266", "device_id": "DHT11-1", "evt_type": "status", "timestamp":{"$date": 1458859651685}, "evt":{"counter": 210500, "Humid%": 76, "TempC": 23, "TempF": 73.4}},{"device_type": "ESP8266", "device_id": "DHT11-1", "evt_type": "status", "timestamp":{"$date": 1458859640833}, "evt":{"counter": 210489, "Humid%": 76, "TempC": 23, "TempF": 73.4}},{"device_type": "ESP8266", "device_id": "DHT11-1", "evt_type": "status", "timestamp":{"$date": 1458859630022}, "evt":{"counter": 210479, "Humid%": 76, "TempC": 23, "TempF": 73.4}},{"device_type": "ESP8266", "device_id": "DHT11-1", "evt_type": "status", "timestamp":{"$date": 1458859619165}, "evt":{"counter": 210468, "Humid%": 76, "TempC": 23, "TempF": 73.4}},{"device_type": "ESP8266", "device_id": "DHT11-1", "evt_type": "status", "timestamp":{"$date": 1458859608309}, "evt":{"counter": 210457, "Humid%": 76, "TempC": 23, "TempF": 73.4}},{"device_type": "ESP8266", "device_id": "DHT11-1", "evt_type": "status", "timestamp":{"$date": 1458859597497}, "evt":{"counter": 210446, "Humid%": 76, "TempC": 23, "TempF": 73.4}},{"device_type": "ESP8266", "device_id": "DHT11-1", "evt_type": "status", "timestamp":{"$date": 1458859586645}, "evt":{"counter": 210435, "Humid%": 76, "TempC": 23, "TempF": 73.4}},{"device_type": "ESP8266", "device_id": "DHT11-1", "evt_type": "status", "timestamp":{"$date": 1458859575793}, "evt":{"counter": 210424, "Humid%": 76, "TempC": 23, "TempF": 73.4}},{"device_type": "ESP8266", "device_id": "DHT11-1", "evt_type": "status", "timestamp":{"$date": 1458859564941}, "evt":{"counter": 210414, "Humid%": 76, "TempC": 23, "TempF": 73.4}},{"device_type": "ESP8266", "device_id": "DHT11-1", "evt_type": "status", "timestamp":{"$date": 1458859554125}, "evt":{"counter": 210403, "Humid%": 76, "TempC": 23, "TempF": 73.4}},{"device_type": "ESP8266", "device_id": "DHT11-1", "evt_type": "status", "timestamp":{"$date": 1458859543273}, "evt":{"counter": 210392, "Humid%": 76, "TempC": 23, "TempF": 73.4}},{"device_type": "ESP8266", "device_id": "DHT11-1", "evt_type": "status", "timestamp":{"$date": 1458859532421}, "evt":{"counter": 210381, "Humid%": 76, "TempC": 23, "TempF": 73.4}},{"device_type": "ESP8266", "device_id": "DHT11-1", "evt_type": "status", "timestamp":{"$date": 1458859521609}, "evt":{"counter": 210370, "Humid%": 76, "TempC": 23, "TempF": 73.4}},{"device_type": "ESP8266", "device_id": "DHT11-1", "evt_type": "status", "timestamp":{"$date": 1458859510757}, "evt":{"counter": 210359, "Humid%": 76, "TempC": 23, "TempF": 73.4}},{"device_type": "ESP8266", "device_id": "DHT11-1", "evt_type": "status", "timestamp":{"$date": 1458859499901}, "evt":{"counter": 210348, "Humid%": 76, "TempC": 23, "TempF": 73.4}},{"device_type": "ESP8266", "device_id": "DHT11-1", "evt_type": "status", "timestamp":{"$date": 1458859489025}, "evt":{"counter": 210338, "Humid%": 76, "TempC": 23, "TempF": 73.4}},{"device_type": "ESP8266", "device_id": "DHT11-1", "evt_type": "status", "timestamp":{"$date": 1458859478213}, "evt":{"counter": 210327, "Humid%": 76, "TempC": 24, "TempF": 75.2}},{"device_type": "ESP8266", "device_id": "DHT11-1", "evt_type": "status", "timestamp":{"$date": 1458859467361}, "evt":{"counter": 210316, "Humid%": 76, "TempC": 23, "TempF": 73.4}},{"device_type": "ESP8266", "device_id": "DHT11-1", "evt_type": "status", "timestamp":{"$date": 1458859456509}, "evt":{"counter": 210305, "Humid%": 76, "TempC": 23, "TempF": 73.4}},{"device_type": "ESP8266", "device_id": "DHT11-1", "evt_type": "status", "timestamp":{"$date": 1458859445697}, "evt":{"counter": 210294, "Humid%": 76, "TempC": 23, "TempF": 73.4}}]}


		/*
		 * [CALCUL] some interpreation and calculation of the data
		 */
		
		// easier to manipulate the data in a table of objects
		var events = data.events;
		var t = [];
		// variable used to provide average insights
		var t_hum = 0, t_tempC = 0, t_tempF = 0,max_hum = 0, min_hum = 0
			max_tempC = 0, min_TempC = 0, max_tempF = 0, min_tempF = 0;
		
		for (var event in events){
			t_hum += events[event].evt['Humid%'];	
			t_tempC +=  events[event].evt['TempC'];	
			t_tempF += events[event].evt['TempF'];
			
			max_hum = max_hum > events[event].evt['Humid%']? max_hum : events[event].evt['Humid%'];
			min_hum = max_hum;
			min_hum = min_hum < events[event].evt['Humid%']? min_hum : events[event].evt['Humid%'];
			
			max_tempC = max_tempC > events[event].evt['TempC']? max_tempC : events[event].evt['TempC'];
			min_tempC = max_tempC;
			min_tempC = min_tempC < events[event].evt['TempC']? min_tempC : events[event].evt['TempC'];

			max_tempF = max_tempF > events[event].evt['TempF']? max_tempF : events[event].evt['TempF'];
			min_tempF = max_tempF;
			min_tempF = min_tempF < events[event].evt['TempF']? min_tempF : events[event].evt['TempF'];
			
			// 
			t[event] = {};
			t[event].type = events[event].device_type;	
			t[event].id = events[event].device_id;	
			t[event].event_type = events[event].event_type;	
			t[event].timestamp = events[event].timestamp["$date"];	
			t[event].counter = events[event].evt['counter'];	
			t[event].humidity = events[event].evt['Humid%'];	
			t[event].tempC = events[event].evt['TempC'];	
			t[event].tempF = events[event].evt['TempF'];	
		}


		// averages sent to DOM
		$("#humidity .avg").text((t_hum/events.length).toFixed(2) + "%");
		$("#humidity .highest").text(max_hum + "%");
		$("#humidity .lowest").text(min_hum + "%");

		// $("#temperature .valC").text(t_tempC/events.length.toFixed(1)+"\u2103");
		$("#temperature .avg").text((t_tempF/events.length).toFixed(2) + "\u2109");
		$("#temperature .highest").text(max_tempF + "\u2109");
		$("#temperature .lowest").text(min_tempF + "\u2109");

		/*
		** Generate the datatable
		*/

	    $('#dataTable').DataTable( {
	        data: t,
	        "columnDefs": [
	        { "title": "type", "targets": 0 },
	        { "title": "id", "targets": 1 },
	        { "title": "timestamp", "targets": 2 },
	        { "title": "counter", "targets": 3 },
	        { "title": "humidity", "targets": 4 },
	        { "title": "tempC", "targets": 5 },
	        { "title": "tempF", "targets": 6 }
	        ],
	        columns: [
	            { "data": "type" },
	            { "data": "id" },
	            { "data": "timestamp" },
	            { "data": "counter" },
	            { "data": "humidity" },
	            { "data": "tempC" },
	            { "data": "tempF" }
	        ],
	        responsive: true
	    } );


	renderCurve(t);
	renderChartHumidity(t);
	renderComparativeCurve(t);


	$(".btn_tempC").click(function(){
		$("").hide();
		$("chart_celcius").show();
	})

	$(".btn_tempC").click(function(){
		$("").hide();
		$("chart_celcius").show();
	})

});



/*
** This function simply converts seconds into HH:MM:SS
*/ 
function secToTime(seconds){
	var hours = parseInt( seconds / 3600 ) % 24;
	var minutes = parseInt( seconds / 60 ) % 60;
	var seconds = seconds % 60;

	var result = (hours < 10 ? "0" + hours : hours) + ":" + (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds  < 10 ? "0" + seconds : seconds);
	datetime = new Date();
	datetime.setHours(hours)
	datetime.setMinutes(minutes);
	datetime.setSeconds(seconds);
	return datetime;
}



/**
 * Render chart area relative the Humidity %
 */
function renderChartHumidity(dataset){
	
	// some conventional margins over here for our svg
	var margin = {top: 20, right: 20, bottom: 40, left: 30},
	    width = 325 - margin.left - margin.right,
	    height = 250 - margin.top - margin.bottom;
	    

	//    
	// set axes + few value for readibility
	//
	var minX = 0, maxX = 0,
		minY = 0, maxY = 0;
	
	
	// 1.a set min(x) & max(x)
	minX = d3.min(dataset, function(d) { return d.counter; }); // smallest value of dimension looked at
	maxX = d3.max(dataset, function(d) { return d.counter; }); // biggest value of dimension looked at
	
	var x = d3.scale.linear().domain([minX, maxX]).range([0, width]);
	var xAxis = d3.svg.axis().scale(x).orient("bottom");

	minY = d3.min(dataset, function(d) { return d.humidity; }); // smallest value of dimension looked at
	maxY = d3.max(dataset, function(d) { return d.humidity; }); // biggest value of dimension looked at
	
	var y = d3.scale.linear().domain([70, 100]).range([height, 0]);
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
	    .datum(dataset)
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
  		.attr("dx", width)
  		.attr("dy", "0.7em")
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



/**
 * Render a curve graph that shows the peak of temperature
 */
function renderCurve(data){

	// some conventional margins over here for our svg
	var margin = {top: 20, right: 20, bottom: 40, left: 40},
	    width = 325 - margin.left - margin.right,
	    height = 250 - margin.top - margin.bottom;


	data.forEach(function(d) {
    	d.counter = d.counter/60;
  	});	


    minX = d3.min(data, function(d) { return d.counter/60; }); // smallest value of dimension looked at
	maxX = d3.max(data, function(d) { return d.counter/60; }); // biggest value of dimension looked at

    var x = d3.scale.linear().domain([minX, maxX]).range([0, width]);
    var xAxis = d3.svg.axis().scale(x).orient("bottom");

	var y = d3.scale.linear().range([height, 0]);
	var yAxis = d3.svg.axis().scale(y).orient("left");

	var line = d3.svg.line()
					.x(function(d) { return x(d.counter); })
    				.y(function(d) { return y(d.tempF); });

    var line2 = d3.svg.line()
					.x(function(d) { return x(d.counter); })
    				.y(function(d) { return y(d.tempC); });



    var chart = d3.select("#chart_temperature")
    			.attr("width", width + margin.left + margin.right)
    			.attr("height", height + margin.top + margin.bottom)
				.append("g")
				.attr("transform", "translate(" + margin.left + "," + margin.top + ")");


	x.domain(d3.extent(data, function(d) { return d.counter; }));
  	y.domain(d3.extent(data, function(d) { return d.tempF; }));


  	chart.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis)
      .selectAll("text")
	    .attr("transform", "rotate(-50)").attr("x", -20);

    chart.append("g")
		.attr("class", "y axis")
		.call(yAxis)
		.append("text")
			.attr("transform", "rotate(-90)")
			.attr("y", 6)
			.attr("dy", "1.21em")
			.style("text-anchor", "end")
			.text("Temp.");



    chart.append("path")
      .datum(data)
      .attr("class", "line tempF")
      .attr("d", line).style("stroke", "red").style("fill", "red");

}



/*
** Just to see if there is any 
** related patterns between these 2 dimensions
*/
function renderComparativeCurve(data){
	// some conventional margins over here for our svg
	var margin = {top: 20, right: 30, bottom: 40, left: 30},
	    width = 345 - margin.left - margin.right,
	    height = 250 - margin.top - margin.bottom;


	minY0 = d3.min(data, function(d) { return d.tempF; }); // smallest value of dimension looked at
	maxY0 = d3.max(data, function(d) { return d.tempF; }); // biggest value of dimension looked at

	minY1 = d3.min(data, function(d) { return d.humidity; }); // smallest value of dimension looked at
	maxY1 = d3.max(data, function(d) { return d.humidity; }); // biggest value of dimension looked at
	


	var x = d3.time.scale().range([0, width]).domain(d3.extent(data, function(d) { return d.timestamp; }));;
	var y0 = d3.scale.linear().domain([72, 76]).range([height, 0]);
	var y1 = d3.scale.linear().domain([75, 79]).range([height, 0]);



	//position of the axies
	var xAxis = d3.svg.axis().scale(x).orient("bottom").ticks(5);
	var yAxisLeft = d3.svg.axis().scale(y0).orient("left").ticks(5);
	var yAxisRight = d3.svg.axis().scale(y1).orient("right").ticks(5);

	var temperatureLine = d3.svg.line()
							.x(function(d) { return x(d.timestamp); })
							.y(function(d) { return y0(d.tempF); });

	var humidityLine = d3.svg.line()
    					.x(function(d) { return x(d.timestamp); })
    					.y(function(d) { return y1(d.humidity); });


    var chart = d3.select("#chart_comparative")
    			.attr("width", width + margin.left + margin.right)
    			.attr("height", height + margin.top + margin.bottom)
				.append("g")
				.attr("transform", "translate(" + margin.left + "," + margin.top + ")");


	// add axises 
	chart.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis)

    chart.append("g")
        .attr("class", "y axis")
        .style("fill", "red")
        .call(yAxisLeft);	

    chart.append("g")				
        .attr("class", "y axis")	
        .attr("transform", "translate(" + width + " ,0)")	
        .style("fill", "steelblue")		
        .call(yAxisRight);

	// add temperatureLine to the chart
    chart.append("path").attr("d", temperatureLine(data)).style("fill", "none").style("stroke", "red");
    chart.append("path").attr("d", humidityLine(data)).style("stroke", "steelblue").style("fill", "none");;

}
