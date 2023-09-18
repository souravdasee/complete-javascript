'use strict';

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  // book: function () {}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Sourav Das');
lufthansa.book(635, 'Bob Smith');
console.log(lufthansa);

const euroWings = {
  airline: 'EuroWings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// Does NOT work
// book(23, 'Sarah Williams');

// Call method
book.call(euroWings, 23, 'Sarah Williams');
console.log(euroWings);

book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 583, 'Mary Cooper');
console.log(swiss);

// Apply method
const flightData = [583, 'Gorge Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);

/*
////////////////////////////////////////////////////////////////////////////////////
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Sourav');
greeterHey('Bob');

greet('Hello')('Sourav');

// Challenge
const greet1 = greeting1 => name1 => console.log(`${greeting1} ${name1}`);
greet1('Hi')('Alice');

/*
////////////////////////////////////////////////////////////////////////////////////
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer('Javascript is the best!', upperFirstWord);
transformer('Javascript is the best!', oneWord);

// JS uses callbacks all the time
const high5 = function () {
  console.log('👋');
};
document.body.addEventListener('click', high5);
['Sourav', 'Bob', 'Alice'].forEach(high5);

/*
////////////////////////////////////////////////////////////////////////////////////
const flight = 'LH234';
const sourav = {
  name: 'Sourav Das',
  passport: 192371982373,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr.' + passenger.name;

  if (passenger.passport === 192371982373) {
    alert('Checked in!');
  } else {
    alert('Wrong passport!');
  }
};

checkIn(flight, sourav);
console.log(flight);
console.log(sourav);

// Is the same as doing...
// const flightNum = flight;
// const passenger = sourav;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000);
};

newPassport(sourav);
checkIn(flight, sourav);
console.log(flight);
console.log(sourav);

/*
////////////////////////////////////////////////////////////////////////////////////
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // ES5
  // numPassengers = numPassengers || 1;
  // price = 199 * numPassengers;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);
createBooking('LH123', undefined, 1000);
*/
