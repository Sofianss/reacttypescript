import React from "react";
import "./App.css";
import Card from "./components/Card";
import Heros from "./data/Heros";
import SuperHeros from "./models/SuperHeros";

const App: React.FC = () => {
  const heros: SuperHeros[] = Heros;
  return (
    <div className="App">
      {heros.map((hero) => (
        <Card superHeros={hero} />
      ))}
    </div>
  );
};

export default App;
