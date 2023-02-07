import styled from "styled-components";

export const NavigationContainer = styled.nav`
  display: flex;
  justify-content: space-around;
  padding: 30px;
  a {
    text-decoration: none;
    color: black;
  }
`;

export const ButtonStyled = styled.button`
  border: 3px solid blue;
  padding: 20px;
  background-color: cyan;
  border-radius: 10px;
  :hover {
    background-color: blue;
    color: white;
  }
`;

export const HomeTable = styled.div`
  display: flex;
  justify-content: center;
  table {
    border-collapse: collapse;
  }
  table td,
  th,
  tr {
    border: 1px solid violet;
    width: 100px;

    :hover {
      background-color: yellow;
    }
  }
`;
