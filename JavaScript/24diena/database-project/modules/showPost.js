const postElement = document.createElement("p");

const showPost = (post) => {
  postElement.innerHTML = JSON.stringify(post);

  document.body.append(postElement);
};

export { showPost };
