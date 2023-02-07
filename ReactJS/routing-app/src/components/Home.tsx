import axios from "axios";
import { useEffect, useState } from "react";
import { HomeTable } from "./StyledComponents";

export const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  const fetchData = () => {
    axios
      .get("https://believed-shore-vanadium.glitch.me/")
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

  const deleteRow = (id: number) => {
    const isConfirmed = window.confirm(`Do you want to delete row ID ${id}?`);

    if (isConfirmed) {
      axios
        .delete(`https://believed-shore-vanadium.glitch.me/${id}`)
        .then(() => fetchData())
        .catch((error) => console.error(error));
    }
  };

  return (
    <HomeTable>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Number of People</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {data.map((data: any) => {
                return (
                  <tr key={data.id} onClick={() => deleteRow(data.id)}>
                    <td>{data.id}</td>
                    <td>{data.people}</td>
                    <td>{data.price}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </>
      )}
    </HomeTable>
  );
};
