'use strict';

function describeCountry(country, population, capitalCity) {
    const description = `${country} has ${population} million people and its capital city is ${capitalCity}`;
    return description;
}

const countryIndia = console.log(describeCountry('India', 130, 'Delhi'));
const countryFinland = console.log(describeCountry('Finland', 6, 'Helsinki'));
const countryUSA = console.log(describeCountry('USA', 100, 'Washington D.C.'));