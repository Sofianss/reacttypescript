import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import SuperHeros from "../data/SuperHeros";
import SuperHero from "../models/SuperHero";
import "../components/card/Card.css";

const HerosDetails: React.FC = () => {
  const [afficher, setAfficher] = useState<SuperHero>();
  const { id } = useParams<string>();

  useEffect(() => {
    if (id) {
      SuperHeros.forEach((hero) => {
        if (hero.id === +id) {
          setAfficher(hero);
        }
      });
    }
  }, [id]);

  return (
    <>
      <Link to="/">
        <h1>Liste des héros</h1>
      </Link>
      <div className="card">
        <h1>{afficher?.name}</h1>
        <img src={afficher?.image} alt={afficher?.name} />
        <div className="infos">
          <p>{afficher?.civil}</p>
          <p>{afficher?.age}</p>
          <p>{afficher?.ville}</p>
        </div>
      </div>
    </>
  );
};
export default HerosDetails;
