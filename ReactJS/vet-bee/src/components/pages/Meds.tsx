import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { OrangeButton } from "../small-components/Button";
import { TitleComponent } from "../small-components/TitleComponent";
import { MedsTableStyle } from "./StyledComponents";

// todo: kaip padidinti limit iki max? req.query

export const Meds = () => {
  const navigateToAddMedication = useNavigate();

  const handleClick = () => {
    navigateToAddMedication("/add-medication");
  };

  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  const fetchData = () => {
    axios
      .get("https://glittery-dull-snickerdoodle.glitch.me/v1/meds/")
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

  return (
    <>
      <TitleComponent>
        <h1>List of Medications</h1>
        <OrangeButton
          text="Add Medication"
          type="button"
          onPress={handleClick}
        />
      </TitleComponent>
      <div>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <MedsTableStyle>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {data.map((value: any) => {
                  return (
                    <tr key={value.id}>
                      <td>{value.id}</td>
                      <td>{value.name}</td>
                      <td>{value.description}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </MedsTableStyle>
        )}
      </div>
    </>
  );
};
