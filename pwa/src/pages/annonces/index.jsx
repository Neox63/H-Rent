import Container from "../../components/Container";
import Item from "../../components/Item";

const Annonces = ({ initialData = {} }) => {
  return (
    <>
      <div className="text-2xl">Liste des annonces</div>

      <Container className="w-full mx-auto lg:w-3/4">
        <Item isFavorite={false} />
        <Item isFavorite={true} />
        <Item isFavorite={false} />
        <Item isFavorite={false} />
        <Item isFavorite={true} />
        <Item isFavorite={false} />
        <Item isFavorite={true} />
        <Item isFavorite={true} />
        <Item isFavorite={false} />
      </Container>
    </>
  );
};

export default Annonces;
