// 20% discount === 
// 20/100*100

const getTex = (amount, texRate) => amount * texRate /100;
const add = (p, q) => p + q;

// single parameter

const getSquare = (x) => x * x;
const getHalf = num => num / 2;
const fristElement = nums => nums[0];
const logIt = () => console.log('hello world');

console.log(getSquare(2));
console.log(getHalf(10));
console.log(fristElement([10, 20, 30, 40]));
console.log(logIt());