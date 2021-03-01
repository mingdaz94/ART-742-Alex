let map;

function initMap() {
  // The location of YaleArchitecture
  const YaleArchitecture= { lat: 41.3087, lng: -72.9318 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    zoomControl: false,
    scaleControl: false,
    mapTypeControl: false,
    fullscreenControl: false,
    zoomControl: false,
    center: YaleArchitecture,
    mapId: '697a8f85be227c39'
  });

  map.addListener("click", (e) => {
    placeMarkerAndPanTo(e.latLng, map);
  });
  
  // The marker, positioned at YaleArchitecture
  const marker = new google.maps.Marker({
    position: YaleArchitecture,
    map: map,
  });
}

  function placeMarkerAndPanTo(latLng, map) {
    new google.maps.Marker({
      position: latLng,
      map: map,
    });
    map.panTo(latLng);
  }
  