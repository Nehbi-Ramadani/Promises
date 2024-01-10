const fs = require('fs'); // Ich importiere das fs-Modul


// Ich definiere die erste Funktion
function multiplyNumber(number) {
    console.log(`Ich habe die Funktion multiplyNumber mit der Zahl ${number} aufgerufen`); // Ich logge, wann die Funktion aufgerufen wird

    // Ich erstelle ein neues Promise
    return new Promise((resolve) => {
        // Ich multipliziere die Zahl mit sich selbst
        const result = number * number;
        console.log(`Ich habe die Zahl ${number} mit sich selbst multipliziert und das Ergebnis ist ${result}`); // Ich logge das Ergebnis der Multiplikation

        // Ich resolve das Promise mit dem Ergebnis
        resolve(result);
    });
}

// Ich definiere die zweite Funktion
function callMultiplyNumberThreeTimes(number) {
    console.log(`Ich habe die Funktion callMultiplyNumberThreeTimes mit der Zahl ${number} aufgerufen`); // Ich logge, wann die Funktion aufgerufen wird

    // Ich rufe die erste Funktion auf und behandle das zurückgegebene Promise
    multiplyNumber(number)
        .then(result => {
            console.log(`Erster Aufruf von multiplyNumber abgeschlossen mit dem Ergebnis ${result}`); // Ich logge das Ergebnis des ersten Aufrufs

            // Ich rufe die erste Funktion ein zweites Mal auf mit dem Ergebnis des ersten Aufrufs
            return multiplyNumber(result);
        })
        .then(result => {
            console.log(`Zweiter Aufruf von multiplyNumber abgeschlossen mit dem Ergebnis ${result}`); // Ich logge das Ergebnis des zweiten Aufrufs

            // Ich rufe die erste Funktion ein drittes Mal auf mit dem Ergebnis des zweiten Aufrufs
            return multiplyNumber(result);
        })
        .then(result => {
            console.log(`Dritter Aufruf von multiplyNumber abgeschlossen mit dem Ergebnis ${result}`); // Ich logge das Ergebnis des dritten Aufrufs
        });
}

// Ich rufe die zweite Funktion auf
callMultiplyNumberThreeTimes(2);