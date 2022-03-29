import Container from "../../components/Container";
import AnnonceItem from "../../components/AnnonceItem";
import { getFavoriteAnnonces } from "../../fakeAPI";

const FavoriteAnnonces = () => {
  const initialData = getFavoriteAnnonces();

  console.log(initialData);

  return (
    <>
      <div className="text-2xl">Liste des annonces en favoris</div>

      <Container className="w-full mx-auto lg:w-3/4">
        {initialData.map((annonceData) => (
          <AnnonceItem initialData={{ ...annonceData, isFavorite: true }} />
        ))}
      </Container>
    </>
  );
};

export default FavoriteAnnonces;
