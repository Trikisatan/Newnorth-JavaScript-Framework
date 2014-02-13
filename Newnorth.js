Newnorth = {
	Either: function(v1, v2) {
		return v1 === undefined ? v2 : v1;
	},
};
Newnorth.AJAX = {
	GetBinary: function(uri) {
		var request = new XMLHttpRequest();
		request.open("GET", uri, false);
		request.overrideMimeType("text/plain; charset=x-user-defined");
		request.send();

		if(request.status != 200 && request.status != 0) {
			throw "Unable to GET \"" + uri + "\".";
		}

		return request.response;
	},
	GetJSON: function(uri) {
		var request = new XMLHttpRequest();
		request.open("GET", uri, false);
		request.send();

		if(request.status != 200 && request.status != 0) {
			throw "Unable to GET \"" + uri + "\".";
		}

		return JSON.parse(request.responseText);
	},
	GetText: function(uri) {
		var request = new XMLHttpRequest();
		request.open("GET", uri, false);
		request.send();

		if(request.status != 200 && request.status != 0) {
			throw "Unable to GET \"" + uri + "\".";
		}

		return request.responseText;
	},
};
Newnorth.Event = function() {
	this.Listeners = [];
};
Newnorth.Event.prototype.Listen = function(object, method) {
	this.Listeners.push({
		object: object,
		method: method,
	});
};
Newnorth.Event.prototype.Invoke = function(invoker, data) {
	for(var i = 0; i < this.Listeners.length; ++i) {
		this.Listeners[i].object[this.Listeners[i].method](invoker, data);
	}
};