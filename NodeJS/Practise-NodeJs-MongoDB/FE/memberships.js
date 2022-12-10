const getMemberships = async () => {
  const request = await fetch("http://localhost:5000/memberships");
  const memberships = await request.json();

  showMemberships(memberships);
};

const showMemberships = (value) => {
  const membershipsSection = document.querySelector("#memberships");

  membershipsSection.replaceChildren();

  const membershipsBox = document.createElement("div");

  membershipsBox.setAttribute("class", "memberships-box");

  value.forEach((membership) => {
    const membershipBox = document.createElement("div");
    const nameOfMembership = document.createElement("p");
    const descriptionOfMembership = document.createElement("p");
    const deleteButton = document.createElement("button");
    const deleteButtonImg = document.createElement("img");

    membershipBox.setAttribute("class", "membership-box");
    membershipBox.setAttribute("id", `membership-box-${membership._id}`);
    nameOfMembership.setAttribute("class", "membership-name-price");
    descriptionOfMembership.setAttribute("class", "membership-description");
    deleteButton.setAttribute("class", "delete-button");
    deleteButton.setAttribute("id", `${membership._id}`);

    nameOfMembership.textContent = `$${membership.price.toFixed(2)} ${
      membership.name
    }`;

    descriptionOfMembership.textContent = `${membership.description}`;

    deleteButtonImg.src = "./icon-trash.png";

    deleteButton.append(deleteButtonImg);

    membershipBox.append(
      nameOfMembership,
      descriptionOfMembership,
      deleteButton
    );

    membershipsBox.append(membershipBox);

    const deleteMembership = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/memberships/${membership._id}`,
          {
            method: "DELETE",
          }
        );

        const isPostDeleted = response.ok;

        if (isPostDeleted) {
          await getMemberships();
        }
      } catch (err) {
        console.log(err);
      }
    };

    deleteButton.addEventListener("click", deleteMembership);
  });

  membershipsSection.append(membershipsBox);
};

const memberships = await getMemberships();
