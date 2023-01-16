import "./App.css";
import Card from "./components/card/Card";
import Count from "./components/count/Count";
import Heros from "./data/Heros";

const App: React.FC = () => {
  return (
    <div className="App">
      {Heros.map((hero) => (
        <Card key={hero.id} superHero={hero} />
      ))}
      <Count />
    </div>
  );
};

export default App;
