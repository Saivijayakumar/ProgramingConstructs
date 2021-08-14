//Checking the given number is palindrome are not
const prompt = require("prompt-sync")();
let number1 = prompt("Enter first number: ");
let number2 = prompt("Enter second number: ");
if (PalindromeChecker(number1) && PalindromeChecker(number2)) {
    console.log("The Given Two Numbers are palindrome");
}
else {
    console.log("The Given Numbers are Not palindrome");
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
