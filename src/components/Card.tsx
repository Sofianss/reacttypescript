import Hero from "../models/Hero";
import "./Card.css";

const Card: React.FC<Hero> = ({ name, image, civil, age, ville }) => {
  return (
    <div className="card">
      <h1>{name}</h1>
      <img src={image} alt="super héros"></img>
      <div className="infos">
        <p>Identité secrète : {civil || "inconnu"}</p>
        <p>Age : {age || "inconnu"}</p>
        <p>Habite à : {ville || "inconnu"}</p>
      </div>
    </div>
  );
};
export default Card;
