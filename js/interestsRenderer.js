$(function() {

	$.each(filters, function( i, v ) {
    	appendToFilters(v);
	});

    $.each(posters, function( i, v ) {
    	appendToGrid(v);
	});

	var $grid = $('.grid').isotope({
		itemSelector: '.poster'
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

});


function appendToGrid(v) {

	var fileName = v["file"];
	var filters = v["filters"];
	var link = v["link"] == "" ? "javascript:void(0)" : v["link"];
	var lbl = v["label"]

	// Poster size
	var posterSize = screen.width <= 768 ? screen.width/2 : 200;

	var posterDiv = 
		'<div class="poster ' + filters + '">' + 
			'<img src="../img/interests/' + fileName + '" class="posterImg" height="' + posterSize + '" width="' + posterSize + '">' +  
			'<div class="middle">' +
				'<div class="text">' + 
					'<a href="' + link + '" target="_blank">' + lbl + '</a>' + 
				'</div>' +
			'</div>' +
      	'</div>'
	;

	$("#poster-grid").append(posterDiv);
}


function appendToFilters(v) {

	var filter = v["filter"];
	var text = v["text"];

	var filterCheckBox = 
		'<label class="checkbox-inline">' + 
			'<input type="checkbox" name="filter" value="' + filter + '"> ' + text + 
		'</label>'
	;

	$("#filtersMain").append(filterCheckBox);
}