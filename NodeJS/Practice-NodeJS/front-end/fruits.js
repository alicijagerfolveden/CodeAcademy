const getFruits = async () => {
  const request = await fetch("http://localhost:5000/fruits");
  const fruits = await request.json();
  return fruits;
};

const showFruits = (value) => {
  const fruitsBox = document.createElement("div");

  value.forEach((fruit) => {
    const fruitBox = document.createElement("p");
    const isSweet = fruit.isSweet ? `it is sweet` : `it's not sweet`;

    fruitBox.textContent = `Fruit ${fruit.name} is color ${fruit.color} and ${isSweet}`;

    fruitsBox.append(fruitBox);
  });
  document.body.append(fruitsBox);
};

const fruits = await getFruits();

showFruits(fruits);
