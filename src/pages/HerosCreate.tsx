import { useState } from "react";
import HerosForm from "../components/form/HerosForm";
import SuperHero from "../models/SuperHero";

const HerosCreate: React.FC = () => {
  const [hero] = useState<SuperHero>(new SuperHero());
  return (
    <main>
      <h2>Créer un héros</h2>
      <HerosForm hero={hero} edit={false} />
    </main>
  );
};

export default HerosCreate;
