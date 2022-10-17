const response = await fetch("https://jsonplaceholder.typicode.com/posts");
const posts = await response.json();

const firstPost = posts[0];

console.log(firstPost);

//kaip gauti objektų paramentų pavadinimus

const firstPostParams = Object.keys(firstPost);

console.log(firstPostParams);

// parametras ir reikšmės deriniai

console.log(Object.entries(firstPost));
