let map;

function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    zoomControl: false,
    scaleControl: false,
    mapTypeControl: false,
    fullscreenControl: false,
    zoomControl: false,
    center: { lat: 41.3087, lng: -72.9318 },
    mapId: '697a8f85be227c39',
  });
  setMarkers(map);
}
// Data for the markers consisting of a name, a LatLng and a zIndex for the
// order in which these markers should display on top of each other.
const beaches = [
  ["ysoa", 41.3087, -72.9318],
  ["Coogee Beach", 41.308242, -72.930887],
  ["Cronulla Beach", 41.307378, -72.928732],
  ["Manly Beach", -33.80010128657071, 151.28747820854187],
  ["Maroubra Beach", -33.950198, 151.259302],
  ["s Beach", 41.308325, -72.927919],
];

function setMarkers(map) {
  const image = {
    url:
      "https://d2w9rnfcy7mm78.cloudfront.net/10972416/original_d942326bd3edfa781d6373c84b5b8075.png?1614581393?bc=0",
  };
  // Shapes define the clickable region of the icon. The type defines an HTML
  // <area> element 'poly' which traces out a polygon as a series of X,Y points.
  // The final coordinate closes the poly by connecting to the first coordinate.
  const shape = {
    coords: [1, 1, 1, 20, 18, 20, 18, 1],
    type: "poly",
  };

  for (let i = 0; i < beaches.length; i++) {
    const beach = beaches[i];
    new google.maps.Marker({
      position: { lat: beach[1], lng: beach[2] },
      map,
      icon: image,
      shape: shape,
      title: beach[0],
      zIndex: beach[3],
    });
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
    title: "Yale School of Architecture",
    });

    marker.addListener("click", () => {
      infowindow.open(map, marker);
    });
    
    
  // randomly click map to create locations
  map.addListener("click", (e) => {
    placeMarkerAndPanTo(e.latLng, map);
  });
  
  function placeMarkerAndPanTo(latLng, map) {
    new google.maps.Marker({
      position: latLng,
      map: map,
      icon: image,
    });
    map.panTo(latLng);
  }


}