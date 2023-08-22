'use strict';

// Function declaration
const age1 = calcAge1(1997);
function calcAge1(birthYear) {
    return 2037 - birthYear;
}

// Function expression
const calcAge2 = function(birthYear) {
    return 2037 - birthYear;
}
const age2 = calcAge2(1997);

console.log(age1, age2);

/*
//////////////////////////////////////////////////////////////////
function logger() {
    console.log('My name is Sourav.');
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23');


///////////////////////////////////////////////////////////////
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('YAY! I can drive now :D');

// const interface = 'Audio';
// const private = 543;
*/