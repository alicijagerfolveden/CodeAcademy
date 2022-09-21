document.querySelector("form").addEventListener("submit", submitting);

function submitting(event) {
  event.preventDefault();
  console.log(event);
}

document
  .querySelector("form")
  .addEventListener("submit", () =>
    alert(document.querySelector("input[name=name]").value)
  );

document
  .querySelector("form")
  .addEventListener("submit", () =>
    document.querySelector("input[name=age]").value >= 18
      ? (document.querySelector("h1").innerHTML = `Vairuoti gali: ${
          document.querySelector("input[name=name]").value
        }`)
      : (document.querySelector("h1").innerHTML = `Dar mokysis vairuoti: ${
          document.querySelector("input[name=name]").value
        }`)
  );
