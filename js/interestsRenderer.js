$(function() {

	$.each(interests, function( i, v ) {
    	appendToGrid(v, "#main-container-row");
		appendToHiddenDescriptions(v);
	});

	$.each(interests2, function( i, v ) {
    	appendToGrid(v, "#main-container-row-2");
		appendToHiddenDescriptions(v);
	});

	$.each(interestsItems, function( i, v ) {
    	fillInHiddenDescriptions(v);
	});

	$(".portfolio-item").on("click", function(event){
		
		var sq = $(this).data("sq");
		var hdList = $(`#list-${sq}`);

		$("#description-row").html(hdList.html());
	});
});


function appendToGrid(interest, containerId) {

	var lbl = interest["label"];
	var image = interest["image"];
	
	var div = 
	`<div class="col-xxl-2 col-lg-3 col-md-4 col-sm-6 p-1">
		<a class="portfolio-item" href="#description-row" data-sq="${image}">
			<div class="caption">
				<div class="caption-content caption-content-small">
					<div class="h2">${lbl}</div>
				</div>
			</div>
			<img class="img-fluid" src="../assets/img/interests/${image}.jpg" />
		</a>
	</div>`;

	$(containerId).append(div);
}


function appendToHiddenDescriptions(interest) {

	var image = interest["image"];

	var div = 
	`<div id="items-${image}">
		<ul id="list-${image}">
		</ul>
	</div>`;

	$("#hidden-descriptions").append(div);
}


function fillInHiddenDescriptions(item) {

	var sq = item["sq"];
	var year = item["year"];
	var mtype = item["mtype"];
	var label = item["label"];
	var link = item["link"];

	var listItem = link == ""
			? `<li>${year} - ${label} | ${mtype}</li>`
			: `<li>${year} - <a href="${link}" target="_blank">${label}</a> | ${mtype}</li>`;

	var hdList = $(`#list-${sq}`);
	hdList.append(listItem);
}