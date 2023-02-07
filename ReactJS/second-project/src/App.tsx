import logo from "./logo.svg";
import "./App.css";
import { Form } from "./components/Form";
import { NoteForm } from "./components/NoteForm";
import { RandomNumberGenerator } from "./components/RandomNumberGenerator";
import { FirstComponent } from "./components/FirstComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Labas</p>
        <p>Studentai</p>
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <main>
        {/* <Form /> */}

        {/* <NoteForm>
          <h1>Notes App</h1>
          <h2>Welcome</h2>
        </NoteForm> */}
        <RandomNumberGenerator />
        <FirstComponent />
      </main>
    </div>
  );
}

export default App;
