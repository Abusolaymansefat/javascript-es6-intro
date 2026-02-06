// js is a dynamically typed programming language,

// let data = 6;

// data = "hollo world";
// data = false;

// data = { name: "john", age: 30}

// data = [5565];
// data = undefined;
// data= null;

// console.log(typeof data);


//js: primitives data types: string, number, boolean, undefined, null, symbol, bigint


//js : non primitive data types: objects, arrays, functions, null

let money;
// console.log(money); //undefiend

// function total (a, b){
//           console.log('value of a parametier ', a, b)
// }

// total()


let data;
data = 0;
data = '';
data = ' ';
data = false;
data = true;
data = null;
data =false;
console.log('value of data ', data);
if(data){
          console.log('value of data is truthy');
}
else {
          console.log(data, 'value of data is falsy')
}


// if i need to capture the false value to go the inside if block
// use logical not !
if(!data ){
          console.log('inside if with false value')
}

// ca[ure all positive value
if(data === true){
          console.log('only true value will go inside if block')
}