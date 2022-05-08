import Container from "../../components/Container";
import AnnonceItem from "../../components/AnnonceItem";
import { getAnnonces, getFavoriteAnnonces } from "../../fakeAPI";
import BreadCrumb from "../../components/BreadCrumb";
import Search from "../../components/Search";

const Annonces = () => {
  const initialData = getAnnonces();
  const favoriteAnnonces = getFavoriteAnnonces();

  return (
    <>
      <BreadCrumb links={[{ url: "/annonces", label: "Annonces" }]} className="mb-8" />

      <Search />

      <Container className="w-full mx-auto lg:w-3/4">
        <div className="mt-8 text-2xl font-extrabold">Liste des locations</div>
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
