import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Card from "../components/card/Card";
import SuperHeros from "../data/SuperHeros";
import SuperHero from "../models/SuperHero";

const HerosList = () => {
  const [afficher, setAfficher] = useState<SuperHero[]>([]);
  let { id } = useParams();

  useEffect(() => {
    if (id) {
      const filteredHeros = SuperHeros.filter((hero) => "" + hero.id === id);
      setAfficher(filteredHeros);
    } else setAfficher(SuperHeros);
  }, [id]);

  return (
    <>
      <Link to="/">
        <h1>Liste des héros</h1>
      </Link>
      {afficher.map((hero) => (
        <Card key={hero.id} superHero={hero} />
      ))}
    </>
  );
};
export default HerosList;
