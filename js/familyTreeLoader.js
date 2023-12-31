import db from '../js/data/peopleData.json' assert { type: 'json' };

for (const element of db) {

    // Split partners - Because the shitty Google-Sheet-to-JSON export stringifies arrays
    element["pids"] = element["pids"] == null ? [] : element["pids"].split(",");

    // Images - set to default if file doesn't exist
    var http = new XMLHttpRequest();
    http.open('HEAD', element["img"], false);
    http.send();
    if (http.status == 404) element["img"] = "../assets/img/person/default.jpg";
}

let family = new FamilyTree(document.getElementById("tree"), {
    orderBy: "sibOrder",
    roots: [95],
    showXScroll: true,
    showYScroll: true,
    siblingSeparation: 40,
    template: 'john',
    nodeBinding: {
        field_0: "givenNames",
        field_1: "surName",
        img_0: "img",
    },
    nodes: db
});