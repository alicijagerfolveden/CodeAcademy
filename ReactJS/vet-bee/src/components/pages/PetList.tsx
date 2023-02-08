import { useNavigate } from "react-router-dom";
import { OrangeButton } from "../small-components/Button";
import { PetsBox } from "../small-components/PetsBox";
import { TitleComponent } from "../small-components/TitleComponent";

export const PetList = () => {
  const navigateToAddPet = useNavigate();

  const handleClick = () => {
    navigateToAddPet("/add-pet");
  };

  return (
    <>
      <TitleComponent>
        <h1>Pet List</h1> <OrangeButton text="Add Pet" onPress={handleClick} />
      </TitleComponent>
      <PetsBox />
    </>
  );
};
