import SuperHeros from "../models/SuperHeros";
import "./Card.css";

type CardProps = {
  superHeros: SuperHeros;
};

const Card: React.FC<CardProps> = ({ superHeros }) => {
  return (
    <div className="card">
      <h1>{superHeros.name}</h1>
      <img src={superHeros.image} alt="super héros"></img>
      <div className="infos">
        <p>Identité secrète : {superHeros.civil}</p>
        <p>Age : {superHeros.age} ans</p>
        <p>Habite à : {superHeros.ville}</p>
      </div>
    </div>
  );
};
export default Card;
