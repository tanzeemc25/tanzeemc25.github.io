// Global vars to map place items to their correpsonding markers
arrMarkers = {};
currentId = 0;

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

	// Add all items and plot their markers
	$.each(markers, function( i, v ) {		

		var newMarker = appendMarker(v, map, infoWindow);
		appendList(v);

		arrMarkers["place" + currentId] = newMarker;
		currentId += 1;
	});

	// List item click - trigger and pan to corresponding marker
	$( ".place-card" ).click(function() {
		var marker = arrMarkers[$(this).attr("id")];
		new google.maps.event.trigger( marker, 'click' );
		$('#placelist').collapse('hide');
	});
}


function appendList(m) {

	var markup = 
		'<div id="place' + currentId + '" class="place-card col-xl-2 col-lg-3 col-md-4 col-sm-6 mt-2 pl-1 pr-1">' + 
			'<div class="card h-100 p-2">' +
				m.title + "<br>" + m.date +
			'</div>' +
		'</div>';

	$("#placelist").append(markup);
}


function appendMarker(m, map, iw) {

	var mTitle = m.title;
	const latLong = {lat: m.lat, lng: m.lng};
	var iconUrl = categories[m.category].icon;

	const marker = new google.maps.Marker({
		position: latLong,
		map: map,
		title: mTitle,
		icon: iconUrl,
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