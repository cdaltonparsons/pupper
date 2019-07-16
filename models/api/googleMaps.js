// var myPosition;
require('dotenv').config();
var code = require('idExports.js');
var Google = require('node-GoogleMaps-api');
var google = new Google(code.google);
var nearYou;

// function initMap() {
//     directionsService = new google.maps.DirectionsService;
//     directionsDisplay = new google.maps.DirectionsRenderer({
//         draggable: false,
//         panel: //this should be an onclick

// https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyANcpF3ljncq7HI0WhhH5umglch9De9Kec 


//     });
//     var map = new google.maps.Map(document.getElementById('map'), {
//         zoom: 10,
//         center: { lat: 39.7392, lng: -104.9903 }
//     });

//     // var geocoder = new google.maps.Geocoder;
//     var infoWindow = new google.maps.InfoWindow;
//     directionsDisplay.setMap(map);

//     infoWindow = new google.maps.InfoWindow;

//     // Try HTML5 geolocation.
//     if (navigator.geolocation) {

//         navigator.geolocation.getCurrentPosition(function (position) {
//             position = {
//                 lat: position.coords.latitude,
//                 lng: position.coords.longitude

//             };
//             myPosition = position
//             console.log(position.lat);
//             console.log(position.lng);
//             infoWindow.setPosition(position);
//             infoWindow.setContent("We're watching you.");
//             infoWindow.open(map);
//             map.setCenter(position);

//             console.log(position);

//             // var onChangeHandler = function () {
//             //     calculateAndDisplayRoute(directionsService, directionsDisplay);
//             // };

//             // // geocodeLatLng(geocoder, map, infoWindow);
//             // onChangeHandler();
//         }, function () {
//             handleLocationError(true, infoWindow, map.getCenter());
//         });
//     } else {
//         // Browser doesn't support Geolocation
//         handleLocationError(false, infoWindow, map.getCenter());
//     }

//     function handleLocationError(browserHasGeolocation, infoWindow, position) {
//         infoWindow.setPosition(position);
//         infoWindow.setContent(browserHasGeolocation ?
//             'Error: The Geolocation service failed.' :
//             'Error: Your browser doesn\'t support geolocation.');
//         infoWindow.open(map);
//     }


// }

// // console.log("standalone lat: ", myPosition.lat);
// // console.log("stnadalone lng: ", myPosition.lng);

// function calculateAndDisplayRoute(directionsService, directionsDisplay) {
//     console.log("Address:" + address)
//     console.log(myPosition.lat, myPosition.lng)
//     directionsService.route({
//         origin: { lat: myPosition.lat, lng: myPosition.lng },
//         destination: address,
//         travelMode: travelModes
//     }, function (response, status) {
//         if (status === 'OK') {
//             directionsDisplay.setDirections(response);
//         } else {
//             window.alert('Directions request failed due to ' + status);
//         }
//         computeTotalDistance(directionsDisplay.getDirections());
//     })
// }

// function computeTotalDistance(result) {
//     var total = 0;
//     var myroute = result.routes[0];
//     for (var i = 0; i < myroute.legs.length; i++) {
//       total += myroute.legs[i].distance.value;
//     }
//     total = Math.round(total / 1609);
//     $("#distance").text("Total distance: " + total + "mi");
//   }