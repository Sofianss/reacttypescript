import SuperHero from "../../models/SuperHero";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import HeroService from "../../services/HeroService";

type HerosFormProps = {
  hero?: SuperHero;
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
  image?: Champs;
};

const HerosForm: React.FC<HerosFormProps> = ({ hero }) => {
  const [form, setForm] = useState<Form>({
    name: {
      value: hero?.name || "",
      isValid: true,
    },
    civil: {
      value: hero?.civil || "",
      isValid: true,
    },
    age: {
      value: hero?.age || 0,
      isValid: true,
    },
    ville: {
      value: hero?.ville || "",
      isValid: true,
    },
    image: {
      value: hero?.image || "",
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
    const name: string = form.name.value;
    const age: number = form.age.value;
    const civil: string = form.civil.value;
    const ville: string = form.ville.value;

    if (hero) {
      hero.name = name;
      hero.age = age;
      hero.civil = civil;
      hero.ville = ville;
      HeroService.updateHero(hero).then(() => redirection(`/${hero.id}`));
    } else {
      const image = form.image?.value;
      HeroService.createHero(
        new SuperHero(name, image, civil, age, ville)
      ).then(() => redirection(`/`));
    }
  };

  return (
    <form onSubmit={soumission}>
      <img src={hero?.image || ""} alt={hero?.name || ""} />
      {!hero ? (
        <>
          <label htmlFor="image">Image: </label>
          <input
            type="text"
            name="image"
            value={form.image?.value}
            onChange={editHeros}
          />
        </>
      ) : (
        <></>
      )}

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
