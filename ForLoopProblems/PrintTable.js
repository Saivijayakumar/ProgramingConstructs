//Printing Power Table of 2 up to 2^number
const prompt = require("prompt-sync")();
let number = prompt("Enter The Range : ");
let endPoint = Math.pow(number, 2);
let result = 1;
for (let i = 1; i <= endPoint; i++) {
    if (result <= endPoint) {
        result *= 2;
        console.log(`2 ^ ${i} = ${result}`);
    }
    else{
        break;
    }
}