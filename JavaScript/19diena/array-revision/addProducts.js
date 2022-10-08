const addProducts = (productsAmount = 20) => {
  function RandomProduct() {
    const randomNumber = Math.random();
    const roundedNumber = Math.round(randomNumber * 9_000 + 1_000);

    this.price = roundedNumber;

    if (Math.round(randomNumber)) {
      this.color = "black";
    } else {
      this.isAvailable = true;
    }
  }

  for (let index = 0; index < productsAmount; index++) {
    const product = new RandomProduct();
    products.push(product);
  }
};
