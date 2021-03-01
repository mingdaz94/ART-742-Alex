let map;

function initMap() {

  const YaleArchitecture= { lat: 41.3087, lng: -72.9318 };

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
  
  // The marker, positioned at YaleArchitecture
  const marker = new google.maps.Marker({
    position: YaleArchitecture,
    map: map,
  });

  const drawingManager = new google.maps.drawing.DrawingManager({
    drawingMode: google.maps.drawing.OverlayType.MARKER,
    drawingControl: true,
    drawingControlOptions: {
      position: google.maps.ControlPosition.TOP_CENTER,
      drawingModes: [
        google.maps.drawing.OverlayType.MARKER,
      ],
    },
    markerOptions: {
      icon:
        "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
    },
  });
  drawingManager.setMap(map);
}