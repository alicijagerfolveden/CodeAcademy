import { displayPost } from "./displayPost.js";

const deleteButton = document.querySelector("#deleteButton");

await displayPost();

deleteButton.addEventListener("click", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "DELETE",
  });

  const isPostDeleted = response.ok;

  console.log(isPostDeleted);
});
