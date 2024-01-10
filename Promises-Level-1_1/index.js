const fs = require('fs');

function delay(number) {
    return new Promise((resolve, reject) => {
        if (typeof number !== 'number') {
            reject(new Error('Input must be a number'));
        } else {
            setTimeout(() => {
                const result = number * 2;
                console.log(`Delaying for ${number} milliseconds. The doubled number is ${result}`);
                resolve(result);
            }, 2000); // 2 seconds delay
        }
    });
}

delay(5)
    .then(result => console.log(result))
    .catch(error => console.error(error));