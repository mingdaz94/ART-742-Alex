// Initialize and add the map
function initMap() {
  // The location of YaleArchitecture
  const YaleArchitecture= { lat: 41.3087, lng: -72.9318 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: YaleArchitecture,
    mapId: '697a8f85be227c39'
    fullscreenControl: false,
    zoomControl: false,
    mapTypeControl: false,
    streetViewControl: false
  });
  // The marker, positioned at YaleArchitecture
  const marker = new google.maps.Marker({
    position: YaleArchitecture,
    map: map,
  });
}