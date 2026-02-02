// const poem = 'Roses are red
// are blue'

const poem = ` Roses are red
are blue
violets are purple`

// console.log(poem)

function sum(num1, num2) {
          const result = num1 + num2;
          // const output = 'the sum of ' + num1 + ' and ' + num2 + ' is ' + result;
          const output = `the sum of ${num1} and ${num2} is ${result}`;
          console.log(output)
}

// sum(20, 30);


// const price = 100;
// // const discountedPrice = `the price after 20% discount is ${price - (price * 0.2)}`;
// const discountedPrice = `The price after 10% discount is ${price - (price * 0.1)}`
// console.log(discountedPrice)


// Array function declaration
function add (a, b){
          return a + b
}
// function expression 
const addition = function(a , b){
          return a + b;
}

const result = addition(10,30);
console.log(result)