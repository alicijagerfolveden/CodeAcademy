document.querySelector("h1").addEventListener("click", () => {
  document.querySelector("h1").style.color = "red";
  document.querySelector("h1").style.fontSize = "100px";
  document.querySelector("h1").style.textAlign = "center";
});

const button = document.querySelector("button");

button.style = "position:absolute; top:0; left:0;";

let corner = 0;
const cornerStyles = [
  "position:absolute; top:0; right:0;",
  "position:absolute; bottom:0; right:0;",
  "position:absolute; bottom:0; left:0;",
  "position:absolute; top:0; left:0;",
];
function changePosition(event) {
  if (corner < cornerStyles.length) {
    event.target.style.cssText = cornerStyles[corner];
    corner++;
  }
  if (corner === cornerStyles.length) {
    corner = 0;
  }
}

button.addEventListener("click", changePosition);

document.querySelector("input[name=name]").addEventListener("input", () => {
  const inputText = document.querySelector("input[name=name]").value;
  document.body.style.backgroundColor = inputText.length < 3 ? "red" : "green";
});

document
  .getElementById("changeBackgroundColor")
  .addEventListener("click", () => {
    const randomNumber1 = Math.floor(Math.random() * 255);

    const randomNumber2 = Math.floor(Math.random() * 255);

    const randomNumber3 = Math.floor(Math.random() * 255);

    document.getElementById(
      "changeBackgroundColor"
    ).style.backgroundColor = `rgb(${randomNumber1},${randomNumber2},${randomNumber3})`;
  });
