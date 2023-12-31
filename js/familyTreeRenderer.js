document.getElementById("personCount").innerHTML = ftExport.length;

create(ftExport, false);

/**
 * Create the main chart.
 * 
 * @param	data		People data
 * @param	useCard		Whether to use the expanded info card feature.
 */
function create(data, useCard) {
	
	// Chart - Set & customizations
	const f3Chart = f3.createChart('#FamilyChart', data)
		.setTransitionTime(1000)
		.setCardXSpacing(130)
		.setCardYSpacing(180)
		.setSingleParentEmptyCard(false)
		.setShowSiblingsOfMain(true)
		.setOrientationVertical()
		.setSortChildrenFunction((a, b) => a.data['sibOrder'] === b.data['sibOrder'] ? 0 : a.data['sibOrder'] > b.data['sibOrder'] ? 1 : -1)
		.setProgenyDepth(3)
		.setAncestryDepth(2)

	// Person Info - Set & customizations
	const f3Card = f3Chart.setCard(f3.CardHtml)
		.setCardDim({})
		.setMiniTree(false)
		.setStyle('imageCircle')
		.setOnHoverPathToMain()

		.setOnCardUpdate(function(d) {
			const card_label = this.querySelector('.card-label');
			const otherNameDisplay = d.data.data["Other Name(s)"] == "" ? "" : `(${d.data.data["Other Name(s)"]})`;
			card_label.innerHTML = `
				<span style="font-size: 14px;">
					${d.data.data["First Name"]} ${d.data.data["Middle Name"]}
					<br>${d.data.data["Last Name"]}
				</span><br>
				<span style="font-size: 11px;">${otherNameDisplay}</span>`
		})

	// Search dropdown - load all options and setup events.
	const all_select_options = []
	data.forEach(d => {
		if (all_select_options.find(d0 => d0.value === d["id"])) return
		all_select_options.push({label: `${d.data["Full Name"]} (${d["id"]})`, value: d["id"]})
	})
	const search_cont = d3.select(document.querySelector("#searchContainer"))
		.on("focusout", () => {
			setTimeout(() => {
				if (!search_cont.node().contains(document.activeElement)) updateDropdown([]);
			}, 200);
		})
	const search_input = d3.select(document.querySelector("#searchBar"))
		.on("focus", activateDropdown)
		.on("input", activateDropdown)
	const dropdown = d3.select(document.querySelector("#searchResults"))
		.on("wheel", (e) => {
			e.stopPropagation()
		});

	// On load - choose where to start.
	let params = new URLSearchParams(document.location.search);
	let urlId = params.get("id");
	urlId = urlId == null ? "0" : urlId;
	f3Chart.updateMainId(urlId)
	f3Chart.updateTree({initial: true})

	// Expanded Info Card
	// For now, hide the card if mobile device.
	if (!isMobile() && useCard) {
		const f3EditTree = f3Chart.editTree()
			.fixed(true)
			.setFields(["Full Name", "Profession(s)", "Birth", "Death", "Age"])
			.setCardClickOpen(f3Card)

		f3EditTree.setNoEdit()
		f3Chart.updateTree({initial: true})
		f3EditTree.open(f3Chart.getMainDatum())
	}

	function updateTreeWithNewMainPerson(person_id, animation_initial = true) {
		f3Chart.updateMainId(person_id)
		f3Chart.updateTree({initial: animation_initial})
	}

	function activateDropdown() {
		const search_input_value = search_input.property("value")
		const filtered_options = all_select_options.filter(d => d.label.toLowerCase().includes(search_input_value.toLowerCase()))
		updateDropdown(filtered_options)
	}

	function updateDropdown(filtered_options) {
		dropdown.selectAll("div").data(filtered_options).join("div")
			.attr("class", "searchOption")
			.on("click", (e, d) => {
				updateDropdown([]);
				updateTreeWithNewMainPerson(d.value, false);
			})
			.text(d => d.label)
	}
}


/**
 * Determine if the client's device is mobile.
 * 
 * @returns		true if mobile, false otherwise.
 */
function isMobile() {
	let check = false;
	(function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
	return check;
}