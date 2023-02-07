import "./App.css";
import { AccountInfo } from "./components/AccountInfo";
import { AccountInfoContainer } from "./components/AccountInfo.styled";
import { BorderContainer } from "./components/BorderContainer";
import { MainRouter } from "./components/MainRouter";

function App() {
  return (
    <div className="App">
      <BorderContainer>
        <p>Sveiki!</p>
      </BorderContainer>

      {/* <MainRouter/> */}

      <AccountInfoContainer>
        <AccountInfo account={{ name: "Alicija", birthdate: new Date() }} />
      </AccountInfoContainer>
    </div>
  );
}

export default App;
