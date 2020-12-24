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

	// CANADA - THE MARITIMES
	{title: "Alberton, Prince Edward Island, Canada", lat: 46.8106531, lng: -64.0807441, date: "2016-05", category: "C" },
	{title: "Basin Head Provincial Park - Souris, Prince Edward Island, Canada", lat: 46.37805550789233, lng: -62.10925063751761, date: "2016-05", category: "O" },
	{title: "Cabot Trail - Nova Scotia, Canada", lat: 46.88181547305979, lng: -60.53853379454372, date: "2016-05", category: "O" },
	{title: "Cedar Dunes Provincial Park - O'Leary, Prince Edward Island, Canada", lat: 46.61960845512311, lng: -64.38036558771276, date: "2016-05", category: "O" },
	{title: "Downtown - Charlottetown, Prince Edward Island, Canada", lat: 46.233180639700976, lng: -63.1207448323266, date: "2016-05", category: "S" },
	{title: "Hopewell Rocks Park - Hopewell Cape, New Brunswick, Canada", lat: 45.817336937906774, lng: -64.57863714392612, date: "2016-05", category: "S" },
	{title: "Lantern Hill & Hollow - Ingonish Beach, Nova Scotia, Canada", lat: 46.676319775155235, lng: -60.40609377954372, date: "2016-05", category: "O" },
	{title: "Mill River - O'Leary, Prince Edward Island, Canada", lat: 46.76931584536897, lng: -64.10181720866865, date: "2016-05", category: "O" },
	{title: "North Cape - Tignish, Prince Edward Island, Canada", lat: 47.05824983416774, lng: -63.99535340115612, date: "2016-05", category: "O" },
	{title: "Northumberland Ferry - Belle River, Prince Edward Island, Canada", lat: 45.95638318002683, lng: -62.74866582311627, date: "2016-05", category: "O" },
	{title: "Oceanview Lookoff - Cavendish, Prince Edward Island, Canada", lat: 46.499707714382495, lng: -63.38336256634915, date: "2016-05", category: "O" },
	{title: "Peggy's Cove - Nova Scotia, Canada", lat: 44.491829317062034, lng: -63.918626056872064, date: "2016-05", category: "S" },
	{title: "Pleasant Bay - Nova Scotia, Canada", lat: 46.82372119012287, lng: -60.79977019345379, date: "2016-05", category: "O" },
	{title: "Shaw's Landing - West Dover, Nova Scotia, Canada", lat: 44.50009828599775, lng: -63.880249874389385, date: "2016-05", category: "S" },
	{title: "Skinners Pond - Tignish, Prince Edward Island, Canada", lat: 46.967608752020816, lng: -64.12029013749749, date: "2016-05", category: "O" },
	{title: "Sydney - Cape Breton, Nova Scotia, Canada", lat: 46.13661868285767, lng: -60.19349352823006, date: "2016-05", category: "C" },
	{title: "Waterfront - Halifax, Nova Scotia, Canada", lat: 44.64601387035912, lng: -63.56937583949386, date: "2016-05", category: "S" },

	// CANADA - THE REST
	{title: "Biodome - Montréal, Québec, Canada", lat: 45.55971855564881, lng: -73.54971294181404, date: "2016-05", category: "A" },
	{title: "Discovery Trail & Lac Meech - Chelsea, Québec, Canada", lat: 45.52773879698844, lng: -75.86434088655407, date: "2020-08", category: "O" },
	{title: "Lac Philippe - Sainte-Cécile-de-Masham, Québec, Canada", lat: 45.61106844846935, lng: -76.01155778548838, date: "2020-08", category: "O" },
	{title: "The Forks - Winnipeg, Manitoba, Canada", lat: 49.8903623, lng: -97.1350499, date: "2019-08", category: "S" },

	// JAMAICA
	{title: "Bahia Principe Grand - Salt Coppers, Runaway Bay, Jamaica", lat: 18.46185316759561, lng: -77.35052218865287, date: "2020-03", category: "R" },
	{title: "Dunn's River Falls - Ocho Rios, Jamaica", lat: 18.416867191683306, lng: -77.13466719050304, date: "2020-03", category: "A" },
	{title: "Mystic Mountain Rainforest, Ocho Rios, Jamaica", lat: 18.414445756639257, lng: -77.1258872868038, date: "2020-03", category: "A" },

	// USA - FLORIDA
	{title: "Disney Springs - Lake Buena Vista, Florida, USA", lat: 28.371028804284304, lng: -81.51913171150238, date: "2016-03", category: "A" },
	{title: "Disney's Animal Kingdom Theme Park - Bay Lake, Florida, USA", lat: 28.353025120629223, lng: -81.5906705346591, date: "2012-04", category: "A" },
	{title: "Disney's Hollywood Studios - Lake Buena Vista, Florida, USA", lat: 28.3577748581696, lng: -81.55827140199646, date: "2012-04", category: "A" },
	{title: "Epcot - Orlando, Florida, USA", lat: 28.37490165910806, lng: -81.54940400199618, date: "2012-04", category: "A" },
	{title: "Fort Lauderdale Beach - Fort Lauderdale, Florida, USA", lat: 26.1625716, lng: -80.104243, date: "2016-03", category: "S" },
	{title: "Gatorland - Orlando, Florida, USA", lat: 28.355968664279, lng: -81.40402363634179, date: "2016-03", category: "A" },
	{title: "Magic Kingdom Park - Lake Buena Vista, Florida, USA", lat: 28.417870574908683, lng: -81.58122273083102, date: "2012-04", category: "A" },
	{title: "Riviera Beach, Florida, USA", lat: 26.78612015826635, lng: -80.0861518264771, date: "2016-03", category: "C" },
	{title: "Universal Studios - Orlando, Florida, USA", lat: 28.475228400421194, lng: -81.46703365582303, date: "2016-03", category: "A" },
	{title: "Universal's Islands of Adventure - Orlando, Florida, USA", lat: 28.47181114396938, lng: -81.47099043354258, date: "2016-03", category: "A" },
	{title: "Walt Disney World Dolphin Resort - Lake Buena Vista, Florida, USA", lat: 28.367656794804898, lng: -81.56131237316066, date: "2016-03", category: "S" },

	// USA - THE REST
	{title: "Boston, Massachusetts, USA", lat: 42.45142361880354, lng: -71.07212492961285, date: "2006-07", category: "C" },
	{title: "Times Square - Manhattan, New York, USA", lat: 40.757987160263404, lng: -73.9855417801456, date: "2013-01", category: "S" },
];

var categories = {
	"A": {title: "Attraction", color: "U" },
	"C": {title: "City", color: "U" },
	"O": {title: "Outdoors", color: "U" },
	"R": {title: "Resort", color: "U" },
	"S": {title: "Site / Landmark", color: "U" },
	"U": {title: "Unknown", color: "U" },
};