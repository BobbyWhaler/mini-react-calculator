import './App.css';
import Display from "./components/Display.js";
import ButtonPad  from "./components/ButtonPad.js";
import { useState } from 'react';

function App() {

const [display, setDisplay] = useState("0")

  return (
    <div className="App">
      <header className="App-header">
        Mini Calculator
      </header>
      <div className="App-container">
        <Display display={display}/>
        <ButtonPad setDisplay={setDisplay}/>
      </div>
    </div>
  );
}

export default App;
