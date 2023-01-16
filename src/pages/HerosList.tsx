import { useEffect, useState } from "react";
import Card from "../components/card/Card";
import SuperHeros from "../data/SuperHeros";
import SuperHero from "../models/SuperHero";

const HerosList = () => {
  const [afficher, setAfficher] = useState<SuperHero[]>([]);

  useEffect(() => setAfficher(SuperHeros), []);

  return (
    <>
      {afficher.map((hero) => (
        <Card key={hero.id} superHero={hero} />
      ))}
    </>
  );
};
export default HerosList;
