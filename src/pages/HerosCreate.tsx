import HerosForm from "../components/form/HerosForm";

const HerosCreate: React.FC = () => {
  return (
    <main>
      <h2>Créer un héros</h2>
      <HerosForm hero={undefined}></HerosForm>
    </main>
  );
};

export default HerosCreate;
