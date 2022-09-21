// document.querySelector("button").addEventListener(
//   "click",
//   (myName = () => {
//     alert("Alicija");
//   })
// );

// document.querySelector("button").addEventListener(
//   "click",
//   (aboutMe = () => {
//     document.querySelector("p").innerHTML =
//       "Mokausi programavimo kalbos JavaScript.";
//   })
// );

let counter = 0;

document.querySelector("button").addEventListener(
  "click",
  (addPlusOne = () => {
    counter++;
    document.querySelector("h1").innerHTML = counter;
  })
);

document.querySelector("p").addEventListener(
  "copy",
  (dontCopy = () => {
    alert("DON'T COPY!!!");
  })
);

document.getElementById("randomNumber").addEventListener(
  "click",
  (generateRandomNumber = () => {
    document.querySelector("h2").innerHTML = Math.floor(
      Math.random() * 100 + 1
    );
  })
);

document
  .getElementById("adult")
  .addEventListener(
    "click",
    (forAdults = () => (document.querySelector("h3").innerHTML = "Alus"))
  );
document
  .getElementById("child")
  .addEventListener(
    "click",
    (forChildren = () => alert("nepilnametis - nieko neturime"))
  );

function generateRandomNumberTo3() {
  return Math.floor(Math.random() * 3 + 1);
}
const randomNumberTo3 = generateRandomNumberTo3();
console.log(randomNumberTo3);

document
  .getElementById("firstNumber")
  .addEventListener("click", () =>
    randomNumberTo3 === 1 ? alert("YAY!") : alert("Nay...")
  );

document
  .getElementById("secondNumber")
  .addEventListener("click", () =>
    randomNumberTo3 === 2 ? alert("YAY!") : alert("Nay...")
  );

document
  .getElementById("thirdNumber")
  .addEventListener("click", () =>
    randomNumberTo3 === 3 ? alert("YAY!") : alert("Nay...")
  );

document
  .getElementById("dontclic")
  .addEventListener(
    "click",
    () => (document.querySelector("h4").innerHTML = "Neklausote manęs")
  );

document
  .querySelector("h5")
  .addEventListener(
    "mousemove",
    () => (document.querySelector("h5").innerHTML = "Kiek galima neklausyti?!")
  );
