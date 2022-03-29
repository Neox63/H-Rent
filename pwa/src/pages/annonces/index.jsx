import Container from "../../components/Container";
import AnnonceItem from "../../components/AnnonceItem";
import { getAnnonces, getFavoriteAnnonces } from "../../fakeAPI";

const Annonces = () => {
  const initialData = getAnnonces();
  const favoriteAnnonces = getFavoriteAnnonces();

  return (
    <>
      <div className="text-2xl">Liste des annonces</div>

      <Container className="w-full mx-auto lg:w-3/4">
        {initialData.map((annonceData) => (
          <AnnonceItem
            initialData={{
              ...annonceData,
              isFavorite: favoriteAnnonces.some(
                (annonce) => annonce.id === annonceData.id
              ),
            }}
          />
        ))}
      </Container>
    </>
  );
};

export default Annonces;
