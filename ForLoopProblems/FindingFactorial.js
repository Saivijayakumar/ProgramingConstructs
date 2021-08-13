const prompt = require("prompt-sync")();
let number = prompt("Enter the number : ");
let result = 1;
for(let i=1;i<=number;i++)
{
    result*=i;
}
console.log(`Factorial For ${number} is ${result}`);