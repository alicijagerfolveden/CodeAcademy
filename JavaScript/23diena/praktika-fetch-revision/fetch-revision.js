const showPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts"); // /zodis - end point
  const posts = await response.json();

  console.log(posts);
};

await showPosts();

const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
const posts = await response.json();
