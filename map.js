let map;

function initMap() {

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    zoomControl: false,
    scaleControl: false,
    mapTypeControl: false,
    fullscreenControl: false,
    zoomControl: false,
    center: { lat: 41.3087, lng: -72.9318 },
    mapId: '697a8f85be227c39'
  });
  
  
  // randomly click map to create locations
  map.addListener("click", (e) => {
    placeMarkerAndPanTo(e.latLng, map);
  });

  const image =
    "https://d2w9rnfcy7mm78.cloudfront.net/10972416/original_d942326bd3edfa781d6373c84b5b8075.png?1614581393?bc=0";

  // randomly click map to create locations
  function placeMarkerAndPanTo(latLng, map) {
    new google.maps.Marker({
      position: latLng,
      map: map,
      icon: image,
    });
    map.panTo(latLng);
  }


  const contentString =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<div id="bodyContent">' +
    "<p1>This is Yale School of Architecture</p1>" +
    "</div>" +
    "</div>";
    const infowindow = new google.maps.InfoWindow({
      content: contentString,
      maxWidth: 200,
    });
    const marker = new google.maps.Marker({
      position: { lat: 41.3087, lng: -72.9318 },
      map,
      icon: image,
      animation: google.maps.Animation.DROP,
      title: "Yale School of Architecture",
    });
    marker.addListener("click", () => {
      infowindow.open(map, marker);
    });

}