//UC 1: Reading a Single Digit and Write in words
{
    const prompt = require('prompt-sync')();
    let number = prompt("Enter Number(0-9) : ");
    if (number == 0) {
        console.log("The number is :Zero");
    }
    else if (number == 1) {
        console.log("The number is :One");
    }
    else if (number == 2) {
        console.log("The number is :Two");
    }
    else if (number == 3) {
        console.log("The number is :Three");
    }
    else if (number == 4) {
        console.log("The number is :Four");
    } else if (number == 5) {
        console.log("The number is :Five");
    }
    else if (number == 6) {
        console.log("The number is :Six");
    } else if (number == 7) {
        console.log("The number is :Seven");
    }
    else if (number == 8) {
        console.log("The number is :Eight");
    }
    else if (number == 9) {
        console.log("The number is :Nine");
    }
    else {
        console.log("Invalid number");
    }
}
//UC 2:Read a Number and Display the week Day
{
    const prompt = require('prompt-sync')();
    let day = prompt("Enter the day (Sunday:0 ... Saturday:6) : ");
    if (day == 0) {
        console.log("The day is :Sunday");
    }
    else if (day == 1) {
        console.log("The day is :Monday");
    }
    else if (day == 2) {
        console.log("The day is :Tuesday");
    }
    else if (day == 3) {
        console.log("The day is :Wednesday");
    }
    else if (day == 4) {
        console.log("The day is :Thursday");
    }
    else if (day == 5) {
        console.log("The day is :Friday");
    }
    else if (day == 6) {
        console.log("The day is :Saturday");
    }
    else {
        console.log("Invalid day");
    }
}
//UC 3:Read a Number 1, 10, 100, 1000, etc and display unit, ten, hundred,...
{
    const prompt = require('prompt-sync')();
    var digit = prompt("Enter the digits like [1,10,100,1000....] : ");
    if (digit == 1) {
        console.log("The units digits is :One");
    }
    else if (digit == 10) {
        console.log("The units digits is :Ten");
    }
    else if (digit == 100) {
        console.log("The units digits is :Hundred");
    }
    else if (digit == 1000) {
        console.log("The units digits is :Thousand");
    }
    else if (digit == 10000) {
        console.log("The units digits is :Ten Thousand");
    } else if (digit == 100000) {
        console.log("The units digits is :Lakh");
    }
    else if (digit == 1000000) {
        console.log("The units digits is :Ten Lakhs");
    }
    else {
        console.log("Invalid Digit");
    }
}
//UC 4: Find Max and min For Arithametic result
{
    const prompt = require('prompt-sync')();
    let number1 = prompt('Enter Number 1 : ');
    let number2 = prompt('Enter Number 2 : ');
    let number3 = prompt('Enter Number 3 : ');
    let result1 = Math.round(number1 + number2 * number3);
    let result2 = Math.round(number1 % number2 + number3);
    let result3 = Math.round(number3 + number1 / number2);
    let result4 = Math.round(number1 * number2 + number3);
    let max = result1;
    if (result1 < result2 && result1 < result3 && result1 < result4) {
        min = result1;
    }
    else if (result2 < result1 && result2 < result3 && result2 < result4) {
        min = result2;
    }
    else if (result3 < result1 && result3 < result2 && result3 < result4) {
        min = result3;
    }
    else {
        min = result4;
    }
    if (result1 > result3 && result1 > result4 && result1 > result2) {
        max = result1;
    }
    else if (result2 > result3 && result2 > result4 && result2 > result1) {
        max = result2;
    }
    else if (result3 > result1 && result3 > result2 && result3 > result4) {
        max = result3;
    }
    else {
        max = result4;
    }
    console.log(`Result 1 :${result1}`);
    console.log(`Result 2 :${result2}`);
    console.log(`Result 3 :${result3}`);
    console.log(`Result 4 :${result4}`);
    console.log(`Minimum value :${min}`);
    console.log(`Maximum value :${max}`);
}