import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AllPetsBoxStyle, PetsBoxStyle } from "../pages/StyledComponents";
import { OrangeButton, WhiteButton } from "./Button";

export const PetsBox = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const date = new Date().toLocaleDateString();

  const fetchData = () => {
    axios
      .get("https://glittery-dull-snickerdoodle.glitch.me/v1/pets")
      .then((res) => setData(res.data))
      .catch((error) => console.error(error))
      .finally(() => {
        setTimeout(() => {
          setIsLoading(false);
        }, 1_000);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const navigateToViewLog = useNavigate();

  const handleClickViewLog = (id: number) => {
    navigateToViewLog(`/health-log/${id}`);
  };

  const deletePet = (id: number, name: string) => {
    const isConfirmed = window.confirm(`Do you want to delete pet ID ${name}?`);

    if (isConfirmed) {
      axios
        .delete(`https://glittery-dull-snickerdoodle.glitch.me/v1/pets/${id}`)
        .then(() => fetchData())
        .catch((error) => console.error(error));
    }
  };

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <AllPetsBoxStyle>
          {data.map((value: any) => {
            if (value.archived === 0) {
              return (
                <PetsBoxStyle key={value.id}>
                  <p>{value.name}</p>
                  <p>{date}</p>
                  <p>{value.client_email}</p>
                  <OrangeButton
                    text="View log"
                    onPress={() => handleClickViewLog(value.id)}
                  />
                  <WhiteButton
                    text="Delete"
                    onPress={() => deletePet(value.id, value.name)}
                  />
                </PetsBoxStyle>
              );
            }
          })}
        </AllPetsBoxStyle>
      )}
    </>
  );
};
