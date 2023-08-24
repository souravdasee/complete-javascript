'use strict';

const bills = [125, 555, 44];
const calcTip = bills => bills >= 50 && bills<= 300 ? bills * 0.15 : bills * 0.2;
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [
    bills[0] + tips[0], 
    bills[1] + tips[1], 
    bills[2] + tips[2]
];

console.log(bills, tips, total);

/*
//////////////////////////////////////////////////////////////////////////
const calcAverage = (s1, s2, s3) => (s1 + s2 + s3) / 3;
let scoreDolphins = calcAverage(85, 54, 41);
let scoreKoalas = calcAverage(23, 34, 27);

const checkWinner = function(avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log('No team wins!');
    }
}
checkWinner(scoreDolphins, scoreKoalas);
*/