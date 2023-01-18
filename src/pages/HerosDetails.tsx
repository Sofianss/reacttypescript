import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import SuperHero from "../models/SuperHero";
import "../components/card/Card.css";
import { FiEdit } from "react-icons/fi";
import HeroService from "../services/HeroService";

const HerosDetails: React.FC = () => {
  const [afficher, setAfficher] = useState<SuperHero>();
  const { id } = useParams<string>();

  useEffect(() => {
    if (id) {
      HeroService.getHerosById(+id).then((hero) => setAfficher(hero));
    }
  }, [id]);

  return (
    <>
      {afficher?.id ? (
        <>
          <div className="card">
            <h1>{afficher?.name}</h1>
            <img src={afficher?.image} alt={afficher?.name} />
            <Link to={`/edit/${id}`}>
              <FiEdit />
            </Link>
            <div className="infos">
              <p>{afficher?.civil}</p>
              <p>{afficher?.age}</p>
              <p>{afficher?.ville}</p>
            </div>
          </div>
        </>
      ) : (
        <h1>Ce héros n'existe pas</h1>
      )}
    </>
  );
};
export default HerosDetails;
