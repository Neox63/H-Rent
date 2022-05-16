import Container from "../../components/Container";
import AnnonceItem from "../../components/AnnonceItem";
import { getAnnonces, getFavoriteAnnonces } from "../../fakeAPI";
import BreadCrumb from "../../components/BreadCrumb";
import Search from "../../components/Search";
import { useRouterQuery } from "../../hooks/useRouterQuery";
import useSWR from "swr";
import { useLocation } from "react-router-dom";

const Annonces = () => {
  const data = getAnnonces();
  const favoriteAnnonces = getFavoriteAnnonces();

  const { search } = useLocation();

  const { data: initialData, error } = useSWR(
    `/annonces${search.length > 0 ? search : ""}`
  );

  return (
    <>
      <BreadCrumb links={[{ url: "/annonces", label: "Annonces" }]} className="mb-8" />

      <Search />

      <Container className="w-full mx-auto lg:w-3/4">
        <div className="mt-8 text-2xl font-extrabold">
          Liste des locations disponibles
        </div>

        {error ? (
          <div className="flex flex-col my-8 text-xl font-extrabold text-center text-red-500">
            <span>
              Oops, on dirait qu'une erreur s'est produite, veuillez réessayer plus tard.
            </span>
          </div>
        ) : !initialData ? (
          <div className="flex flex-col my-8 text-xl font-extrabold text-center">
            <span>
              Nous cherchons les meilleures annonces pour vous ! Laissez nous quelques
              instants...
            </span>
            <i className="text-green-700 fa fa-circle-notch fa-spin"></i>
          </div>
        ) : initialData.length === 0 ? (
          <div className="flex flex-col my-8 text-xl font-extrabold text-center">
            Désolé, mais aucune annonce ne correspond à vos critères de recherche
          </div>
        ) : (
          data.map((annonceData, index) => (
            <AnnonceItem
              key={index}
              initialData={{
                ...annonceData,
                isFavorite: favoriteAnnonces.some(
                  (annonce) => annonce.id === annonceData.id
                ),
              }}
            />
          ))
        )}
      </Container>
    </>
  );
};

export default Annonces;
