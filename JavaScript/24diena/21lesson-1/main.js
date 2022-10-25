const renderUserCard = (user) => {
  const userName = `${user.name.first} ${user.name.last}`;
  const userAge = user.dob.age;
  const userEmail = user.email;

  const userCard = document.createElement("div");
  const placeImg = document.createElement("img");
  const placeName = document.createElement("h4");
  const placeAge = document.createElement("h5");
  const placeEmail = document.createElement("h6");

  placeImg.src = user.picture.large;

  placeImg.alt = `${userName} profile foto`;

  placeName.textContent = userName;

  placeAge.textContent = userAge;

  placeEmail.textContent = userEmail;

  userCard.append(placeImg, placeName, placeAge, placeEmail);
  document.body.append(userCard);
};

const getUsers = async () => {
  try {
    const response = await fetch("https://randomuser.me/api/");

    const randomUser = await response.json();

    const randomUserInfo = randomUser.results[0];

    console.log(randomUserInfo);
    renderUserCard(randomUserInfo);
  } catch (error) {
    console.error(error);
  }
};

getUsers();
