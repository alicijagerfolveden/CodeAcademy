import axios from "axios";
import { useState } from "react";
import { WhiteButton } from "../small-components/Button";
import { TitleComponent } from "../small-components/TitleComponent";
import { FormStyling } from "./StyledComponents";

export const AddMedications = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [inputData, setInputData] = useState({});

  const handleNameChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setName(event.target.value);
  };

  const handleDescriptionChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setDescription(event.target.value);
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    setInputData({ name: name, description: description });
    console.log(inputData);

    axios
      .post("https://glittery-dull-snickerdoodle.glitch.me/v1/logs/", inputData)
      .catch((error) => console.error(error));
  };

  return (
    <>
      <TitleComponent>
        <h1>Add Medication</h1>
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
          <label htmlFor="">Description</label>
          <input
            value={description}
            onChange={handleDescriptionChange}
            name="description"
            required
          />
          <WhiteButton text="Add" type="submit" />
        </form>
      </FormStyling>
    </>
  );
};
