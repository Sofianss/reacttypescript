import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import SuperHero from "../models/SuperHero";
import "../components/card/Card.css";
import { FiEdit } from "react-icons/fi";

const HerosDetails: React.FC = () => {
  const [afficher, setAfficher] = useState<SuperHero>();
  const { id } = useParams<string>();

  useEffect(() => {
    fetch(`http://localhost:3004/superHeros/${id}`)
      .then((response) => response.json())
      .then((data) => setAfficher(data));
  }, [id]);
  return (
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
  );
};
export default HerosDetails;
