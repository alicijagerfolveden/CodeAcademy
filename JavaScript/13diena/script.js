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
