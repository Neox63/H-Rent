import { useParams } from "react-router";
import { addReservation, getAnnonce } from "../../fakeAPI";
import { Redirect, useHistory } from "react-router-dom";
import BreadCrumb from "../../components/BreadCrumb";
import { useUser } from "../../providers/user";
import Separator from "../../components/Separator";
import Pill from "../../components/Pill";
import ImageGallery from "../../components/ImageGallery";

const Annonce = () => {
  const { id } = useParams();
  const { user } = useUser();
  const history = useHistory();

  const currentAnnonce = getAnnonce(+id);

  const reserve = () => {
    addReservation({ idAnnonce: +id, idUser: user.id });
    history.push("/");
  };

  if (!currentAnnonce) return <Redirect to={"/"} />;

  return (
    <>
      <BreadCrumb
        links={[
          { url: "/annonces", label: "Annonces" },
          { url: `/annonce/${id}`, label: id },
        ]}
      />

      <ImageGallery images={currentAnnonce.images} />
      <div className="mt-8 mb-4 text-3xl font-extrabold">{currentAnnonce.title}</div>
      <div className="mb-4">
        {currentAnnonce.type} · {currentAnnonce.capacity} pers. · {currentAnnonce.rooms}{" "}
        ch. · {currentAnnonce.country}
      </div>

      <div className="mb-4 text-lg">
        à partir de <span className="text-2xl font-bold">{currentAnnonce.price}e</span> /
        nuit
      </div>

      <div className="text-sm">{currentAnnonce.createdAt}</div>

      <button onClick={reserve} className="mt-4 Button">
        Réserver le bien
      </button>

      <Separator className="my-4" />

      <div className="flex flex-col p-4 mb-8">
        <span className="text-lg font-bold">Description</span>
        <div className="p-4">{currentAnnonce.description}</div>
      </div>

      <Separator className="my-4" />

      <div className="flex flex-col p-4">
        <span className="text-lg font-bold">Informations concernant cette location</span>
        <div className="flex flex-wrap gap-4 p-4">
          <Pill
            content={`Type d'hébergement : ${currentAnnonce.type}`}
            className="px-3 py-1 my-3 font-bold text-center border border-green-700 rounded-full custom-shadow w-max"
          />

          <Pill
            content={`Capacité : ${currentAnnonce.capacity}`}
            className="px-3 py-1 my-3 font-bold text-center border border-green-700 rounded-full custom-shadow w-max"
          />

          <Pill
            content={`Nombre de chambres : ${currentAnnonce.rooms}`}
            className="px-3 py-1 my-3 font-bold text-center border border-green-700 rounded-full custom-shadow w-max"
          />

          <Pill
            content={`Animaux : ${currentAnnonce.petsAllowed ? "Oui" : "Non"}`}
            className="px-3 py-1 my-3 font-bold text-center border border-green-700 rounded-full custom-shadow w-max"
          />

          <Pill
            content={`${
              currentAnnonce.smokersAllowed ? "Fumeurs acceptés" : "Fumeurs non acceptés"
            }`}
            className="px-3 py-1 my-3 font-bold text-center border border-green-700 rounded-full custom-shadow w-max"
          />

          <Pill
            content={`Heure d'arrivée : ${currentAnnonce.arrivalHour}`}
            className="px-3 py-1 my-3 font-bold text-center border border-green-700 rounded-full custom-shadow w-max"
          />

          <Pill
            content={`Heure de départ : ${currentAnnonce.departureHour}`}
            className="px-3 py-1 my-3 font-bold text-center border border-green-700 rounded-full custom-shadow w-max"
          />
        </div>
      </div>

      <Separator className="my-4" />
    </>
  );
};

export default Annonce;
