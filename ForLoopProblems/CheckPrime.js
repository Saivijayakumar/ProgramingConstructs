const prompt = require("prompt-sync")();
let number = prompt("Enter a Number : ");
let isPrime = true;
if (number === 1) {
    console.log("1 is Neither Prime Nor Composite Number.");
}
else if (number > 1) {
    //In the conditio we are not using = so if 2 comes it out of for loop
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(`${number} is a Prime Number`);
    }
    else {
        console.log(`${number} is a not Prime Number`);
    }
}
else {
    console.log("Invalid Number");
}