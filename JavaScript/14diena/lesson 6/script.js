const ticketPrice = 6;
const ticketPriceWithDiscount = ticketPrice / 2;
const ticketPriceForEmerats = ticketPrice / 3;

document.querySelector("form").addEventListener("submit", forForm);
function forForm(event) {
  event.preventDefault();
  const customerAge = document.querySelector("input[name=age]").value;
  if (customerAge > 60) {
    document.querySelector(
      "h1"
    ).innerHTML = `Ticket price ${ticketPriceForEmerats.toFixed(2)} €`;
  } else if (customerAge < 16) {
    document.querySelector(
      "h1"
    ).innerHTML = `Ticket price ${ticketPriceWithDiscount.toFixed(2)} €`;
  } else {
    document.querySelector(
      "h1"
    ).innerHTML = `Ticket price ${ticketPrice.toFixed(2)} €`;
  }

  const criminal = document.getElementById("criminal");
  const notCriminal = criminal.checked;

  if (customerAge >= 18 && customerAge <= 30 && notCriminal) {
    document.querySelector("h2").innerHTML = "Kviečiame į armiją";
  } else {
    document.querySelector("h2").innerHTML = "Jums nešviečia armija";
  }
}
