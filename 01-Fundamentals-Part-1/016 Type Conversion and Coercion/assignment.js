const country = 'India';
const continent = "Asia";
let population = 130;
const isIsland = false;
let language = "hindi";
const popFinland = 6;
const popAvgCountry = 33;

// population /= 2;
// population++;

if (population > popAvgCountry) {
    console.log(`${country}'s population is above average`)
} else {
    console.log(`${country}'s population is ${popAvgCountry - population} million below average`);
}

const description = country + " is in " + continent + ", and its " + population + " million people speak " + language;
const description1 = `${country} is in ${continent}, and its ${population} million people speak ${language}`;

// console.log(population);
// console.log(population > popFinland);
// console.log(population < popAvgCountry);
// console.log(description);
// console.log(description1);