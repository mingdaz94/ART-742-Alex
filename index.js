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
  
  // The marker, positioned at YaleArchitecture
  const iconBase =
  "https://developers.google.com/maps/documentation/javascript/examples/full/images/";
  const icons = {
  stair: {
    icon: iconBase + "favicon-16x16.png",
    },
  };
  const features = [
    {
      position: new google.maps.LatLng(41.3086, -72.9329), 
      type: "stair",
    },
    {
      position: new google.maps.LatLng(41.3087, -72.9318), 
      type: "stair",
    },
    ];

  // Create markers.
  for (let i = 0; i < features.length; i++) {
    const marker = new google.maps.Marker({
      position: features[i].position,
      icon: icons[features[i].type].icon,
      map: map,
    });

  function placeMarkerAndPanTo(latLng, map) {
    new google.maps.Marker({
      position: latLng,
      map: map,
    });
    map.panTo(latLng);
  }
}
}