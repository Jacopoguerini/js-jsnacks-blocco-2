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
    name: "Giant",
    weight: 9
    }
]
console.log(bicycleList);

function minimumWeight(array) {

    var weightMin;
    for (var i = 0; i < array.length; i++) {
        weightMin = Math.min(array[i].weight);
    }
    return weightMin;
}

var lighterBicycle = minimumWeight(bicycleList);
console.log(lighterBicycle);