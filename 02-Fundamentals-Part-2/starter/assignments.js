'use strict';

const populations = [1441, 1700, 332, 60];

function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}
const percentages2 = [];

for (let i = 0; i < populations.length; i++) {
    percentages2[i] = percentageOfWorld1(populations[i]);
}

console.log(percentages2);


// for (let voter = 1; voter <= 50; voter++) {
//     console.log(`Voter number ${voter} is currently voting`);
// }

// const myCountry = {
//     country: 'India',
//     capital: 'New Delhi',
//     language: 'Hindi',
//     population: 1700,
//     neighbours: ['Bangladesh', 'Nepal', 'China', 'Bhutan', 'Mayanmar', 'Sri Lanka', 'Pakistan', 'Afganistan'],
//     describe: function() {
//         return `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`
//     },
//     checkIsland: function() {
//         return this.isIsland = this.neighbours.length === 0 ? true : false;
//         // this.isIsland = !Boolean(this.neighbours.length);
//     }
// }

// console.log(myCountry.describe());
// console.log(myCountry.checkIsland());



// 'Finland has 6 million finnish-speaking people, 3 neighbouring countriesand a capital called Helsinki.'

// console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countriesand a capital called ${myCountry.capital}.`);

// myCountry.population += 2;
// console.log(myCountry.population);

// myCountry['population'] -= 2;
// console.log(myCountry.population);


// const neighbours = ['Bangladesh', 'Nepal', 'China', 'Bhutan', 'Mayanmar', 'Sri Lanka', 'Pakistan', 'Afganistan'];

// neighbours.push('Utopia');
// neighbours.pop();

// console.log(neighbours);

// if (!neighbours.includes('Germany')) {
//     console.log('Probably not a central European country :D');
// }

// neighbours[neighbours.indexOf('China')] = 'U.C.'
// console.log(neighbours);

// const populations = [1441, 1700, 332, 60];

// console.log(populations.length === 4);

// function percentageOfWorld1(population) {
//     return (population / 7900) * 100;
// }

// const percentages = [
//     percentageOfWorld1(populations[0]), 
//     percentageOfWorld1(populations[1]), 
//     percentageOfWorld1(populations[2]), 
//     percentageOfWorld1(populations[3])
// ];
// console.log(percentages);

// const describePopulation = (country, population) => `${country} has ${population} million people, which is about ${percentageOfWorld1(population)}% of the world.`

// console.log(describePopulation('China', 1441));
// console.log(describePopulation('Idnia', 1700));
// console.log(describePopulation('USA', 332));

// const percentageOfWorld3 = population => (population / 7900) * 100;
// console.log(`China has 1441 million people, so it's about ${percentageOfWorld3(1441)}% of the world population`);
// console.log(`India has 1700 million people, so it's about ${percentageOfWorld3(1700)}% of the world population`);
// console.log(`USA has 332 million people, so it's about ${percentageOfWorld3(332)}% of the world population`);

// function describeCountry(country, population, capitalCity) {
//     const description = `${country} has ${population} million people and its capital city is ${capitalCity}`;
//     return description;
// }

// const countryIndia = console.log(describeCountry('India', 130, 'Delhi'));
// const countryFinland = console.log(describeCountry('Finland', 6, 'Helsinki'));
// const countryUSA = console.log(describeCountry('USA', 100, 'Washington D.C.'));

// function percentageOfWorld1(population) {
//     return (population / 7900) * 100;
// }
// console.log(`China has 1441 million people, so it's about ${percentageOfWorld1(1441)}% of the world population`);
// console.log(`India has 1700 million people, so it's about ${percentageOfWorld1(1700)}% of the world population`);
// console.log(`USA has 1100 million people, so it's about ${percentageOfWorld1(1100)}% of the world population`);

// const percentageOfWorld2 = function(population) {
//     return (population / 7900) * 100;
// }
// console.log(`China has 1441 million people, so it's about ${percentageOfWorld1(1441)}% of the world population`);
// console.log(`India has 1700 million people, so it's about ${percentageOfWorld1(1700)}% of the world population`);
// console.log(`USA has 332 million people, so it's about ${percentageOfWorld1(332)}% of the world population`);