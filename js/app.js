// Globs
arrMarkers = {};
currentId = 0;

// Callback from Google API script async defer
function init() {

	// Add all filters to the left control
	$.each(filters, function( i, v ) {
    	appendFilters(v);
	});

	// Create once - An info window for markers
	var infoWindow = new google.maps.InfoWindow();

	// Create Google Map
	var map = new google.maps.Map (
		document.getElementById('map'), 
		{ 
			zoom: 3,
			center: {lat: 45.250, lng: -76.080} // Ottawa 
		}
	);

	// Add all markers and corresponding vials to the grid
	$.each(markers, function( i, v ) {

		appendVial(v);
		var newMarker = appendMarker(v, map, infoWindow);

		arrMarkers["vial" + currentId] = newMarker;
		currentId += 1;
	});

	// Isotope start
	var $grid = $('.grid').isotope({
		itemSelector: '.vial-box'
	});

	// Checkbox events update the isotope grid
	$('input:checkbox').change(function() {

		var isoFilter = "";

		$( "input:checkbox" ).each(function() {
			if(this.checked) {
				isoFilter += "." + $(this).val();
	        }
		});

		$grid.isotope({ filter: isoFilter });
    });

    // Preview vial when moused over
	$( ".vial-box img" ).click(function() {

        // Undo prior mouseovers
		$("#vial-preview").empty();
		$( ".vial-box img" ).css('opacity', '1.0');

		// Update preview
		$(this).clone().width(350).height(350).appendTo("#vial-preview");
		$(this).css('opacity', '0.4');

		// Trigger and pan to corresponding marker
		var marker = arrMarkers[$(this).attr("id")];
		new google.maps.event.trigger( marker, 'click' );
	});

	// Trigger default mouseover on load
	$(".vial-box img:first").trigger('click');
}


function appendFilters(v) {

	var filterGroup = v["type"];
	var filter = v["filter"];
	var text = v["text"];

	var filterCheckBox = 
		'<input type="checkbox" name="filter" value="' + filter + '"> ' + text + '<br>'
	;

	$("#" + filterGroup).append(filterCheckBox);
}


function appendMarker(m, map, iw) {

	const latLong = {lat: m[1], lng: m[2]};
	const marker = new google.maps.Marker({
		position: latLong,
		label: "S",
		map: map,
		title: m[0]
	});

	marker.addListener('click', function() {

		// Map should pan to marker and zoom in
		map.panTo(marker.getPosition());

		// Close previously opened info window
		iw.close(); 
        
        // Update and re-open info window
        iw.setContent(m[0]);
        iw.open(map, marker);
	});

	return marker;
}


function appendVial(m) {

	const imgFile = m[3];
	const filters = m[4];

	var vialDiv = 
		'<div class="vial-box ' + filters + '">' + 
			'<img id="vial' + currentId + '" src="./img/vials/' + imgFile + '" height="75" width="75">' + 
		'</div>'
	;

	$("#vial-grid").append(vialDiv);
}