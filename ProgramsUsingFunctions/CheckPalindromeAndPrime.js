//Take a number from user and check if the number is a Prime then show that its palindrome is also prime.
const prompt = require("prompt-sync")();
let number = prompt("Enter a number : ");

let palindromResult = PalindromeChecker(number);
let primeResult = primeChecker(number);

if(primeResult&&palindromResult)
{
    console.log(number+" is a Prime Number and a Palindrome");
}
else if (primeResult)
{
    console.log(number+" is a Prime Number and Not a Palindrome");
}
else if(palindromResult)
{
    console.log(number+" is a Not Prime Number But its a Palindrome");
}

function primeChecker(number) {
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
    }
    return isPrime;
}
function PalindromeChecker(number) {
    let reverseNumber = number.split("").reverse();
    if (number == reverseNumber.join("")) {
        return true;
    }
    else {
        return false;
    }
}