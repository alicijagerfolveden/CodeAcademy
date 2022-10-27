const getCars = async () => {
  try {
    const response = await fetch("https://olive-bead-glazer.glitch.me");

    const cars = await response.json();

    console.log(cars);
    return cars;
  } catch (error) {
    console.error(error);
  }
};

export { getCars };
