$(function() {

	// Page GET vars
	var $_GET = {};
	if (document.location.toString().indexOf('?') !== -1) {
		var query = document.location.toString().replace(/^.*?\?/, '').replace(/#.*$/, '').split('&');
		for (var i = 0, l = query.length; i < l; i++) {
		   var aux = decodeURIComponent(query[i]).split('=');
		   $_GET[aux[0]] = aux[1];
		}
	}

	// Routing based on GET var
	var routes = {
		"ac" : {"title": "Assassin's Creed", "compile" : true, compileFilter : "ac"},
		"bk" : {"title": "Books", "posters" : postersBook, "filters" : filtersBook},
		"co" : {"title": "Comics", "posters" : postersComic, "filters" : filtersComic},
		"db" : {"title": "Dragon Ball", "compile" : true, compileFilter : "db"},
		"dc" : {"title": "DC", "compile" : true, compileFilter : "dc"},
		"hi" : {"title": "History", "compile" : true, compileFilter : "history"},
		"ml" : {"title": "Marvel", "compile" : true, compileFilter : "marvel"},
		"mv" : {"title": "Movies", "posters" : postersMovie, "filters" : filtersTvMovie},
		"pk" : {"title": "Pokemon", "compile" : true, compileFilter : "pokemon"},
		"pr" : {"title": "Power Rangers", "compile" : true, compileFilter : "pr"},
		"sif" : {"title": "Song of Ice and Fire, A", "compile" : true, compileFilter : "asoiaf"},
		"sm" : {"title": "Super Mario", "compile" : true, compileFilter : "mario"},
		"sw" : {"title": "Star Wars", "compile" : true, compileFilter : "sw"},
		"tv" : {"title": "Tv", "posters" : postersTv, "filters" : filtersTvMovie},
		"vg" : {"title": "Video Games", "posters" : postersVideoGame, "filters" : [], "filterHide" : true},
	};

	var iType = $_GET['t'];
	if (iType in routes) {
		if (routes[iType].compile) {
			posters = compilePosters(routes[iType].compileFilter);
			filtersMain = filtersGroup;
		} else {
			posters = routes[iType].posters;
			filtersMain = routes[iType].filters;
			if (routes[iType].filterHide) {
				$(".filters").hide();
			}
		}
	} else {
		posters = [];
		filtersMain = [];
		$(".filters").hide();
	}


	// Add title
	$(".groupTitle").text(routes[iType].title);

	// Add filters
	$.each(filtersMain, function( i, v ) {
    	appendToFilters(v, "filtersMain");
	});

	// Add posters
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


window.mobileCheck = function() {
	let check = false;
	(function(a) {
		if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) 
			check = true;
	})(navigator.userAgent||navigator.vendor||window.opera);
	return check;
};


function appendToGrid(v) {

	var fileName = v["file"];
	var filters = v["filters"];
	var link = v["link"] == "" ? "javascript:void(0)" : v["link"];
	var lbl = v["label"]

	var gridWidthNum = window.mobileCheck() ? 3 : Math.ceil(window.innerWidth/(200 + 5));
	var gridTotalPad = 5 * (gridWidthNum + (window.mobileCheck() ? 1 : 2));
	var posterSize = ((window.innerWidth) - gridTotalPad)/gridWidthNum;
	var textSize = window.mobileCheck() ? "h6" : "h4";

	var graphic = '<img src="../img/interests/' + fileName + '" class="posterImg" height="' + posterSize + '" width="' + posterSize + '">';

	var posterDiv = 
		'<div class="poster ml-1 mt-1 ' + filters + '">' + 
			graphic +  
			'<div class="middle">' +
				'<div class="text">' + 
					'<a href="' + link + '" target="_blank" class="' + textSize + '">' + lbl + '</a>' + 
				'</div>' +
			'</div>' +
      	'</div>'
	;

	$("#poster-grid").append(posterDiv);
}


function appendToFilters(v, filterContainerId) {

	var filter = v["filter"];
	var text = v["text"];
	var textSize = window.mobileCheck() ? "h3" : "h4";

	var filterCheckBox = 
		'<label class="checkbox-inline ' + textSize + '">' + 
			'<input type="checkbox" name="filter" value="' + filter + '"> ' + text + 
		'</label>'
	;

	$("#" + filterContainerId).append(filterCheckBox);
}


function compilePosters(f) {
	var cPosters = [];
	var groups = [postersTv, postersMovie, postersComic, postersBook, postersVideoGame, postersPodcast, postersMisc];
	$.each( groups, function( gk, gv ) {
		$.each( gv, function( k, v ) {
			if ($.inArray(f, v.filters.split(" ")) != -1) {
				cPosters.push(v);
			};
		});
	});
	cPosters.sort(GetSortOrder("label"));
	return cPosters;
};


function GetSortOrder(prop) {    
    return function(a, b) {    
        if (a[prop] > b[prop]) {    
            return 1;    
        } else if (a[prop] < b[prop]) {    
            return -1;    
        }    
        return 0;    
    }    
}