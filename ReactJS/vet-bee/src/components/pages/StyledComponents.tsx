import styled from "styled-components";

export const HeaderStyle = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid gray;
  img {
    width: 150px;
  }
  div {
    display: flex;
    align-items: center;
  }
  div p {
    color: orange;
    font-size: 50px;
    font-weight: bold;
  }
  nav {
    width: 300px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  nav a {
    text-decoration: none;
    color: orange;
    font-size: 25px;

    :hover {
      color: orangered;
    }
  }
`;

export const FooterStyle = styled.div`
  color: gray;
  align-items: center;
  padding-top: 30px;
`;

export const OrangeButtonStyle = styled.button`
  border: 1px solid orange;
  border-radius: 5px;
  background-color: orange;
  color: white;
  text-transform: uppercase;
  font-weight: bold;
  padding: 10px 40px;

  :hover {
    background-color: orangered;
    border: 1px solid orangered;
  }
`;

export const WhiteButtonStyle = styled.button`
  border: 1px solid orange;
  border-radius: 5px;
  background-color: white;
  color: orange;
  text-transform: uppercase;
  font-weight: bold;
  padding: 10px 30px;

  :hover {
    border: 1px solid orangered;
    color: orangered;
  }
`;

export const TitleStyle = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 50px;
  h1 {
    font-weight: 500;
  }
`;

export const AllPetsBoxStyle = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 25px;
  margin: 50px;
`;

export const PetsBoxStyle = styled.div`
  border: 1px solid gray;
  border-radius: 5px;
  padding: 20px;
  button {
    margin: 30px 5px 5px 5px;
  }

  p:first-child {
    font-size: 25px;
    margin-bottom: 30px;
  }
`;
