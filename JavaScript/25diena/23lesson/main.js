const getCars = async () => {
  try {
    const response = await fetch("https://robust-safe-crafter.glitch.me/");

    const cars = await response.json();

    console.log(cars);
    return cars;
  } catch (error) {
    console.error(error);
  }
};

getCars();

// try {
//     const response = await fetch(
//       `https://jsonplaceholder.typicode.com/posts/${postNumber}`,
//       { method: "GET" } // šio objekto nebūtina pridėti, GET yra default
//     );
//     const post = await response.json();

//     return post;
