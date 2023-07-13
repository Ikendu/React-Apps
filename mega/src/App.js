import logo from "./logo.svg";
import "./App.css";
import { useGlobalContext } from "./contex";

function App() {
  const [name, setName] = useGlobalContext();

  setName("Chibundu");
  

  console.log(name);

  return (
    <div className="App">
      <header className="App-header">
        <h1>More to come</h1>
        <button onClick={()=>{setName("Chibundu")}}
      </header>
    </div>
  );
}

export default App;
