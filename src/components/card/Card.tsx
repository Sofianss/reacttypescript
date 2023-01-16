import SuperHero from "../../models/SuperHero";
import "./Card.css";

type CardProps = {
  superHero: SuperHero;
};

const Card: React.FC<CardProps> = ({ superHero }) => {
  return (
    <div className="card">
      <h1>{superHero.name}</h1>
      <img src={superHero.image} alt="super héros"></img>
      <div className="infos">
        <p>Identité secrète : {superHero.civil || "inconnu"}</p>
        <p>Age : {superHero.age || "inconnu"}</p>
        <p>Habite à : {superHero.ville || "inconnu"}</p>
      </div>
    </div>
  );
};
export default Card;
