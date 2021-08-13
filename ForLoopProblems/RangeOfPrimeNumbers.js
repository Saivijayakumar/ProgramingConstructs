//Display the prime Numbers in between range 
const prompt = require("prompt-sync")();
const lowerRange = parseInt(prompt('Enter lower number: '));
const higherRange = parseInt(prompt('Enter higher number: '));
console.log(`The prime numbers between ${lowerRange} and ${higherRange} are:`);
// looping from lowerRange to higherRange
for (let i = lowerRange; i <= higherRange; i++) {
    let flag = 0;
    // looping through 2 to user input number
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }
    // if number greater than 1 and not divisible by other numbers
    if (i > 1 && flag == 0) {
        console.log(`${i} is a prime number`);
    }
}