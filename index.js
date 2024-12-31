// Write a JavaScript function to calculate the sum of two numbers.

const sumOFTwonumber = (a, b) => {
  return a + b;
};

const sum = sumOFTwonumber(2, 3);
console.log(sum);

// Write a JavaScript program to find the maximum number in an array.
const array = [1, 4, 2, 8, 9, 0];

const maxNum = array.reduce((acc, curr) => {
  return acc > curr ? acc : curr;
});
console.log("maxNum", maxNum);

//multiplebytwo
const arr = [1, 4, 2, 8, 9, 0];

const multiplebyTwo = arr.map((a) => {
  return a * 2;
});
console.log("multiple", multiplebyTwo);

// Write a JavaScript function to check if a given string is a palindrome (reads the same forwards and backwards).

const palindrome = (str) => {
  return str === str.split("").reverse().join("");
};
console.log(palindrome("hello"));

// . Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers.

const numbers = [2, 1, 3, 6, 4, 7, 8];

const evenNumber = (arr) => {
  return arr.filter((num) => num % 2 === 0);
};
console.log(evenNumber(numbers));

// Write a JavaScript program to calculate the factorial of a given number.
const factorialNumber = (fact) => {
  if (fact === 0 || fact === 1) {
    return 1;
  } else {
    return fact * factorialNumber(fact - 1);
  }
};
console.log(factorialNumber(1));
