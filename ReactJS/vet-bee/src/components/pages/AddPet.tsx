import axios from "axios";
import { useContext, useState } from "react";
import { ProductsContext } from "../ProductsContext/ProductsContext";
import { WhiteButton } from "../small-components/Button";
import { TitleComponent } from "../small-components/TitleComponent";
import { FormStyling } from "./StyledComponents";

export const AddPet = () => {
  const products = useContext(ProductsContext);

  // console.log(products); setContext hook

  const [name, setName] = useState("");
  const [dob, setDob] = useState("2000-01-01");
  const [email, setEmail] = useState("");
  const [inputData, setInputData] = useState({});

  const handleNameChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setName(event.target.value);
  };

  const handleDobChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setDob(event.target.value);
  };

  const handleEmailChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setEmail(event.target.value);
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    setInputData({ name: name, dob: dob, client_email: email });

    axios
      .post("https://glittery-dull-snickerdoodle.glitch.me/v1/pets/", inputData)
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };

  return (
    <>
      <TitleComponent>
        <h1>Add Pet</h1>
      </TitleComponent>
      <FormStyling>
        <form onSubmit={handleSubmit}>
          <label htmlFor="">Name</label>
          <input
            name="name"
            value={name}
            onChange={handleNameChange}
            required
          />
          <label htmlFor="">Dob</label>
          <input
            type="date"
            value={dob}
            onChange={handleDobChange}
            name="date"
            required
          />
          <label htmlFor="">Email</label>
          <input
            name="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
          <WhiteButton text="Add" type="submit" />
        </form>
      </FormStyling>
    </>
  );
};
