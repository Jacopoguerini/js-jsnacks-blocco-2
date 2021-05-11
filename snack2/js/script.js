/*Snack 2
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate inizialmente a 0.
Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.
Infine creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.*/

var teams = [
    {
    name: "Inter",
    points: 0,
    fs: 0
    },
    {
    name: "Atalanta",
    points: 0,
    fs: 0
    },
    {
    name: "Milan",
    points: 0,
    fs: 0
    },
    {
    name: "Napoli",
    points: 0,
    fs: 0
    },
    {
    name: "Juventus",
    points: 0,
    fs: 0
    },
];
console.log(teams);

// funzione che genera numeri random
function getRandomNumber(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
}

// generazione casuale di punti nell'array
// Creazione nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console

var arrayFinal = [];
for (var i = 0; i < teams.length; i++) {
teams[i].points = getRandomNumber(69, 85);
    teams[i].fs = getRandomNumber(400, 550);

    arrayFinal.push(teams[i].name, teams[i].fs);

}
console.log("Aggiornamento array dopo generazione casuale di punti e falli subiti: ", teams);
console.log(arrayFinal);
