// type conversion
const inputYear = '1997';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Sourav'));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3);
console.log('23' / '2');

let n = '1' + 1; // '11'
n = n - 1;
console.log(n);



/*
const age = 15;

if (age >= 18) {
    console.log('Bob can start driving 🚗');
} else {
    const yearsLeft = 18 - age;
    console.log(`Bob is too young. Wait another ${yearsLeft} years 😊`);
}

const birthYear = 1997;
let century;

if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}

console.log(century);



const firstName = 'Sourav';
const job = 'learner';
const birthYear = 1997;
const year = 2038;

const sourav = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';
console.log(sourav);

const souravNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(souravNew);

console.log(`Just a regular string...`);

console.log('String with \n\
multiple \n\
lines');

console.log(`String with
multiple
lines`);


const now = 2037;
const ageSourav = now - 1997;
const ageBob = now - 2001;

console.log(now - 1997 > now - 2001);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageBob + ageSourav) / 2;
console.log(ageBob, ageSourav, averageAge);


// Math Operators
const now = 2037;
const ageSourav = now - 1997;
const ageBob = now - 2001;
console.log(ageSourav, ageBob);

console.log(ageSourav * 2, ageSourav/10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = "Sourav";
const lastName = "Das";
console.log(firstName + ' ' + lastName);

// Assignment Operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--; // x = x - 1

console.log(x);

// Comparison operators
console.log(ageSourav > ageBob); // >, <, >=, <=
console.log(ageBob >= 18);

const isFullAge = ageBob >= 18;

console.log(now - 1997 > now - 2001);


let age = 30;
age = 31;

const birthYear = 1997;
// birthYear = 1999;

// const job;

var job = 'coder';
job = 'learner';

lastName = "Das";
lastName = 'pond';
console.log(lastName);


let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof "Sourav");

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);


let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log("Sourav");
console.log(23);

let lastName = "Das";

console.log(lastName);
console.log(lastName);
console.log(lastName);

let sourav_das = "SD";
let $function = 28;

let person = "Sourav";
let PI = 3.1415;

let myFirstJob = "Coder";
let myCurrentJob = "Learner";

console.log(myFirstJob);
*/