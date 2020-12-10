

exports.GetToServer = function (url, callBack) {
	if (Titanium.Network.online) {
		let client = Titanium.Network.createHTTPClient();

		client.onerror = function (e) {
			//Ti.API.info("On Error Received text: " + this.responseText);
			try {
				Ti.API.info(JSON.parse(this.responseText));
			} catch (ex) {
				alert("We are unable to reach the servers! Please try again in sometime.");

			}
		};
		
		client.timeout = 5000;
		client.onload = function (e) {
			//Ti.API.info("OnLoad Received text: " + this.responseText);
			callBack(this.responseText);

		};
		client.open("GET", url);

		client.send();
		//Ti.API.info("Url : " + url + "\nParamters : " + JSON.stringify(parameters));
	} else {
		//if (!isAndroid) {
		alert("No Internet connection available.");
		//}

	}
};


exports.GetToServer_xml = function (url, callBack) {
	if (Titanium.Network.online) {
		let client = Titanium.Network.createHTTPClient();

		client.onerror = function (e) {
			require("loader_indica").removeLoader();
			//Ti.API.info("On Error Received text: " + this.responseText);
			try {
				Ti.API.info(JSON.parse(this.responseText));
			} catch (ex) {
				alert("We are unable to reach the servers! Please try again in sometime.");

			}
		};
		//client.setTimeout(5000);
		client.timeout = 5000;
		client.onload = function (e) {
			var xml = this.responseXML;
			var data = [];
			// blog posts are in nodes named "item"
			var items = xml.documentElement.getElementsByTagName("item");

			for (var i = 0; i < items.length; i++) {
				data.push({
					postTitle: items.item(i).getElementsByTagName("title").item(0).textContent,	
					postImage: items.item(i).getElementsByTagName("image").item(0).textContent,
					postLink: items.item(i).getElementsByTagName("link").item(0).textContent,
					postDesc: items.item(i).getElementsByTagName("description").item(0).textContent
				});
			}
			Ti.API.info("data length",data.length);
			callBack(data);

		};
		client.open("GET", url);

		client.send();
		//Ti.API.info("Url : " + url + "\nParamters : " + JSON.stringify(parameters));
	} else {
		//if (!isAndroid) {
		alert("No Internet connection available.");
		//}

	}
};

