

function initMap() {
  let pos = {lat: -29.83455582358241, lng: 31.00989884136558};

  let options = {
    center: pos,
    zoom:14,
  };


  let map = new google.maps.Map(document.getElementById("map"), options);

  let marker = new google.maps.Marker({
    position: pos,
    map: map,
    icon: "Source/Buyafuti-map.svg"
  });

  let infoWindow = new google.maps.InfoWindow({
    content: '<h1>Buyafuthi Activewear</h1>'
  });

  marker.addListener('click', function(){
    infoWindow.open(map, marker);
  });
}
