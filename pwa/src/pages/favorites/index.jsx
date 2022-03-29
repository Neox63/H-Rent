import Container from "../../components/Container";
import AnnonceItem from "../../components/AnnonceItem";
import { getFavoriteAnnonces } from "../../fakeAPI";
import BreadCrumb from "../../components/BreadCrumb";

const FavoriteAnnonces = () => {
  const initialData = getFavoriteAnnonces();

  console.log(initialData);

  return (
    <>
      <BreadCrumb links={[{ url: "/favoris", label: "Favoris" }]} />
      <div className="my-8 text-2xl">Liste des annonces en favoris</div>

      <Container className="w-full mx-auto lg:w-3/4">
        {initialData.map((annonceData) => (
          <AnnonceItem initialData={{ ...annonceData, isFavorite: true }} />
        ))}
      </Container>
    </>
  );
};

export default FavoriteAnnonces;
