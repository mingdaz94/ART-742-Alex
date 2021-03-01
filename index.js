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
    "https://freight.cargo.site/t/original/i/3dee9b7f13872c4d12e6fb8459f24cb65cfd02b41fa6c1224e6e8cf2333a8be2/favicon-32x32.png";
  const beachMarker = new google.maps.Marker({
    position: { lat: 41.3087, lng: -72.9318 },
    map,
    icon: image,
  });

  // randomly click map to create locations
  function placeMarkerAndPanTo(latLng, map) {
    new google.maps.Marker({
      position: latLng,
      map: map,
      icon: image,
    });
    map.panTo(latLng);
  }
}