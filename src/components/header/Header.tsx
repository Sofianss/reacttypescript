import { Link } from "react-router-dom";
import "./Header.css";

const Header: React.FC = () => {
  return (
    <header>
      <Link to="/">
        <h1>Liste des héros</h1>
      </Link>
    </header>
  );
};
export default Header;
