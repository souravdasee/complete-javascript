// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark / (heightMark * heightMark);
// const BMIJohn = massJohn / (heightJohn ** 2); 

// // console.log (BMIMark, BMIJohn);

// const markHigherBMI = BMIMark > BMIJohn;
// // console.log(markHigherBMI);

// // if (markHigherBMI) {
// //     console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
// // } else {
// //     console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
// // }

const avgDolphins = (97 + 112 + 101) / 3;
const avgKoalas = (109 + 95 + 123) / 3;
const minScore = 100;

console.log(avgDolphins, avgKoalas);

if ((avgDolphins > avgKoalas) && (avgDolphins >= minScore)) {
    console.log('Winner is Dolphins');
} else if ((avgDolphins === avgKoalas) && (avgDolphins>= minScore) && (avgKoalas >= minScore)) {
    console.log('Draw');
} else if ((avgDolphins < avgKoalas) && (avgKoalas >= minScore)) {
    console.log('Winner is Koalas');
} else {
    console.log('Winner have not minimun score');
}