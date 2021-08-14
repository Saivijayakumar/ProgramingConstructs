//Finding Nth Harmonic Number 
const prompt = require("prompt-sync")();
let number = prompt("Enter Nth Number : ");
let result = 0;
for(let i=1;i<=number;i++)
{
    result +=(1/i);
}
console.log(`${number}th Harmonic Number is ${result.toFixed(2)}`);