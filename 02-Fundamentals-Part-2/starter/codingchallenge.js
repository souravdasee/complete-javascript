'use strict';

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const calcTip = bills => bills >= 50 && bills<= 300 ? bills * 0.15 : bills * 0.2;
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]));
    totals.push(bills[i] + tips[i]);
}

console.log (bills, tips, totals);

// Bonus: 

const calcAverage = function(arr) {
    let sum = 0;
    for (let i = 0;  i < arr.length; i++) {
        sum += arr[i];
    }
    return sum/ arr.length;
}

console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));


/*
//////////////////////////////////////////////////////////////////////////
const BMI = {
    name: ['Mark Miller', 'John Smith'],
    weight: [78, 92],
    height: [1.69, 1.95],
    calcBMI: function() {
        this.bmi1 = this.weight[0] / this.height[0] ** 2;
        this.bmi2 = this.weight[1] / this.height[1] ** 2;
        return [this.bmi1, this.bmi2];
    }
}

console.log(BMI.calcBMI());

if (BMI.calcBMI()[0] > BMI.calcBMI()[1]) {
    console.log(`${BMI.name[0]}'s BMI (${BMI.calcBMI()[0]}) is higher than ${BMI.name[1]}'s (${BMI.calcBMI()[1]})!`);
} else {
    console.log(`${BMI.name[1]}'s BMI (${BMI.calcBMI()[1]}) is higher than ${BMI.name[0]}'s (${BMI.calcBMI()[0]})!`);
}

/*
//////////////////////////////////////////////////////////////////////////
const bills = [125, 555, 44];
const calcTip = bills => bills >= 50 && bills<= 300 ? bills * 0.15 : bills * 0.2;
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [
    bills[0] + tips[0], 
    bills[1] + tips[1], 
    bills[2] + tips[2]
];

console.log(bills, tips, total);


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