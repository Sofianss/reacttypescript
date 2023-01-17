import { Link } from "react-router-dom";
import "./Header.css";

const Header: React.FC = () => {
  return (
    <header>
      <Link to="/">
        <h1>Liste des héros</h1>
      </Link>
      <Link to="/count">
        <h1>Count</h1>
      </Link>
      <Link to="/form">
        <h1>form</h1>
      </Link>
      <Link to="/fetch">
        <h1>get</h1>
      </Link>
    </header>
  );
};
export default Header;
