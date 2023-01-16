import React from "react";
import "./App.css";
import Card from "./components/Card";
import Heros from "./data/Heros";

const App: React.FC = () => {
  return (
    <div className="App">
      {Heros.map((hero) => (
        <Card {...hero} />
      ))}
    </div>
  );
};

export default App;
