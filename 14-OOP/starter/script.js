'use strict';

///////////////////////////////////////
// Constructor Functions and the new Operator

const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never to this!
  // this.calcAge = function () {
  //   console.log(2037 - this.birthYear);
  // };
};

const sourav = new Person('Sourav', 1997);
console.log(sourav);

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
console.log(matilda, jack);

const jay = 'Jay';

console.log(sourav instanceof Person);
console.log(jay instanceof Person);

///////////////////////////////////////
// Prototypes

console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

sourav.calcAge();
matilda.calcAge();

console.log(sourav.__proto__);
console.log(sourav.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(sourav));
console.log(Person.prototype.isPrototypeOf(matilda));
console.log(Person.prototype.isPrototypeOf(Person));

// .prototyeOfLinkedObjects

Person.prototype.species = 'Homo Sapiens';
console.log(sourav.species, matilda.species);

console.log(sourav.hasOwnProperty('firstName'));
console.log(sourav.hasOwnProperty('species'));
