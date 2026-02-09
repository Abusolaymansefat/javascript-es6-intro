const loadData = () => {
          fetch("https://jsonplaceholder.typicode.com/todos/1")
                    // promise of response
                    .then((res) => res.json())
                    .then((data) => console.log(data))
};


const loadPosts = () => {
          const url = "https://jsonplaceholder.typicode.com/posts"
          fetch(url)
                    .then(res => res.json())
                    .then(data => {
                              // console.log(data)
                              displayPost(data)
                    })
}

const displayPost = (posts) => {

          const postContainer = document.getElementById('post-list');
          // console.log(postContainer)
          // posts.forEach((post) => {
          //           console.log(post)
          // })

          // for (let i = 0 ; i < posts.length; i++){
          //           console.log(posts[i])
          // }

          // for(const post of posts){
          //           console.log(post)
          // }


          posts.forEach((post) => {
                    console.log(post.title);
                    //  create HTML element

                    const li = document.createElement('li');
                    li.innerText = post.title;
                    console.log(li);
                    postContainer.appendChild(li)
          })
}

// console.log('result of fetch', result)


// console.log("json is a data format");

// const person = {
//           name: ' habib',
//           age: 20,
//           isRich: false,
//           hobbies: ['coding','gaming', 'travelling'],
//           address: {
//                     city: 'dhaka',
//                     country: 'bangladesh'
//           },
//           money: 30000,
// }

// console.log('person object', person, typeof person);


// // JSON -> javascript object notation

// const personJSON = JSON.stringify(person);
// console.log('person json', personJSON, typeof personJSON);


// const personObj = JSON.parse(personJSON);
// // console.log(personJSON);