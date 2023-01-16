type CardProps = {
  nom: string;
  age?: number;
};

const Card: React.FC<CardProps> = ({ nom, age }) => {
  return (
    <>
      <h1>Coucou</h1>
      <h2>{nom}</h2>
      <h3>{age}</h3>
    </>
  );
};
export default Card;
