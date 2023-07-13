import logo from "./logo.svg";
import "./App.css";
import { useGlobalContext } from "./contex";

function App() {
  const [name, setName] = useGlobalContext();

  console.log(name);

  return (
    <div className="App">
      <header className="App-header">
        <h1>More to come</h1>
        <button
          onClick={() => {
            setName("Chibundu");
          }}
        >
          Change Name
        </button>
        <h3>{name}</h3>
      </header>
    </div>
  );
}

export default App;
