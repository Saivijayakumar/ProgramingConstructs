//UC 1: Reading a digit and write in words
{
    const prompt = require("prompt-sync")();
    let number = parseInt(prompt("Enter a Number(0-9) : "));
    switch (number) {
        case 0:
            {
                console.log("The number is :Zero");
                break;
            }
        case 1:
            {
                console.log("The number is :One");
                break;
            }
        case 2:
            {
                console.log("The number is :Two");
                break;
            }
        case 3:
            {
                console.log("The number is :Three");
                break;
            }
        case 4:
            {
                console.log("The number is :Four");
                break;
            }
        case 5:
            {
                console.log("The number is :Five");
                break;
            }
        case 6:
            {
                console.log("The number is :Six");
                break;
            }
        case 7:
            {
                console.log("The number is :Seven");
                break;
            }
        case 8:
            {
                console.log("The number is :Eight");
                break;
            }
        case 9:
            {
                console.log("The number is :Nine");
                break;
            }
        default:
            {
                console.log("Invalid number");
                break;
            }
    }
}
//UC 2: Read a Number and display a weak day
{
    const prompt = require("prompt-sync")();
    let day = parseInt(prompt("Enter the day (Sunday:0 ... Saturday:6): "));
    switch (day) {
        case 0:
            {
                console.log("The day is :Sunday");
                break;
            }
        case 1:
            {
                console.log("The day is :Monday");
                break;
            }
        case 2:
            {
                console.log("The day is :Tuesday");
                break;
            }
        case 3:
            {
                console.log("The day is :Wednesday");
                break;
            }
        case 4:
            {
                console.log("The day is :Thursday");
                break;
            }
        case 5:
            {
                console.log("The day is :Friday");
                break;
            }
        case 6:
            {
                console.log("The day is :Saturday");
                break;
            }
        default:
            {
                console.log("Invalid day");
                break;
            }

    }
}
//UC 3:Read a Number 1, 10, 100, 1000, etc and display unit, ten, hundred,...
{
    const prompt = require("prompt-sync")();
    let number = parseInt(prompt("Enter the units digits [1,10,100,1000....]:  "));
    switch (number) {
        case 1:
            console.log("The units digits is :One");
            break;
        case 10:
            console.log("The units digits is :Ten");
            break;
        case 100:
            console.log("The units digits is :Hundred");
            break;
        case 1000:
            console.log("The units digits is :Thousand");
            break;
        case 10000:
            console.log("The units digits is :Ten Thousand");
            break;
        case 100000:
            console.log("The units digits is :Lakh");
            break;
        case 1000000:
            console.log("The units digits is :Ten Lakhs");
            break;
        case 10000000:
            console.log("The units digits is :One Crore");
            break;
        default:
            console.log("Invalid Digit");
            break;
    }
}
//UC 4: Unit Conversion of different Length units
{
    const prompt = require("prompt-sync")();
    console.log("1:Feet-Inch\n2:Feet-meter\n3:Inch-feet\n4:Meter-Feet\n")
    let choice = parseInt(prompt("Enter Your choice : "));
    //let choice = prompt("1:Feet-Inch\n2:Feet-meter\n3:Inch-feet\n4:Meter-Feet\n");
    var input = parseInt(prompt("Enter the Value: "));
    switch (choice) {
        case 1:
            console.log(`Feet To Inch \n Feet = ${input} To Inch = ${input * 12}`);
            break;
        case 2:
            console.log(`Feet To Meter \n Feet = ${input} To Meter = ${input * 0.3048}`);
            break;
        case 3:
            console.log(`Inch To Feet \n Inch = ${input} To Feet = ${input * 0.0833333}`);
            break;
        case 4:
            console.log(`Meter To Feet \n Meter = ${input} To Feet = ${input * 3.28084}`);
            break;
        default:
            console.log("Enter valid Numbers");
            break;
    }
}