const getPost = async (postNumber) => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postNumber}`,
      { method: "GET" } // šio objekto nebūtina pridėti, GET yra default
    );
    const post = await response.json();

    return post;
  } catch (error) {
    console.error(error);
  }
};

export { getPost };
