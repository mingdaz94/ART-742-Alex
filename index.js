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
  
  new google.maps.Marker({
    position: { lat: 41.3087, lng: -72.9318 },
    map,
  });

  const iconBase =
  "https://developers.google.com/maps/documentation/javascript/examples/full/images/";
  const icons = {
  stair: {
    icon: iconBase + "favicon-16x16.png",
    },
  };

  // Create markers.
  for (let i = 0; i < features.length; i++) {
    const marker = new google.maps.Marker({
      position: features[i].position,
      icon: icons[features[i].type].icon,
      map: map,
    });

  // randomly click map to create locations
  function placeMarkerAndPanTo(latLng, map) {
    new google.maps.Marker({
      position: latLng,
      map: map,
    });
    map.panTo(latLng);
  }
}
}