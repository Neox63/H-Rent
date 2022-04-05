import Container from "../../components/Container";
import AnnonceItem from "../../components/AnnonceItem";
import { getAnnonces, getFavoriteAnnonces } from "../../fakeAPI";
import BreadCrumb from "../../components/BreadCrumb";

const Annonces = () => {
  const initialData = getAnnonces();
  const favoriteAnnonces = getFavoriteAnnonces();

  return (
    <>
      <BreadCrumb links={[{ url: "/annonces", label: "Annonces" }]} />
      <div className="my-8 text-2xl">Liste des annonces</div>

      <Container className="w-full mx-auto lg:w-3/4">
        {initialData.map((annonceData, index) => (
          <AnnonceItem
            key={index}
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
