import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { OrangeButton, WhiteButton } from "../small-components/Button";
import { TitleComponent } from "../small-components/TitleComponent";
import { AllPetsBoxStyle, PetsBoxStyle } from "./StyledComponents";

export const HealthLog = () => {
  const { id } = useParams();

  const [petData, setPetData] = useState<any[]>([]);
  const [petName, setPetName] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [logData, setLogData] = useState([]);
  const date = new Date().toLocaleDateString();

  const navigateToAddPrescritpion = useNavigate();
  const navigateToAddLog = useNavigate();

  const handlePrescritpionClick = () => {
    navigateToAddPrescritpion("/add-prescription");
  };

  const handleLogClick = () => {
    navigateToAddLog("/add-log");
  };

  const fetchPetData = () => {
    axios
      .get(`https://glittery-dull-snickerdoodle.glitch.me/v1/pets`)
      .then((res) => setPetData(res.data))
      .catch((error) => console.error(error));
  };

  const fetchLogData = () => {
    axios
      .get(`https://glittery-dull-snickerdoodle.glitch.me/v1/logs/${id}`)
      .then((res) => setLogData(res.data))
      .catch((error) => console.error(error))
      .finally(() => {
        setTimeout(() => {
          setIsLoading(false);
        }, 1_000);
      });
  };

  useEffect(() => {
    fetchPetData();
    petData.forEach((pet) => {
      if (pet.id == id) {
        const petName = pet.name;
        setPetName(petName);
      }
    });

    fetchLogData();
  }, []);

  return (
    <>
      <TitleComponent>
        <h1>{petName} Health Records</h1>
        <div>
          <OrangeButton
            text="Add Prescription"
            type="button"
            onPress={handlePrescritpionClick}
          />
          <WhiteButton text="Add Log" type="button" onPress={handleLogClick} />
        </div>
      </TitleComponent>
      <>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <AllPetsBoxStyle>
            {logData.map((value: any, i) => {
              if (value.archived === 0) {
                return (
                  <PetsBoxStyle key={i + 1}>
                    <p>{value.description}</p>
                    <p>{value.status}</p>
                    <p>{date}</p>
                  </PetsBoxStyle>
                );
              }
            })}
          </AllPetsBoxStyle>
        )}
      </>
    </>
  );
};
