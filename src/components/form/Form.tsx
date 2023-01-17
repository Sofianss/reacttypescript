import { useState, useEffect } from "react";

const Form: React.FC = () => {
  const [personne, setPersonne] = useState<string>("Luke Skywalker");

  useEffect(() => {
    console.log(personne);
  }, [personne]);

  const changePersonne = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPersonne(event.target.value);
  };

  const soumettre = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Le formulaire est envoyé");
  };

  return (
    <>
      <form onSubmit={soumettre}>
        <label htmlFor="nom">Nom: </label>
        <input
          type="text"
          name="nom"
          placeholder={personne}
          onChange={changePersonne}
        />
        <input type="submit" value="envoyer" />
      </form>
    </>
  );
};
export default Form;
