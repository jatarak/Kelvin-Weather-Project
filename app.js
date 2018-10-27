//This is the temperature in Kelvin
const kelvin = 0;
//This is how to convert Kelvin into Celsuis
const celsius = kelvin - 273;
//This is how to convert Celsius into Fahrenheit
let fahrenheit = celsius * (9/5) + 32;
//Rounding down the decimal number from converting to Fahrenheit
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
let newton = celsius * (33/100);
newton = Math. floor(newton);
console.log(`The temperature is ${newton} degrees Newton.`);
