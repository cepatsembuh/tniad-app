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

var map = new google.maps.Map(document.getElementById('map'), {
	center: {lat: -34.397, lng: 150.644},
	zoom: 6
});
var infoWindow = new google.maps.InfoWindow({map: map});
navigator.geolocation.getCurrentPosition(function(position) {
	var pos = {
		lat: position.coords.latitude,
		lng: position.coords.longitude
	};
	
	sendData(pos.lat, post.lng);
}


// Note: This example requires that you consent to location sharing when
// prompted by your browser. If you see the error "The Geolocation service
// failed.", it means you probably did not give permission for the browser to
// locate you.

//function initMap() {
//	var map = new google.maps.Map(document.getElementById('map'), {
//		center: {lat: -34.397, lng: 150.644},
//		zoom: 6
//	});
//	var infoWindow = new google.maps.InfoWindow({map: map});
//
//	// Try HTML5 geolocation.
//	if (navigator.geolocation) {
//		navigator.geolocation.getCurrentPosition(function(position) {
//			var pos = {
//				lat: position.coords.latitude,
//				lng: position.coords.longitude
//			};
//
//			infoWindow.setPosition(pos);
//			infoWindow.setContent('Location found.');
//			map.setCenter(pos);
//		}, function() {
//			handleLocationError(true, infoWindow, map.getCenter());
//		});
//	} else {
//		// Browser doesn't support Geolocation
//		handleLocationError(false, infoWindow, map.getCenter());
//	}
//}
//
//function handleLocationError(browserHasGeolocation, infoWindow, pos) {
//	infoWindow.setPosition(pos);
//	infoWindow.setContent(browserHasGeolocation ?
//												'Error: The Geolocation service failed.' :
//												'Error: Your browser doesn\'t support geolocation.');
}