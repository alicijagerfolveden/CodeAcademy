import { createTable } from "./modules/createTable.js";
import { getCars } from "./modules/getCars.js";
// import { deleteCar } from "./modules/deleteCar.js";

const cars = await getCars();

// const onCarDelete = (deletedId) => {
//   console.log(products);
//   products = products.filter((product) => product.id !== deletedId);

//   renderProducts(products);
// };

createTable(cars);
