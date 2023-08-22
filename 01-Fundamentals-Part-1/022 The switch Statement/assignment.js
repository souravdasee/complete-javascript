const language = 'hindi';

switch (language) {
    case 'chinese':
    case 'mandarin':
        console.log('Most number of native speakers!');
        break;
    case 'spanish':
        console.log('2nd place in number of native speakers');
        break;
    case 'english':
        console.log('3rd place');
        break;
    case 'hindi':
        console.log('Number 4');
        break;
    case 'arabic':
        console.log('5th most spoken language');
        break;
    default:
        console.log('Great language too :D');
}

// const country = 'Portugal';
// const continent = "Europe";
// let population = 30;
// const isIsland = false;
// let language = "english";
// const popFinland = 6;
// const popAvgCountry = 33;
// const numNeighbours = Number(prompt('How many neighbour countries does your country have?'));

// population /= 2;
// population++;

// if (population > popAvgCountry) {
//     // console.log(`${country}'s population is above average`)
// } else {
//     // console.log(`${country}'s population is ${popAvgCountry - population} million below average`);
// }

// if (numNeighbours === 1) {
//     console.log('Only 1 border!');
// } else if (numNeighbours > 1) {
//     console.log('More than 1 border');
// } else {
//     console.log('No borders');
// }

// if (language === 'english' && population < 50 && !isIsland) {
//     console.log(`You should live in ${country} :)`);
// } else {
//     console.log(`${country} does not meet your criteria :(`);
// }

// const description = country + " is in " + continent + ", and its " + population + " million people speak " + language;
// const description1 = `${country} is in ${continent}, and its ${population} million people speak ${language}`;

// console.log(population);
// console.log(population > popFinland);
// console.log(population < popAvgCountry);
// console.log(description);
// console.log(description1);
// console.log('9' - '5');
// console.log('19' - '13' + '17');
// console.log('19' - '13' + 17);
// console.log('123' < 57);
// console.log(5 + 6 + '4' + 9 - 4 - 2);