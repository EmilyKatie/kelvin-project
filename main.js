//The variable is a constant because that temp never changes.
const kelvin = 0;
//Declaring celsius in comparison to kelvin
const celsius = kelvin - 273;
console.log(celsius);
const fahrenheit = celsius*(9/5) + 32;
console.log(fahrenheit);
//declaring and logging fahrenheit formula in comparison to celsuis

//Rounding random temp to whole number
console.log(Math.floor(fahrenheit));

var TEMPERATURE ='fahrenheit';
//Interpolatin the variable into the string. Booyah!
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit `);

