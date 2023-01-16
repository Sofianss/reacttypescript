import "./App.css";
import Card from "./components/Card";
import Heros from "./data/Heros";

const App: React.FC = () => {
  return (
    <div className="App">
      {Heros.map((hero) => (
        <Card key={hero.id} superHero={hero} />
      ))}
    </div>
  );
};

export default App;
