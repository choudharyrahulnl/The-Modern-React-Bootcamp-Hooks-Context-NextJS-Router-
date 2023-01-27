import './App.css';
import React from "react";
import RandomNumber from "./RandomNumber";

function App() {
  return (
    <div className="App">
      <RandomNumber maxNum={10} />
    </div>
  );
}

export default App;
