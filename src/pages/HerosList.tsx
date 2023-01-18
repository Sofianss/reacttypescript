import { useEffect, useState } from "react";
import Card from "../components/card/Card";
import SuperHero from "../models/SuperHero";
import HeroService from "../services/HeroService";

const HerosList = () => {
  const [afficher, setAfficher] = useState<SuperHero[]>([]);

  useEffect(() => {
    HeroService.getAllHeros().then((heroes) => setAfficher(heroes));
  }, []);

  return (
    <>
      {afficher.map((hero) => (
        <Card key={hero.id} superHero={hero} />
      ))}
    </>
  );
};
export default HerosList;
