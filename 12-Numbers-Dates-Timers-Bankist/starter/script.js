'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2023-09-27T17:01:17.194Z',
    '2023-09-29T23:36:17.929Z',
    '2023-10-01T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
// Functions

const formatMovementDate = function (date, locale) {
  const calcDisplayPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  const daysPassed = calcDisplayPassed(new Date(), date);
  console.log(daysPassed);

  if (daysPassed === 0) return 'Today';
  if (daysPassed === 1) return 'Yesterday';
  if (daysPassed <= 7) return `${daysPassed} days ago`;

  // const day = `${date.getDate()}`.padStart(2, 0);
  // const month = `${date.getMonth() + 1}`.padStart(2, 0);
  // const year = date.getFullYear();
  // return `${day}/${month}/${year}`;
  return new Intl.DateTimeFormat(locale).format(date);
};

const formatCur = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
};

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const date = new Date(acc.movementsDates[i]);
    const displayDate = formatMovementDate(date, acc.locale);

    const formattedMov = formatCur(mov, acc.locale, acc.currency);

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
    <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${formattedMov}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = formatCur(acc.balance, acc.locale, acc.currency);
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = formatCur(incomes, acc.locale, acc.currency);

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = formatCur(Math.abs(out), acc.locale, acc.currency);

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = formatCur(interest, acc.locale, acc.currency);
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

const startLogOutTimer = function () {
  const tick = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);

    // In each call, print the remaining time to UI
    labelTimer.textContent = `${min}:${sec}`;

    // When 0 seconds, stop timer and log out user
    if (time === 0) {
      clearInterval(timer);
      labelWelcome.textContent = 'Log in to get started';
      containerApp.style.opacity = 0;
    }

    // Decrease 1 second
    time--;
  };
  // Set time to 5 minuites
  let time = 120;

  // Call the timer every second
  tick();
  const timer = setInterval(tick, 1000);
  return timer;
};

///////////////////////////////////////
// Event handlers
let currentAccount, timer;

// FAKE ALWAYS LOGGED IN
// currentAccount = account1;
// updateUI(currentAccount);
// containerApp.style.opacity = 100;

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === +inputLoginPin.value) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Create current date and time
    const now = new Date();
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
      // weekday: 'long',
    };
    // const locale = navigator.language;
    // console.log(locale);

    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now);
    // const day = `${now.getDate()}`.padStart(2, 0);
    // const month = `${now.getMonth() + 1}`.padStart(2, 0);
    // const year = now.getFullYear();
    // const hour = `${now.getHours()}`.padStart(2, 0);
    // const min = `${now.getMinutes()}`.padStart(2, 0);
    // labelDate.textContent = `${day}/${month}/${year}, ${hour}:${min}`;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Timer
    if (timer) clearInterval(timer);
    timer = startLogOutTimer();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Add transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);

    // Reset timer
    clearInterval(timer);
    timer = startLogOutTimer();
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    setTimeout(function () {
      // Add movement
      currentAccount.movements.push(amount);

      // Add loan date
      currentAccount.movementsDates.push(new Date().toISOString());

      // Update UI
      updateUI(currentAccount);

      // Reset timer
      clearInterval(timer);
      timer = startLogOutTimer();
    }, 2500);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/*
///////////////////////013 Timers setTimeout and setInterval///////////////

// setTimeout
const ingredients = ['olives', 'spinach'];
const pizzaTimer = setTimeout(
  (ing1, ing2) => console.log(`Here is your pizza with ${ing1} & ${ing2} 🍕`),
  3000,
  ...ingredients
);
console.log('Waiting...');

if (ingredients.includes('spinach')) clearTimeout(pizzaTimer);

// setInterval
setInterval(function () {
  const now = new Date();
  const options = {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  };
  console.log(new Intl.DateTimeFormat(now, options).format(now));
}, 1000);

/*
////////////////////////012 Internationalizing Numbers (Intl)/////////////]

const num = 93787131.13431;

const options = {
  style: 'currency',
  unit: 'celsius',
  currency: 'EUR',
  // useGrouping: false,
};

console.log('US:  ', new Intl.NumberFormat('en-US', options).format(num));
console.log('Germany:', new Intl.NumberFormat('de-DE', options).format(num));
console.log('Syria:  ', new Intl.NumberFormat('ar-SY', options).format(num));
console.log(
  navigator.language,
  new Intl.NumberFormat(navigator.language, options).format(num)
);

/*
////////////////////////010 Operations With Dates////////////////////////

const future = new Date(2037, 10, 19, 15, 23);
console.log(+future);

const calcDisplayPassed = (date1, date2) =>
  Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);

const days1 = calcDisplayPassed(new Date(2037, 3, 4), new Date(2037, 3, 14));
console.log(days1);

/*
////////////////////////008 Creating Dates/////////////////////////////

const now = new Date();
console.log(now); //->"Sun Oct 01 2023 18:10:39 GMT+0530 (India Standard Time)"

console.log(new Date('Oct 01 2023 18:15:28')); //->"Sun Oct 01 2023 18:15:28 GMT+0530 (India Standard Time)"
console.log(new Date('December 24, 2023')); //->"Sun Dec 24 2023 00:00:00 GMT+0530 (India Standard Time)"
console.log(new Date(account1.movementsDates[0])); //->"Tue Nov 19 2019 03:01:17 GMT+0530 (India Standard Time)"

console.log(new Date(2037, 10, 19, 15, 23, 5)); //->"Thu Nov 19 2037 15:23:05 GMT+0530 (India Standard Time)"
console.log(new Date(2037, 10, 31)); //->"Tue Dec 01 2037 00:00:00 GMT+0530 (India Standard Time)"

console.log(new Date(0)); //->"Thu Jan 01 1970 05:30:00 GMT+0530 (India Standard Time)"
console.log(new Date(3 * 24 * 60 * 60 * 1000)); //->"Sun Jan 04 1970 05:30:00 GMT+0530 (India Standard Time)"

// Working with dates
const future = new Date(2037, 10, 19, 15, 23);
console.log(future); //->"Thu Nov 19 2037 15:23:00 GMT+0530 (India Standard Time)"
console.log(future.getFullYear()); //->2037
console.log(future.getMonth()); //->10
console.log(future.getDate()); //->19
console.log(future.getDay()); //->4
console.log(future.getHours()); //->15
console.log(future.getMinutes()); //->23
console.log(future.getSeconds()); //->0
console.log(future.getTime()); //->2142237180000
console.log(future.toISOString()); //->"2037-11-19T09:53:00.000Z"

console.log(new Date(2142237180000)); //->"Thu Nov 19 2037 15:23:00 GMT+0530 (India Standard Time)"

console.log(Date.now()); //->1696165199453

future.setFullYear(2040);
console.log(future); //->"Mon Nov 19 2040 15:23:00 GMT+0530 (India Standard Time)"

/*
//////////////////////007 Working with BigInt//////////////////////////

console.log(2 ** 53 - 1); //->9007199254740991
console.log(Number.MAX_SAFE_INTEGER); //->9007199254740991
console.log(2 ** 53 + 1); //->9007199254740992
console.log(2 ** 53 + 2); //->9007199254740994
console.log(2 ** 53 + 3); //->9007199254740996
console.log(2 ** 53 + 4); //->9007199254740996

console.log(1283712937163781637816532853127836n); //->1283712937163781637816532853127836n
console.log(BigInt(9384714723942374892374231)); //->9384714723942374569934848n

// Operations
console.log(1000n + 1000n); //->2000n
console.log(
  837128347234813413516735237489374892346723944234234512383743n +
    8345724895712947192347238945729857340578340983450n
); //->837128347243159138412448184681722131292453801574812853367193n
// console.log(Math.sqrt(16n)); //->"Uncaught TypeError: Cannot convert a BigInt value to a number"

const huge = 39058345734857348545834583453784n;
const num = 23;
console.log(huge * BigInt(num)); //->898341951901719016554195419437032n

// Exceptions
console.log(20n > 15); //->true
console.log(20n === 20); //->false
console.log(typeof 20n); //->"bigint"
console.log(20n == '20'); //->true

console.log(huge + ' is REALLY big!!!'); //->39058345734857348545834583453784 is REALLY big!!!

// Divisions
console.log(11n / 3n); //"Cuts the decimal parts"  ->3n
console.log(10 / 3); //->3.3333333333333335

/*
//////////////////////006 Numeric Separators///////////////////////////
// 287,460,000,000
const diameter = 287_460_000_000;
console.log(diameter); //->287460000000

const price = 345_99;
console.log(price); //->34599

const transferFee1 = 15_00;
const transferFee2 = 1_500;

const PI = 3.14_15;
console.log(PI); //->3.1415

console.log(Number('230_000')); //->NaN
console.log(parseInt('230_000')); //->230

/*
/////////////////////005 The Remainder Operator////////////////////////
console.log(5 % 2); //->1
console.log(5 / 2); // 5 = 2 * 2 + 1  ->2.5

console.log(8 % 3); //->2
console.log(8 / 3); // 8 = 2 * 3 + 2  ->2.6666666666666665

const isEven = n => n % 2 === 0;
console.log(isEven(8)); //->true
console.log(isEven(23)); //->false
console.log(isEven(514)); //->true

labelBalance.addEventListener('click', function () {
  [...document.querySelectorAll('.movements__row')].forEach(function (row, i) {
    // 0, 2, 4, 6
    if (i % 2 === 0) row.style.backgroundColor = 'orangered';
    // 0, 3, 6, 9
    if (i % 3 === 0) row.style.backgroundColor = 'blue';
  });
});

/*
//////////////////////004 Math and Rounding///////////////////
// Root and Square-root of a number
console.log(2 ** 3); //-> 8
console.log(Math.sqrt(25)); //->5
console.log(25 ** (1 / 2)); //->5
console.log(8 ** (1 / 3)); //->2

// Getting max and min value
console.log(Math.max(5, 18, 23, 11, 2)); //->23
console.log(Math.max(5, 18, '23', 11, 2)); //->23
console.log(Math.max(5, 18, '23px', 11, 2)); //->NaN

console.log(Math.min(5, 18, 23, 11, 2)); //->2

// Generating perimeter of a circle
console.log(Math.PI * Number.parseFloat('10px') ** 2); //->314.1592653589793

// Generating random numbers
console.log(Math.trunc(Math.random() * 6) + 1); //->4("Generates random number from 1 to 6")

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min) + 1) + min;
// 0...1 -> 0...(max - min) -> min...max
console.log(randomInt(10, 20)); //->17("Generates random number from max to min")

// Rounding integers
console.log(Math.round(23.3)); //->23
console.log(Math.round(23.9)); //->24

console.log(Math.ceil(23.3)); //->24
console.log(Math.ceil(23.9)); //->24

console.log(Math.floor(23.3)); //->23
console.log(Math.floor('23.9')); //->23

console.log(Math.trunc(23.3)); //->23

console.log(Math.trunc(-23.3)); //->-23
console.log(Math.round(-23.3)); //->-23

// Rounding decimals
console.log((2.7).toFixed(0)); //->"3"
console.log((2.7).toFixed(3)); //->"2.700"
console.log((2.345).toFixed(2)); //->"2.35"
console.log(+(2.7345).toFixed(2)); //->2.73

/*
//////////////////////////////////////////////////////////////////
console.log(23 === 23.0);

// Base 10 - 0 to 9. 1/10 = 0.1. 3/10 = 3.3333333333
//Binary base 2 - 0 1
console.log(0.1 + 0.2);
console.log(0.1 + 0.2 === 0.3);

// Conversion
console.log(Number('23'));
console.log(+'23');

// Parsing
console.log(Number.parseInt('30px', 10));
console.log(Number.parseInt('e23', 10));

console.log(Number.parseInt('  2.5rem  '));
console.log(Number.parseFloat('  2.5rem  '));

// console.log(parseFloat('  2.5rem  '));  // Not used in mordern JS

// Check if value is NaN
console.log(Number.isNaN(20));
console.log(Number.isNaN('20'));
console.log(Number.isNaN(+'20X'));
console.log(Number.isNaN(23 / 0));

// Check if value is number
console.log(Number.isFinite(20));
console.log(Number.isFinite('20'));
console.log(Number.isFinite(+'20X'));
console.log(Number.isFinite(23 / 0));

console.log(Number.isInteger(23));
console.log(Number.isInteger(23.0));
console.log(Number.isInteger(23 / 0));
*/
