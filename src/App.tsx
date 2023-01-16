import "./App.css";
import Count from "./components/count/Count";
import HerosList from "./pages/HerosList";

const App: React.FC = () => {
  return (
    <div className="App">
      <HerosList />
      <Count />
    </div>
  );
};

export default App;
