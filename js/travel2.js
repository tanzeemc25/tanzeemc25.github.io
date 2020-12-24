// Callback occurs from Google API script async defer
function init() {

	// Create map
	var infoWindow = new google.maps.InfoWindow();
	var map = new google.maps.Map (
		document.getElementById('map'), 
		{ 
			zoom: 3,
			//center: {lat: 40.4289843454128, lng: -3.703575999075211}, // Madrid, Spain
			//center: {lat: 51.518731657437755, lng: -0.13044319655846356}, // London, UK 
			center: {lat: 45.250, lng: -76.080}, // Ottawa 
		}
	);

	// Add all markers and corresponding vials to the grid
	$.each(markers, function( i, v ) {		
		var newMarker = appendMarker(v, map, infoWindow);
	});
}


function appendMarker(m, map, iw) {

	var mTitle = m.title;
	var mCategory = m.category;
	const latLong = {lat: m.lat, lng: m.lng};

	const marker = new google.maps.Marker({
		position: latLong,
		label: mCategory,
		map: map,
		title: mTitle
	});

	marker.addListener('click', function() {

		// Map should pan to marker and zoom in
		map.panTo(marker.getPosition());

		// Close previously opened info window
		iw.close(); 
        
        // Update and re-open info window
        iw.setContent(mTitle);
        iw.open(map, marker);
	});

	return marker;
}