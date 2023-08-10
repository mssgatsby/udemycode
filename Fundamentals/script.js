"use strict";
/*
// math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 => 2 * 2 * 2

const firstName = "Jonas";
const lastName = "Schmedtman";
console.log(firstName + " " + lastName);

// assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10
x *= 4; // x = x * 4
x++; // x = x + 1
console.log(x);

// comparison operators => for booleans
console.log(ageJonas > ageSarah); // <; >; <=; >=
console.log(ageSarah >= 18);
*/

/*const age = 12;
// const isOldEnough = age >= 18;

if (age >= 18) {
  console.log(`Sarah can start driving🚗`);
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait for another ${yearsLeft} years :)`);
}

const birthYear = 2012;

let century;
if(birthYear<=2000){
    century = 20;
} else{
    century = 21;
}
console.log(century);*/

// 5 falsy values: 0; ''; undefined; null; NaN

/*console.log(Boolean({}));
console.log(Boolean("Sarah"));*/

/*const age = "18";
if (age === 18) console.log("strict");

if (age == 18) console.log("loose");

const favourite = Number(prompt("What's your favourite color?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
  console.log("Cool!");
}

// != and !== mean not equal
if (favourite !== 23) {
  console.log("Why not 23?");
}*/

/*const hasDriversLicense = true;
const hasGoodVision = false;

console.log(hasGoodVision && hasDriversLicense);
console.log(hasGoodVision || hasDriversLicense);
console.log(!hasGoodVision);

if (hasGoodVision && hasDriversLicense) {
  console.log("You can drive");
} else {
  console.log("Dont drive");
}*/

/*const day = "wednesday";

switch (day) {
  case "monday": // strict comparison ===
    console.log("Monday");
    break;
  case " tuesday":
    console.log("tuesday");
    break;
  case "wednesday":
  case "thursday":
    console.log("Monda");
    break;
  default:
    console.log("Moay");
    break;
}

// Conditional (Ternary) Operator
const age = 23;
// age >= 18;
//   ? console.log("I like to drink wine🍷")
//   : console.log("I like to drink water");

const drink = age >= 18 ? "wine" : "water";
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = "wine";
} else {
  drink2 = "water";
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? "wine" : "water"}`);*/

/*let hour = 12;
if (hour < 12 && hour > 6) {
  console.log("Good morning");
} else if (hour > 12 && hour < 18) {
  console.log("Good arternoon");
} else {
  console.log("Good night");
}*/

// function logger() {
//   console.log("My name is Jonas");
// }

// calling / running / invoking the function
// logger();

/*function fruitProceccor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}

fruitProceccor(3, 5);

const appleJuice = fruitProceccor(5, 0);
console.log(appleJuice);*/

/*function cutFruit(fruit) {
  return fruit * 4;
}

function fruitProceccor(apples, oranges) {
  const appleJuice = cutFruit(apples);
  const orangeJuice = cutFruit(oranges);

  const juice = `Juice with ${appleJuice} apples and ${orangeJuice} oranges`;
  return juice;
}

console.log(fruitProceccor(2, 4));

const calcAge = function (birthYear) {
  return 2023 - birthYear;
};

const retirement = function (birth) {
  const retireAge = 65 - calcAge(birth);
  if (retireAge < 0) {
    console.log(`You are retired for ${retireAge} years`);
  } else {
    console.log(`You have ${retireAge} years to retire`);
    return;
  }
};

retirement(1920);*/

/*const friends = ["Micheal", "Steven", "Peter"];
const year = new Array(1991, 1982, 1093, 2034);

console.log(year[0]);

console.log(friends.length);
console.log(friends[friends.length - 1]); // last element or array

friends[2] = "Jay";
console.log(friends);
// We can change elements of array even if it is inside of const. But we cannot change whole array elements. friends = ['Jay', 'Mark'] is wrong.

const firstName = "Jonas";
const jonas = [firstName, "Schmedtman", 2037 - 1991, friends];
console.log(jonas); // We can write any type of data inside arrays, interchangebly

// Add elements: push, unshift
const newArray = friends.push("Ann"); // if it is in variable, shows length
console.log(friends); // Add element at the element
console.log(newArray);

friends.unshift("Emma"); // Add element at the beginning
console.log(friends);

// Remove elements: pop
friends.pop(); // Removes last element
const popped = friends.pop(); // if it is in variable, shows which is removed
console.log(friends);
console.log(popped);

friends.shift();
console.log(friends);*/

/*function calcTip(bill) {
  if (bill >= 50 && bill <= 300) {
    return bill * 0.15;
  } else {
    return bill * 0.2;
  }
}
console.log(calcTip(100));

const bills = [125, 555, 44];
let tip1 = calcTip(bills[0]);
let tip2 = calcTip(bills[1]);
let tip3 = calcTip(bills[2]);
const tips = [tip1, tip2, tip3];
console.log(bills, tips);

const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(totals);*/

/*const jonas = {
  firstName: "Jonas",
  lastName: "Brown",
  age: 2037 - 1991,
  friends: ["Mike", "Steven"],
};

console.log(jonas.lastName);
console.log(jonas["lastName"]);

const nameKey = "Name";
console.log(jonas["first" + nameKey]);

// const interestedIn = prompt(
//   "What do you want to know? firstName, lastName, job"
// );

// if (jonas[interestedIn]) {
//   console.log(jonas[interestedIn]);
// } else {
//   console.log("Wrong request");
// }

jonas.location = "Italy";
jonas["twitter"] = "maiek";
console.log(jonas);

const bestFriend = jonas.friends[0];
console.log(bestFriend);

const years = [1991, 2007, 1959, 2020];
const ages = [];
for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}
console.log(ages);*/

/*const jonas = {
  firstName: "Jonas",
  lastName: "Brown",
  age: 2037 - 1991,
  friends: ["Mike", "Steven"],
};

for (let i = 0; i < jonas.length; i++) {
  // if (typeof jonas[i] !== "string") break;

  console.log(jonas[i], typeof jonas[i]);
}*/

// const toEven = function (num) {
//   let str = num.toString();
//   let result = "";

//   for (let i = 0; i < str.lenght; i++) {
//     let digit = str[i];
//     result += str;
//     if (str % 2 === 0) {
//       result += "-";
//     }
//   }
//   // console.log(num);

//   return result;
// };
// let num1 = 3958402937;

// const res1 = toEven(num1);
// console.log(res1);

// function addHyphenAfterEven(number) {
//   const numStr = number.toString();
//   let result = "";

//   for (let i = 0; i < numStr.length; i++) {
//     const digit = numStr[i];
//     result += digit;
//     if (digit !== "0" && digit % 2 === 0) {
//       result += "-";
//     }
//   }

//   return result;
// }

// const givenNumber = 1234567890;
// const result = addHyphenAfterEven(givenNumber);
// console.log(result);

let givenNumber = 39840284;

const addHyphen = function (num) {
  let str = num.toString();
  let result = "";

  for (let i = 0; i < str.length; i++) {
    let digit = str[i];
    result += digit;

    if (digit % 2 === 0) {
      result += "-";
    }
  }
  return result;
};
const nimadir = addHyphen(givenNumber);
console.log(nimadir);
