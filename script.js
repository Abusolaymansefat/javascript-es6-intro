console.log("json is a data format");

const person = {
          name: ' habib',
          age: 20,
          isRich: false,
          hobbies: ['coding','gaming', 'travelling'],
          address: {
                    city: 'dhaka',
                    country: 'bangladesh'
          },
          money: 30000,
}

console.log('person object', person, typeof person);


// JSON -> javascript object notation

const personJSON = JSON.stringify(person);
console.log('person json', personJSON, typeof personJSON);


const personObj = JSON.parse(personJSON);
// console.log(personJSON);