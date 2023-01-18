import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import SuperHero from "../models/SuperHero";
import HerosForm from "../components/form/HerosForm";

const HerosEdit: React.FC = () => {
  const [hero, setHero] = useState<SuperHero>();
  const { id } = useParams<string>();

  useEffect(() => {
    fetch(`http://localhost:3004/superHeros/${id}`)
      .then((response) => response.json())
      .then((data) => setHero(data));
  }, [id]);

  return (
    <main>
      {hero?.id ? (
        <>
          <h2>Editer: {hero.name}:</h2>
          <HerosForm hero={hero} edit={true}></HerosForm>
        </>
      ) : (
        <h2>Ce héros n'existe pas</h2>
      )}
    </main>
  );
};

export default HerosEdit;
