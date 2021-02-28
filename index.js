// Initialize and add the map
function initMap() {
  // The location of YaleArchitecture
  const YaleArchitecture= { lat: 41.3087, lng: 72.9318 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 8,
    center: YaleArchitecture,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: YaleArchitecture,
    map: map,
  });
}