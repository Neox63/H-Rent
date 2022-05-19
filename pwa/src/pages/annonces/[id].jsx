import { Redirect } from "react-router-dom";

import BreadCrumb from "../../components/BreadCrumb";
import Separator from "../../components/Separator";
import Pill from "../../components/Pill";
import ImageGallery from "../../components/ImageGallery";
import ReservationModal from "./ReservationModal";
import Loader from "../../components/Loader";

import useSWR from "swr";
import { useParams } from "react-router";
import { useState } from "react";
import { useUser } from "../../providers/user";

const Annonce = () => {
  const { id } = useParams();
  const { user } = useUser();

  const [reservationModalOpen, setReservationModalOpen] = useState(false);

  const { data: currentAnnonce, error } = useSWR(`/announce/${id}`);
  const { data: typeLogement } = useSWR(
    currentAnnonce ? `/typeLogement/${currentAnnonce?.idTypeLogement}` : null,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  if (!error && !currentAnnonce) {
    return (
      <div className="flex items-center justify-center p-60">
        <Loader />
      </div>
    );
  }

  if (error) return <Redirect to={"/404"} />;

  return (
    <>
      <BreadCrumb
        links={[
          { url: "/annonces", label: "Annonces" },
          { url: `/annonce/${id}`, label: id },
        ]}
      />

      {reservationModalOpen && (
        <ReservationModal
          currentAnnonce={currentAnnonce}
          user={user}
          idAnnonce={currentAnnonce.id}
          setReservationModalOpen={setReservationModalOpen}
        />
      )}

      {/* <ImageGallery
        withUrl
        images={Array.from([
          currentAnnonce?.locationPrimaryPicture,
          currentAnnonce?.locationSecondaryPicture,
          currentAnnonce?.locationThirdPicture,
          currentAnnonce?.locationFourthPicture,
          currentAnnonce?.locationFifthPicture,
        ])}
      /> */}
      <div className="mt-8 mb-4 text-3xl font-extrabold">{currentAnnonce?.title}</div>
      <div className="mb-4">
        {typeLogement?.libelle} · {currentAnnonce?.capacity} pers. ·{" "}
        {currentAnnonce?.city}
      </div>

      <div className="mb-4 text-lg">
        à partir de <span className="text-2xl font-bold">{currentAnnonce?.price}e</span> /
        nuit
      </div>

      <div>
        Disponible du {currentAnnonce?.startDate} au {currentAnnonce?.endDate}
      </div>

      <div className="text-sm">{currentAnnonce?.createdDate}</div>

      <button onClick={() => setReservationModalOpen(true)} className="mt-4 Button">
        Réserver le bien
      </button>

      <Separator className="my-4" />

      <div className="flex flex-col p-4 mb-8">
        <span className="text-lg font-bold">Description</span>
        <div className="p-4">{currentAnnonce?.description}</div>
      </div>

      <Separator className="my-4" />

      <div className="flex flex-col p-4">
        <span className="text-lg font-bold">Informations concernant cette location</span>
        <div className="flex flex-wrap gap-4 p-4">
          <Pill
            content={`Type d'hébergement : ${currentAnnonce?.idTypeLogement}`}
            className="px-3 py-1 my-3 font-bold text-center border border-green-700 rounded-full custom-shadow w-max"
          />

          <Pill
            content={`Capacité : ${currentAnnonce?.capacity}`}
            className="px-3 py-1 my-3 font-bold text-center border border-green-700 rounded-full custom-shadow w-max"
          />

          <Pill
            content={`Animaux : ${currentAnnonce?.petsAllowed ? "Oui" : "Non"}`}
            className="px-3 py-1 my-3 font-bold text-center border border-green-700 rounded-full custom-shadow w-max"
          />

          <Pill
            content={`${
              currentAnnonce?.smokingAllowed ? "Fumeurs acceptés" : "Fumeurs non acceptés"
            }`}
            className="px-3 py-1 my-3 font-bold text-center border border-green-700 rounded-full custom-shadow w-max"
          />

          <Pill
            content={`Heure d'arrivée : ${currentAnnonce?.arrivalTime}`}
            className="px-3 py-1 my-3 font-bold text-center border border-green-700 rounded-full custom-shadow w-max"
          />

          <Pill
            content={`Heure de départ : ${currentAnnonce?.departureTime}`}
            className="px-3 py-1 my-3 font-bold text-center border border-green-700 rounded-full custom-shadow w-max"
          />
        </div>
      </div>

      <Separator className="my-4" />
    </>
  );
};

export default Annonce;
