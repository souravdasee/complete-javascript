'use strict';

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
