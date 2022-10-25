const tableOfGuests = (guests) => {
  const createTable = document.createElement("table");
  const heading = document.createElement("tr");
  const headingName = document.createElement("th");
  const headingPlusOne = document.createElement("th");
  const headingAttending = document.createElement("th");

  headingName.innerHTML = "Name";

  headingPlusOne.innerHTML = "Plus one";

  headingAttending.innerHTML = "Attending";

  heading.append(headingName, headingPlusOne, headingAttending);

  createTable.append(heading);

  guests.forEach((element) => {
    const createTr = document.createElement("tr");
    const createTdName = document.createElement("td");
    const createTdPlusOne = document.createElement("td");
    const createTdAttending = document.createElement("td");

    const name = element.name;

    const plusOne = element.plusOne ? "+" : "-";

    const attending = element.attending ? "+" : "-";

    createTdName.innerHTML = name;

    createTdPlusOne.innerHTML = plusOne;

    createTdAttending.innerHTML = attending;

    createTr.append(createTdName, createTdPlusOne, createTdAttending);

    createTable.append(createTr);

    document.body.append(createTable);
  });
};

const getData = async () => {
  try {
    const request = await fetch(
      "https://boiling-reaches-93648.herokuapp.com/week-3/wedding"
    );
    const response = await request.json();

    tableOfGuests(response);

    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

getData();
