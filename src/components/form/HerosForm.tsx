import SuperHero from "../../models/SuperHero";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import HeroService from "../../services/HeroService";

type HerosFormProps = {
  hero: SuperHero;
};

type Champs = {
  value?: any;
  error?: string;
  isValid?: boolean;
};

type Form = {
  name: Champs;
  civil: Champs;
  age: Champs;
  ville: Champs;
};

const HerosForm: React.FC<HerosFormProps> = ({ hero }) => {
  const [form, setForm] = useState<Form>({
    name: {
      value: hero.name,
      isValid: true,
    },
    civil: {
      value: hero.civil,
      isValid: true,
    },
    age: {
      value: hero.age,
      isValid: true,
    },
    ville: {
      value: hero.ville,
      isValid: true,
    },
  });
  const redirection = useNavigate();

  const editHeros = (event: React.ChangeEvent<HTMLInputElement>) => {
    const nomDuChamps: string = event.target.name;
    const valeurChamps: string = event.target.value;
    const nouveauChamps: Champs = { [nomDuChamps]: { value: valeurChamps } };
    setForm({ ...form, ...nouveauChamps });
  };

  const soumission = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    hero.name = form.name.value;
    hero.age = form.age.value;
    hero.civil = form.civil.value;
    hero.ville = form.ville.value;
    HeroService.updateHero(hero).then(() => redirection(`/${hero.id}`));
  };

  return (
    <form onSubmit={soumission}>
      <img src={hero.image} alt={hero.name} />

      <label htmlFor="name">Nom: </label>
      <input
        type="text"
        name="name"
        value={form.name.value}
        onChange={editHeros}
      />

      <label htmlFor="civil">Identité secrète: </label>
      <input
        type="text"
        name="civil"
        value={form.civil.value}
        onChange={editHeros}
      />

      <label htmlFor="age">Age: </label>
      <input
        type="number"
        name="age"
        value={form.age.value}
        onChange={editHeros}
      />

      <label htmlFor="ville">Ville: </label>
      <input
        type="text"
        name="ville"
        value={form.ville.value}
        onChange={editHeros}
      />

      <input type="submit" value="envoyer" />
    </form>
  );
};
export default HerosForm;
