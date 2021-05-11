/*Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b). 
La funzione restituirà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.*/

// function yyy(arr, n1, n2) {
//     // trasromare arr in newArr
//     // ['andre', 'jacopo','luca','xyz'] 1 3
//     return newArr; // ['andre', 'jacopo']
// }
// var x = [4,6,1,2,3,4];
// console.log( yyy(x, 1, 3) ); // --> 6,1,2


var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(array);

function myFunction (arr, num1, num2) {
    
    var newArray = [];

    if (num1 > num2) {
        alert("Il primo numero deve essere minore del secondo");
    }

    for (var i = 0; i < arr.length; i++) {
        if (num1 <= i && num2 >= i) {
            newArray.push(arr[i]);
        }   
    }
    
    return newArray;
    
}

var testFinal = myFunction(array, 1, 6);
console.log(testFinal);
