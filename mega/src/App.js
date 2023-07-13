import logo from "./logo.svg";
import "./App.css";
import { useGlobalContext } from "./contex";

function App() {
  const [name, setName] = useGlobalContext();
  const [change, setChange] = useGlobalContext();

  console.log(name);

  return (
    <div className="App">
      <header className="App-header">
        <h1>More to come</h1>
        <button
          onClick={() => {
            setChange(!name);
          }}
        >
          Change Name
        </button>
        <h3>{name ? <h2>Chibundu</h2> : <h2>Onyinye</h2>}</h3>
      </header>
    </div>
  );
}

export default App;
