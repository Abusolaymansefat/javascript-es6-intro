function sum(num1, num2 = 0){
          const total = num1 + num2;
          console.log(num1, num2,total)
}

//NAN --Not a Namber
// sum(20, 40);
// sum(20, 30);

// function multiply(num1 = 0, num2 = 0){

//           const total = num1 * num2;
//           console.log(total)
// }
// // multiply(5, 5)
// multiply(10)

// function multiply (a = 0, b =0){
//           const result = a * b;
//           console.log(result)
// }
// multiply()

function fullName( frist, last = ''){
          const name = frist + ' ' + last;
          console.log(name)
}
// fullName('Abu', 'solayman sefat')

/**
 * add, subtract --> 0
 * 
 * multiply, divide --> 1
 * 
 * 
 */

function add ( a , b){
          let total = 0;
          total = a + b;
          console.log(total)
}

// add(20, 25)


// function with default parameter
function greet ( name = 'Guest'){
          console.log('welcome', name)
}

//calling the function with passing argument
// greet();

greet(' Sefat')