import SuperHero from "../models/SuperHero";
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
        <p>Identité secrète : {superHero.civil}</p>
        <p>Age : {superHero.age} ans</p>
        <p>Habite à : {superHero.ville}</p>
      </div>
    </div>
  );
};
export default Card;
