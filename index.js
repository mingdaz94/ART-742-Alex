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
    "https://photos.google.com/album/AF1QipNayV-2hLYML_WJFQ6pNCk02mKK___OUsuc_Lz7/photo/AF1QipM8rLzs43t0LCKnGP4LuMDG550fc52Me6gv71aTtps://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png";
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