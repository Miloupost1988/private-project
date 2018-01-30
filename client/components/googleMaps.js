// const apiCall = () => {
//   fetch('https://api.instagram.com/oauth/authorize/?client_id=0a076b3cdee9489c8d39fb68584b65fc&redirect_uri=http://localhost8080/callback/&response_type=token')
//     .then((response) => {
//       console.log(response);
//     })
// };
//
// apiCall();
// // apiCall().then((response) => {
// //   let contentType = response.headers.get("content-type");
// //   console.log(contentType);
// // });
// //
// // const apiCall = () => {
// //   return $.getJSON(myRequest)
// //     .then(result => {
// //       console.log(result);
// //       debugger;
// //     });
// // };
//
// var map;
// function initMap() {
//   if (window.google) {
//     map = new window.google.maps.Map(document.getElementById('map'), {
//       center: {lat: 37.0179216, lng: -7.9749519},
//       zoom: 8,
//       mapTypeControl: false
//     });
//   } else {
//     alert('homo');
//   }
//   var infoWindow = new google.maps.InfoWindow({map: map});
//
//   // Try HTML5 geolocation.
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(function(position) {
//       var pos = {
//         lat: position.coords.latitude,
//         lng: position.coords.longitude
//       };
//
//       infoWindow.setPosition(pos);
//       infoWindow.setContent('Location found.');
//       map.setCenter(pos);
//     }, function() {
//       handleLocationError(true, infoWindow, map.getCenter());
//     });
//   } else {
//     // Browser doesn't support Geolocation
//     handleLocationError(false, infoWindow, map.getCenter());
//   }
// }
//
// function handleLocationError(browserHasGeolocation, infoWindow, pos) {
//   infoWindow.setPosition(pos);
//   infoWindow.setContent(browserHasGeolocation ?
//     'Error: The Geolocation service failed.' :
//     'Error: Your browser doesn\'t support geolocation.');
// }
//
// initMap();
