const heightMark = 1.88;
const massMark = 95;
const heightJohn = 1.76;
const massJohn = 85;

const BMIJohn = massJohn / (heightJohn ** 2); 
const BMIMark = massMark / (heightMark * heightMark);

console.log (BMIMark, BMIJohn)

const markHigherBMI = BMIMark > BMIJohn
console.log(markHigherBMI);