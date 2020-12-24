var markers = [

	// BANGLADESH
	{title: "Dhaka, Dhaka Division, Bangladesh", lat: 23.894964682234896, lng: 90.40199450792716, date: "1999-10", category: "C" },
	{title: "Faridpur, Faridpur Division, Bangladesh", lat: 24.04432914906141, lng: 89.56721355737233, date: "1999-10", category: "C" },
	{title: "Pabna, Rajshahi Division, Bangladesh", lat: 24.05580729096357, lng: 89.25151090711809, date: "1999-10", category: "C" },

	// CANADA - ONTARIO
	{title: "Algonquin Provincial Park - Ontario, Canada", lat: 45.65713555, lng: -78.49953864045284, date: "2015-05", category: "O" },
	{title: "Barry's Bay Cottages - Ontario, Canada", lat: 45.50217597219602, lng: -77.756187401606, date: "2015-05", category: "O" },
	{title: "Bate Island - Ottawa, Ontario, Canada", lat: 45.40891271394697, lng: -75.75622591823567, date: "2018-07", category: "O" },
	{title: "Blue Mountain Resort - The Blue Mountains, Ontario, Canada", lat: 44.5039730749505, lng: -80.31222160163283, date: "2014-08", category: "R" },
	{title: "Byng Island Conservation Area - Dunnville, Ontario, Canada", lat: 42.89918454028376, lng: -79.63606495037699, date: "2012-07", category: "O" },
	{title: "Canadian Museum of Nature, Ottawa, Ontario, Canada", lat: 45.4127774, lng: -75.6908502, date: "2016-08", category: "A" },
	{title: "Canadian National Exhibition - Toronto, Ontario, Canada", lat: 43.633234179530476, lng: -79.42260820165588, date: "2014-08", category: "A" },
	{title: "Fanshawe Conservation Area - London, Ontario, Canada", lat: 43.03610109751611, lng: -81.18848881372698, date: "1995-09", category: "O" },
	{title: "Fenelon Falls - Kawartha Lakes, Ontario, Canada", lat: 44.538430028456524, lng: -78.73611121464356, date: "2013-08", category: "O" },
	{title: "G Ross Lord Park - North York, Ontario, Canada", lat: 43.782132969201555, lng: -79.46037998826658, date: "2014-06", category: "O" },
	{title: "Horseshoe Resort - Barrie, Ontario, Canada", lat: 44.54948802155919, lng: -79.67246371003314, date: "2016-01", category: "R" },
	{title: "Lake Scugog - Scugog, Ontario, Canada", lat: 44.18342896518083, lng: -78.84373735740041, date: "2013-08", category: "O" },
	{title: "Niagara Falls - Niagara Falls, Ontario, Canada", lat: 43.083408318912596, lng: -79.07902458771352, date: "2012-07", category: "A" },
	{title: "Parliament Hill - Ottawa, Ontario, Canada", lat: 45.4235974, lng: -75.7031177, date: "2016-08", category: "S" },
	{title: "Rideau Canal Lock 24 - Jasper, Ontario, Canada", lat: 44.884441410083504, lng: -75.93074969977296, date: "2020-06", category: "O" },
	{title: "Ripley's Aquarium - Toronto, Ontario, Canada", lat: 43.642605443802566, lng: -79.38597160165556, date: "2013-12", category: "A" },
	{title: "Toronto Zoo - Toronto, Ontario, Canada", lat: 43.82067418689921, lng: -79.18150960311611, date: "2006-11", category: "A" },

	// CANADA - THE REST
	{title: "Alberton, Prince Edward Island, Canada", lat: 46.8106531, lng: -64.0807441, date: "2016-05", category: "C" },
	{title: "Basin Head Provincial Park - Souris, Prince Edward Island, Canada", lat: 46.37805550789233, lng: -62.10925063751761, date: "2016-05", category: "O" },
	{title: "Biodome - Montréal, Québec, Canada", lat: 45.55971855564881, lng: -73.54971294181404, date: "2016-05", category: "A" },
	{title: "Cedar Dunes Provincial Park - O'Leary, Prince Edward Island, Canada", lat: 46.61960845512311, lng: -64.38036558771276, date: "2016-05", category: "O" },
	{title: "Discovery Trail & Lac Meech - Chelsea, Québec, Canada", lat: 45.52773879698844, lng: -75.86434088655407, date: "2020-08", category: "O" },
	{title: "Downtown - Charlottetown, Prince Edward Island, Canada", lat: 46.233180639700976, lng: -63.1207448323266, date: "2016-05", category: "S" },
	{title: "Lac Philippe - Sainte-Cécile-de-Masham, Québec, Canada", lat: 45.61106844846935, lng: -76.01155778548838, date: "2020-08", category: "O" },
	{title: "Mill River - O'Leary, Prince Edward Island, Canada", lat: 46.76931584536897, lng: -64.10181720866865, date: "2016-05", category: "O" },
	{title: "North Cape - Tignish, Prince Edward Island, Canada", lat: 47.05824983416774, lng: -63.99535340115612, date: "2016-05", category: "O" },
	{title: "Northumberland Ferry - Belle River, Prince Edward Island, Canada", lat: 45.95638318002683, lng: -62.74866582311627, date: "2016-05", category: "O" },
	{title: "Oceanview Lookoff - Cavendish, Prince Edward Island, Canada", lat: 46.499707714382495, lng: -63.38336256634915, date: "2016-05", category: "O" },
	{title: "Skinners Pond - Tignish, Prince Edward Island, Canada", lat: 46.967608752020816, lng: -64.12029013749749, date: "2016-05", category: "O" },
	{title: "The Forks - Winnipeg, Manitoba, Canada", lat: 49.8903623, lng: -97.1350499, date: "2019-08", category: "S" },

	// JAMAICA
	{title: "Bahia Principe Grand - Salt Coppers, Runaway Bay, Jamaica", lat: 18.46185316759561, lng: -77.35052218865287, date: "2020-03", category: "R" },
	{title: "Dunn's River Falls - Ocho Rios, Jamaica", lat: 18.416867191683306, lng: -77.13466719050304, date: "2020-03", category: "A" },
	{title: "Mystic Mountain Rainforest, Ocho Rios, Jamaica", lat: 18.414445756639257, lng: -77.1258872868038, date: "2020-03", category: "A" },

	// USA
	{title: "Boston, Massachusetts, USA", lat: 42.45142361880354, lng: -71.07212492961285, date: "2006-07", category: "C" },
	{title: "Fort Lauderdale Beach - Fort Lauderdale, Florida, USA", lat: 26.1625716, lng: -80.104243, date: "2016-03", category: "S" },
	{title: "Gatorland - Orlando, Florida, USA", lat: 28.355968664279, lng: -81.40402363634179, date: "2016-03", category: "A" },
	{title: "Riviera Beach, Florida, USA", lat: 26.78612015826635, lng: -80.0861518264771, date: "2016-03", category: "C" },
	{title: "Times Square - Manhattan, New York, USA", lat: 40.757987160263404, lng: -73.9855417801456, date: "2013-01", category: "S" },
	{title: "Universal Orlando Resort - Orlando, Florida, USA", lat: 28.474579363686807, lng: -81.46641300728605, date: "2016-03", category: "R" },
	{title: "Walt Disney World Resort - Orlando, Florida, USA", lat: 28.385440638467166, lng: -81.56389545966731, date: "2012-04", category: "R" },
	
	
	

	


	{title: "Cabot Trail, Ingonish Beach, Nova Scotia, Canada", lat: 46.676222, lng: -60.4087868, date: "2016-05", category: "U" },
	{title: "Hopewell Rocks, New Brunswick, Canada", lat: 45.8477461, lng: -64.5851898, date: "2016-05", category: "U" },
	{title: "Peggy's Cove, Nova Scotia, Canada", lat: 44.4828334, lng: -63.9487835, date: "2016-05", category: "U" },


	
];

var categories = {
	"A": {title: "Attraction", color: "U" },
	"C": {title: "City", color: "U" },
	"O": {title: "Outdoors", color: "U" },
	"R": {title: "Resort", color: "U" },
	"S": {title: "Site", color: "U" },
	"U": {title: "Unknown", color: "U" },
};