var markers = [

	// [ LABEL | LAT | LONG | IMAGE FILE | ISTOPE FILTERS ]

	// CANADA
	["Fool\'s Gold - Canadian Museum of Nature, Ottawa, Ontario, Canada", 45.4127774, -75.6908502, "naturemuseum.jpg", "ca"],
	["Parliament Hill, Ottawa, Ontario, Canada", 45.4235974, -75.7031177, "parliamenthill.jpg", "ca"],
	["The Forks, Winnipeg, Manitoba, Canada", 49.8903623, -97.1350499, "forks.jpg", "ca 2019w"],

	// CANADA - MARITIMES
	["Cabot Trail, Ingonish Beach, Nova Scotia, Canada", 46.676222, -60.4087868, "cabottrail.jpg", "ca 2016m"],
	["Hopewell Rocks Floor, New Brunswick, Canada", 45.8477461, -64.5851898, "hopewell.jpg", "ca 2016m"],
	["Mollusc Shells - North Cape, PEI, Canada", 46.8108093, -64.3434147, "northcapemollusc.jpg", "ca 2016m"],
	["Mussel Shells - North Cape, PEI, Canada", 46.8108093, -64.3434147, "northcapemussel.jpg", "ca 2016m"],
	["Peggy's Cove, Nova Scotia, Canada", 44.4828334, -63.9487835, "peggyscove.jpg", "ca 2016m"],
	["Red Sandstone Soil - Alberton, PEI, Canada", 46.8106531, -64.0807441, "alberton.jpg", "ca 2016m"],
	["Sea Shells - Tignish, PEI, Canada", 46.950888, -64.051592, "tignish.jpg", "ca 2016m"],
	["Singing Sands - Basin Head, PEI, Canada", 46.3849489, -62.1159812, "singingsands.jpg", "ca 2016m"],

	// JAMAICA
	["Bahia Principe Grand, Runaway Bay, Jamaica", 18.4616751, -77.3526787, "runawaybay.jpg", "jm 2020r"],
	["Dunn's River Falls, Ocho Rios, Jamaica", 18.4150741, -77.1395753, "dunnsriver.jpg", "jm 2020r"],
	["Mystic Mountain Rainforest, Ocho Rios, Jamaica", 18.414232, -77.1281189, "mysticmountain.jpg", "jm 2020r"],
	
	// USA
	["Sea Shells - Fort Lauderdale Beach, Florida, USA", 26.1625716, -80.104243, "fortlauderdale.jpg", "us 2016f"],
];


filters = [

	// COUNTRIES
	{ "type": "country", "filter": "ca", "text": "Canada"},
	{ "type": "country", "filter": "jm", "text": "Jamaica"},
	{ "type": "country", "filter": "us", "text": "USA"},
	
	// TRIPS
	{ "type": "trip", "filter": "2016f", "text": "Florida 2016"},
	{ "type": "trip", "filter": "2016m", "text": "Maritimes 2016"},
	{ "type": "trip", "filter": "2019w", "text": "Winnpeg 2019"},
	{ "type": "trip", "filter": "2020r", "text": "Runaway Bay 2020"},
]