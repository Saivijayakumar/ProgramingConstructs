//UC 1: Finding min and max of 5 random three digit values
{
    let minValue = 1000;
    let maxValue = 100;
    for (let i = 1; i <= 5; i++) {
        let randomValue = Math.floor(Math.random() * 899 + 100)
        console.log(`${i} : Random Number is : ${randomValue}`);
        if (randomValue < minValue) {
            minValue = randomValue;
        }
        if (randomValue > maxValue) {
            maxValue = randomValue;
        }
    }
    console.log("Maximum value is: " + maxValue + "\n" + "Minimum value is: " + minValue);
}
//UC 2: Finding given day of month is Between March 20 and june 20
{
    //creating object for prompt
    const prompt = require('prompt-sync')();
    const month = prompt("Enter Month(1-12) : ");
    const day = prompt("Enter Day : ");
    if ((month == 3 && day >= 20 && day <= 31) || (month == 4 && day >= 1 && day <= 30) || (month == 5 && day >= 1 && day <= 31) || (month == 6 && day >= 1 && day <= 20)) {
        console.log(true);
    }
    else {
        console.log(false);
    }
}
//UC 3: Checking leap year or not
{
    //creating object for prompt
    const prompt = require('prompt-sync')();
    const Year = prompt("Enter Year : ");
    //If this condition (Year % 400 == 0) satisfy it is definatly a leap year but in 
    //some cases the aboue condition will fail even though it is leap year then we have to use
    //this condition (Year % 4 == 0) && (Year % 100 != 0) if it pass then it is also a leapYear
    if ((((Year % 4 == 0) && (Year % 100 != 0)) || (Year % 400 == 0)) && (Year >= 1000 && Year <= 9999)) {
        console.log(`${Year} Year is a Leap Year`);
    }
    else {
        console.log(`${Year} Year is Not a Leap Year`);
    }
}
//UC 4:Flip coin problem
{
    let coinResult = Math.floor(Math.random()*2);
    if(coinResult == 0)
    {
        console.log("Head");
    }
    else
    {
        console.log("Tail");
    }
}