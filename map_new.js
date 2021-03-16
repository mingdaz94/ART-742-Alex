
var map;
var InforObj = [];
var centerCords = {
                 lat: 41.3087,
                 lng: -72.9318
             };
             var markersOnMap = [{
                  placeName: "I had lunch with Alex on the stair last summer",
                  LatLng: [{lat: 41.3087, lng: -72.9318}]
                 },
                 {
                  placeName: "I sat on the stair and waited for my girlfriend to come out of the gallery",
                  LatLng: [{lat: 41.308242, lng: -72.930887}]
                 },
                 {
                  placeName: "Enjoying the sunlight on this stair",
                  LatLng: [{lat: 41.308078, lng: -72.930481}]
                 },
                 {
                  placeName: "Wondering who will use this stair",
                  LatLng: [{lat: 41.305399, lng:  -72.928680}]
                 },
                 {
                  placeName: "David fell down on this stair on July 19 2020",
                  LatLng: [{lat: 41.316690, lng:  -72.927227}]
                 },
                 {
                  placeName: "I saw a man sat on the stair and smoked with a sad face",
                  LatLng: [{lat: 41.306658, lng: -72.931093}]
                 },
                 {LatLng: [{lat: 41.307101, lng: -72.932023}]},
                 {LatLng: [{lat: 41.306931, lng: -72.931583}]},
                 {LatLng: [{lat: 41.306545, lng: -72.930739}]},

                 {LatLng: [{lat: 41.316212, lng: -72.926303}]},
                 {LatLng: [{lat: 41.316519, lng: -72.926516}]},
                 {LatLng: [{lat: 41.316724, lng: -72.926895}]},
                 {LatLng: [{lat: 41.317074, lng: -72.926788}]},
                 {LatLng: [{lat: 41.317268, lng: -72.927077}]},
                 {LatLng: [{lat: 41.317536, lng: -72.925987}]},
                 {LatLng: [{lat: 41.318007, lng: -72.925847}]},
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
                  zoomControl: false,
                  scaleControl: false,
                  mapTypeControl: false,
                  fullscreenControl: false,
                  zoomControl: false,
                  mapId: '697a8f85be227c39',
                 });
                 addMarker();
             }