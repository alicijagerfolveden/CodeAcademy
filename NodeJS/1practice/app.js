const casual = require("casual");

const city = casual.city;

console.log(city);

const getRandomNumber = () => {
	const number = Math.round(Math.random() * 10);
	return number;
};

getRandomNumber();

const suffix = casual.suffix[getRandomNumber()];
const firstName = casual.first_name;
const lastName = casual.last_name;

console.log(`${suffix} ${firstName} ${lastName}`);

const sayHello = (name) => {
	console.log(`Hello world and ${name}`);
};

sayHello("Alicija");
