'use strict';

const friends = ['Franklin', 'Michel', 'Trevor'];

// Add elements
const newLength = friends.push('jay');
console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends);

// Remove elements
friends.pop(); // Last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // First
console.log(friends);

console.log(friends.indexOf('Michel'));
console.log(friends.indexOf('Bob'));

friends.push(23);
console.log(friends.includes('Michel'));
console.log(friends.includes('Bob'));
console.log(friends.includes(23));

if (friends.includes('Michel')) {
    console.log('You have a friend called Michel');
}

/*
///////////////////////////////////////////////////////////////////////
const friend1 = 'Franklin';
const friend2 = 'Michel';
const friend3 = 'Trevor';

const friends = ['Franklin', 'Michel', 'Trevor'];
console.log(friends);

const year = new Array(1997, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Bob';
console.log(friends);
// friends = ['Peter', 'Alice'];

const firstName = 'Sourav';
const sourav = [firstName, 'Das', 2037 - 1997, 'learner', friends];
console.log(sourav);
console.log(sourav.length);

// Exercise
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}
const years = [1997, 1967, 2002, 2010, 2020];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);


////////////////////////////////////////////////////////////////////
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