import SuperHero from "../../models/SuperHero";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import HeroService from "../../services/HeroService";
import { MdDelete } from "react-icons/md";

type HerosFormProps = {
  hero: SuperHero;
  edit: boolean;
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
  image: Champs;
};

const HerosForm: React.FC<HerosFormProps> = ({ hero, edit }) => {
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
    image: {
      value: hero.image,
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
    hero.image = form.image.value;
    if (edit) maj();
    else ajout();
  };

  const ajout = () => {
    HeroService.createHero(hero).then(() => redirection(`/`));
  };
  const maj = () => {
    HeroService.updateHero(hero).then(() => redirection(`/${hero.id}`));
  };

  const supprHeros = () => {
    HeroService.deleteHeros(hero);
    redirection(`/`);
  };

  return (
    <form onSubmit={soumission}>
      {edit ? (
        <>
          <img src={hero?.image} alt={hero?.name} />
          <button onClick={supprHeros}>
            <MdDelete />
          </button>
        </>
      ) : (
        <>
          <label htmlFor="image">URL de l'image: </label>
          <input
            type="text"
            name="image"
            value={form.image.value}
            onChange={editHeros}
            placeholder="URL image"
          />
        </>
      )}

      <label htmlFor="name">Nom: </label>
      <input
        type="text"
        name="name"
        value={form.name.value}
        onChange={editHeros}
        placeholder="Nom"
      />

      <label htmlFor="civil">Identité secrète: </label>
      <input
        type="text"
        name="civil"
        value={form.civil.value}
        onChange={editHeros}
        placeholder="Identité secrète"
      />

      <label htmlFor="age">Age: </label>
      <input
        type="number"
        name="age"
        value={form.age.value}
        onChange={editHeros}
        placeholder="Age"
      />

      <label htmlFor="ville">Ville: </label>
      <input
        type="text"
        name="ville"
        value={form.ville.value}
        onChange={editHeros}
        placeholder="Ville"
      />

      <input type="submit" value="envoyer" />
    </form>
  );
};
export default HerosForm;
