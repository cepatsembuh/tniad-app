document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
	console.log("navigator.geolocation works well");
}

var onSuccess = function(position) {
  var latitude = position.coords.latitude,
			longitude = position.coords.longitude;
	
	var http = new XMLHttpRequest();
	var url = "";
	var params = "latitude=" + latitude + "&longitude=" + longitude;
	http.open("POST", url, true);

	//Send the proper header information along with the request
	http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

	http.onreadystatechange = function() {//Call a function when the state changes.
			if(http.readyState == 4 && http.status == 200) {
					//alert(http.responseText);
			}
	}
	http.send(params);
};

// onError Callback receives a PositionError object
//
function onError(error) {
	//alert(error.message + '\n');
}

navigator.geolocation.getCurrentPosition(onSuccess, onError);