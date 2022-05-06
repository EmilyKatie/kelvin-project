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

var myAge = 21;
//cuz i'm old and i just had a bday yesterday. 
//Happy birthday to me!! oh and assigned a variable
var earlyYears = 2;
//assigned the number of years to 2 to the variable earlyYears
console.log(earlyYears * 10.5);
console.log(myAge - 2);
var laterYears = myAge - 2;
//assigning laterYears variable to 2 years minus my current age
console.log(laterYears * 4);
//multiplied laterYears variable by 4
var myAgeInDogYears = earlyYears + laterYears;
console.log(myAgeInDogYears);
//combined 2 variables into 1 to become dog years
var myName = 'Emily';
myName.toLowerCase();
//lowercased myName variable
console.log(myName.toLowerCase);
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);

//added magic 8 ball code below
var userName = 'Emily';
var userQuestion = 'Will Emily get a software engineering position offer in the next 7 days?';
var randomNumber = Math.floor(Math.random() * 8);
var eightBall = '';

 
if (userName == 'Emily'){
    alert(`Hello ${userName}`);
}
else {
    alert('Hello');

}

if (randomNumber == 0 && eightBall == '') {
    alert('It is certain');
}
else if (randomNumber == 1) {
        alert('Fo sure!!');
    }
else if (randomNumber == 2) {
    alert('Ghosted... or life happens');
}
else if (randomNumber == 3) {
    alert('Signs point to yes!');
}
else if (randomNumber == 4) {
    alert('Maybe Later!');
}
else if (randomNumber == 5) {
    alert('Bullseye!');
}
else if (randomNumber == 6) {
    alert('Shake it again');
}
else if (randomNumber == 7) {
    alert('Good luck, you are gonna need it!');
}


