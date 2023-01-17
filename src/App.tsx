import Header from "./components/header/Header";
import Router from "./router/router";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Router />
    </div>
  );
};

export default App;
