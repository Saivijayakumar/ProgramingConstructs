//Temperature Conversion
const prompt = require("prompt-sync")();
function ReadInput() {
    console.log('1-Fahrenheit to Celsius \n2-Celsius to Fahrenheit\n');
    let choice = prompt();
    switch (choice) {
        case "1":
            let fahrenheit = prompt("Enter degree in Fahrenheit: ");
            if (!(fahrenheit >= 32 && fahrenheit <= 212)) {
                console.log("The Enter degree Should be in range 32 to 212");
                return;
            }
            var result = FahrenheitToCelsius(fahrenheit);
            console.log("Fahrenheit To Celusis Temperature : " + result);
            break;
        case "2":
            let celsius = prompt("Enter degree in Celsius : ");
            if (!(celsius >= 0 && celsius <= 100)) {
                console.log("The Enter degree Should be in range 0 to 100");
                return;
            }
            var result = CelsiusToFahrenheit(celsius);
            console.log("Celusis To Fahrenheit Temperature : " + result);
            break;
        default:
            console.log("Enter a valid input");
            break;
    }
}
function CelsiusToFahrenheit(celsius) {
    return Math.round((celsius * 9 / 5) + 32);

}
function FahrenheitToCelsius(fahrenheit) {
    return Math.round((fahrenheit - 32) * 5 / 9);
}
ReadInput();