
var map;
var InforObj = [];
var centerCords = {
                 lat: 41.3087,
                 lng: -72.9318
             };
             var markersOnMap = [{
                     placeName: "I had lunch with Alex on the stair last summer",
                     LatLng: [{
                         lat: 41.3087,
                         lng: -72.9318
                     }]
                 },
                 {
                     placeName: "I sat on the stair and waited for my girlfriend to come out of the gallery",
                     LatLng: [{
                         lat: 41.308242,
                         lng: -72.930887
                     }]
                 },
                 {
                     placeName: "Australia (Canberra)",
                     LatLng: [{
                         lat: 41.307378,
                         lng: -72.928732
                     }]
                 },
                 {
                     placeName: "Australia (Gold Coast)",
                     LatLng: [{
                         lat: 41.308325,
                         lng: -72.927919
                     }]
                 },
                 {
                     placeName: "Australia (Perth)",
                     LatLng: [{
                         lat: -31.951994,
                         lng: 475.858081
                     }]
                 }
             ];
     
             window.onload = function () {
                 initMap();
             };
     
             function addMarker() {
             const image = {
             url:
             "https://d2w9rnfcy7mm78.cloudfront.net/10972416/original_d942326bd3edfa781d6373c84b5b8075.png?1614581393?bc=0",
            };

   
                 for (var i = 0; i < markersOnMap.length; i++) {
                     var contentString = '<div id="content"><p1>' + markersOnMap[i].placeName +
                         '</p1></div>';
     
                     const marker = new google.maps.Marker({
                         position: markersOnMap[i].LatLng[0],
                         icon: image,
                         map: map
                         
                     });
     
                     const infowindow = new google.maps.InfoWindow({
                         content: contentString,
                         maxWidth: 200
                     });
     
                     marker.addListener('click', function () {
                         closeOtherInfo();
                         infowindow.open(marker.get('map'), marker);
                         InforObj[0] = infowindow;
                     });
                 }
             }
     
             function closeOtherInfo() {
                 if (InforObj.length > 0) {
                     InforObj[0].set("marker", null);
                     /* and close it */
                     InforObj[0].close();
                     /* blank the array */
                     InforObj.length = 0;
                 }
             }
     
             function initMap() {
                 map = new google.maps.Map(document.getElementById('map'), {
                  zoom: 15,
                  center: centerCords,
                  zoom: 10,
                  zoomControl: false,
                  scaleControl: false,
                  mapTypeControl: false,
                  fullscreenControl: false,
                  zoomControl: false,
                  mapId: '697a8f85be227c39',
                 });
                 addMarker();
             }