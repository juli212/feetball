var map;
var nycJson = 'courts.json';


function initMap() {
	var nyc = {lat: 40.704804, lng: -73.961693}
	var markers = []

	const mapOptions = {
		zoom: 10,
		center: nyc,
		mapTypeControl: false,
		streetViewControl: false,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		fullscreenControl: false,
	}
	var map = new google.maps.Map(document.getElementById('map'), mapOptions);

	loadMarkers(map)
}


function loadMarkers(map) {
	getCourts(map);
}

function getCourts(map) {
	var courts = []
	$.ajax({
    url: 'courts.json',
    dataType: "json"
  }).done(function(response) {
    courts = response
		$.each(courts, function(key, court) {
			if (court.lat === null || court.lon === null) return;
			var latLng = new google.maps.LatLng(court.lat, court.lon)

			var marker = new google.maps.Marker({
				position: latLng,
				map: map,
				icon: 'blueMarker.png',
				title: 'feetball court'
			})

			var infoWindow = new google.maps.InfoWindow();
			bindInfoWindow(marker, map, court, infoWindow);
		})
  })

  return courts;
}

// function boundsChanged(map, courts) {
// 	map.addListener('idle', function(courts){
// 		debugger;
// 	})
// 	debugger;
// 	// map.addListener
// }

function bindInfoWindow(marker, map, court, infoWindow) {
	google.maps.event.addListener(marker, 'click', function() {
		infoWindow.setContent("<div><h4>" + court.Name + "</h4><p>" + court.Location + "</p><p>" + court.Num_of_Courts + " courts here!</p></div>");
		infoWindow.open(map, marker);
	})
}