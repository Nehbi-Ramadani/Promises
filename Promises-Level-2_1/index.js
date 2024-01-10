const fs = require('fs'); // Ich importiere das fs-Modul

// Ich definiere die Funktion
function getRandomNumber() {
    console.log('Ich rufe die Funktion getRandomNumber auf'); // Ich logge, wenn die Funktion aufgerufen wird

    // Ich erstelle ein neues Promise
    return new Promise((resolve, reject) => {
        // Ich generiere eine Zufallszahl zwischen 1 und 10
        const number = Math.floor(Math.random() * 10) + 1;
        console.log(`Ich habe die Zahl ${number} generiert`); // Ich logge die generierte Zahl

        // Wenn die Zahl kleiner als 6 ist, rejecte ich das Promise
        if (number < 6) {
            console.log('Die Zahl ist kleiner als 6, ich rejecte das Promise'); // Ich logge, wenn das Promise rejected wird
            reject(number);
        } else {
            // Ansonsten resolve ich das Promise
            console.log('Die Zahl ist 6 oder größer, ich resolve das Promise'); // Ich logge, wenn das Promise resolved wird
            resolve(number);
        }
    });
}

// Ich rufe die Funktion auf und behandle das zurückgegebene Promise
getRandomNumber()
    .then(number => {
        // Wenn das Promise resolved, gebe ich die Zahl aus
        console.log(`Das Promise hat resolved mit der Zahl: ${number}`);
    })
    .catch(number => {
        // Wenn das Promise rejected, gebe ich die Zahl aus
        console.log(`Das Promise hat rejected mit der Zahl: ${number}`);
    });