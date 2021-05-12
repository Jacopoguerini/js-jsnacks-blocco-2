/*Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.*/

var bicycleList = [
    {
    name: "Trek",
    weight: 11
    },
    {
    name: "Bianchi",
    weight: 7
    },
    {
    name: "Scott",
    weight: 12
    },
    {
    name: "Scott",
    weight: 14
    },
    {
    name: "Merida",
    weight: 9
    }
];

console.log(bicycleList);

// Math.min(1,2,5,0)  --> 0
// Math.min(3,14,16,33) --> 3
// creazione array del peso delle biciclette per confronto
var prop = [];

for (var i = 0; i < bicycleList.length; i++) {
    prop.push(bicycleList[i].weight);
}
console.log(prop);

// identificazione del peso minore
var weightMin = Math.min(...prop);
console.log(weightMin);

// ciclo per stampa delle proprietà della bici con peso minore
for (var i = 0; i < bicycleList.length; i++) {
    if (bicycleList[i].weight == weightMin) {
        console.log(bicycleList[i]);
    }
}