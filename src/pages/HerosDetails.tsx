import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import SuperHeros from "../data/SuperHeros";
import SuperHero from "../models/SuperHero";

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
      <h2>{afficher?.name}</h2>
      <img src={afficher?.image} alt={afficher?.name} />
      <p>{afficher?.civil}</p>
      <p>{afficher?.age}</p>
      <p>{afficher?.ville}</p>
    </>
  );
};
export default HerosDetails;
