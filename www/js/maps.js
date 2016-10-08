'use strict';

// Firebase Config
var config = {
  apiKey: "fFRaVtFRskcRYpFdbbLC6NaGz8JSEpGPggQrudgF",
  authDomain: "cepatsembuh.firebaseapp.com",
  databaseURL: "https://cepatsembuh.firebaseio.com",
};
firebase.initializeApp(config);

var ref = firebase.database().ref();
var faskes = ref.child('rs-tni');
var nama_faskes = faskes.child('contoh');
var panic = faskes.child('darurat')
var pasien = faskes.child('pasien');

function sendData(latitude, longtitude) {
	panic.push().set({
		latitude: latitude,
		longtitude: longtitude
	})
	
	alert("Laporan anda sudah terkirim");
}

navigator.geolocation.getCurrentPosition(geolocationSuccess,
                                         [geolocationError],
                                         [geolocationOptions]);

function action() {	
	'use strict';
//		var onSucces = function(position){
//			var latitude = position.coords.latitude,
//					longtitude = position.coords.longitude;
//		}
//		sendData(pos.lat, post.lng);
		// onSuccess Callback
// This method accepts a Position object, which contains the
// current GPS coordinates
//
var onSuccess = function(position) {
    alert('Latitude: '          + position.coords.latitude          + '\n' +
          'Longitude: '         + position.coords.longitude         + '\n' +
          'Altitude: '          + position.coords.altitude          + '\n' +
          'Accuracy: '          + position.coords.accuracy          + '\n' +
          'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
          'Heading: '           + position.coords.heading           + '\n' +
          'Speed: '             + position.coords.speed             + '\n' +
          'Timestamp: '         + position.timestamp                + '\n');
};

// onError Callback receives a PositionError object
//
function onError(error) {
    alert('code: '    + error.code    + '\n' +
          'message: ' + error.message + '\n');
}

navigator.geolocation.getCurrentPosition(onSuccess, onError);
	}