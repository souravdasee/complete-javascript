'use strict';

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = calcAge(birthYear);
    const retirement = 60 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired 🎉`);
        return -1;
    }
}

console.log(yearsUntilRetirement(1997, 'Sourav'));
console.log(yearsUntilRetirement(1950, 'Bob'));

/*
////////////////////////////////////////////////////////////////////
function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
    return juice;
}
console.log(fruitProcessor(2, 3));


/////////////////////////////////////////////////////////////////////
// Arrow function
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1997);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 60 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1997, 'Sourav'));
console.log(yearsUntilRetirement(1980, 'Bob'));


////////////////////////////////////////////////////////////////////
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