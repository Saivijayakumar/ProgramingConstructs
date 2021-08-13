const prompt = require("prompt-sync")();
let n = prompt("Enter the number : ");
console.log(`The Prime Factors for ${n} is : `);
//It will Print number of 2s that divide by n
while (n % 2 == 0) {
    console.log(2 + " ");
    n /= 2;
}
//when we reach to this position n must be odd.For that we can skip one element
for (let i = 3; i <= Math.sqrt(n); i += 2)//here i is increment with i = i+2;
{
    // While i divides n, print i and divide n
    while (n % i == 0) {
        console.log(i + " ");
        n /= i;
    }
}
if (n > 2)
    console.log(n);