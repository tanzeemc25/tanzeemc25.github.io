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
			zoom: 5,
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
		$('#placeContainer').collapse('hide');
	});

	// Add filters
	$.each(filtersRegion, function( i, v ) {
    	appendToFilters(v, "filtersRegion");
	});

	$.each(filtersCategories, function( i, v ) {
    	appendToFilters(v, "filtersCategories");
	});

	// Configure isotope
	var $grid = $('#placelist').isotope({
		itemSelector: '.place-card',
		filter: '*'
	});

	$('input:checkbox').change(function() {

		var isoFilter = "";

		$( "input:checkbox" ).each(function() {
			if(this.checked) {
				isoFilter += "." + $(this).val();
	        }
		});

		$grid.isotope({ filter: isoFilter });
	});	
	
	$('.collapse').on('shown.bs.collapse hidden.bs.collapse', function(){
		$('#placelist').isotope('layout');
	 });

}


window.mobileCheck = function() {
	let check = false;
	(function(a) {
		if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) 
			check = true;
	})(navigator.userAgent||navigator.vendor||window.opera);
	return check;
};


function appendList(m) {

	var markup = 
		'<div id="place' + currentId + '" class="place-card col-xl-2 col-lg-3 col-md-4 col-sm-6 mt-2 pl-1 pr-1 ' + m.filters + ' category-' + m.category + '">' + 
			'<div class="card p-2">' +
				m.title + '<hr class="m-1">' + m.date +
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


function appendToFilters(v, filterContainerId) {

	var filter = v["filter"];
	var text = v["text"];
	var textSize = window.mobileCheck() ? "h1" : "h5";

	var filterCheckBox = 
		'<label class="mr-3 mb-2 ' + textSize + '">' + 
			'<input type="checkbox" name="filter" value="' + filter + '"> ' + text + 
		'</label>'
	;

	$("#" + filterContainerId).append(filterCheckBox);
}