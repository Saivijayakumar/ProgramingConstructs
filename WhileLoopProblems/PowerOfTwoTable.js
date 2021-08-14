//Program to print power of 2 table
const prompt = require("prompt-sync")();
let number = prompt("Enter The Range : ");
let endPoint = Math.pow(number, 2);
let result = 1;
let i = 1;
while((i <= endPoint) && (result < 256)) {
    result *= 2;
    console.log(`2 ^ ${i} = ${result}`);
    i++;
}