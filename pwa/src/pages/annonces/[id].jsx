import { useParams } from "react-router";
import { addReservation, getAnnonce } from "../../fakeAPI";
import { Redirect, useHistory } from "react-router-dom";
import BreadCrumb from "../../components/BreadCrumb";
import { useUser } from "../../providers/user";
import Separator from "../../components/Separator";

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
      <div className="mt-8 mb-4 text-3xl font-extrabold">{currentAnnonce.title}</div>
      <div className="mb-4">
        {currentAnnonce.type} · {currentAnnonce.capacity} pers. · {currentAnnonce.rooms}{" "}
        ch. · {currentAnnonce.country}
      </div>

      <div className="mb-4 text-lg">
        à partir de <span className="text-2xl font-bold">{currentAnnonce.price}e</span> /
        nuits
      </div>

      <div className="text-sm">{currentAnnonce.createdAt}</div>

      <button onClick={reserve} className="p-2 mt-4 bg-indigo-600 rounded-lg">
        Réserver le bien
      </button>

      <Separator className="my-4" />

      <div className="flex flex-col p-4 mb-8">
        <span className="text-lg font-bold">Description</span>
        <div className="p-4">{currentAnnonce.description}</div>
      </div>

      <Separator className="my-4" />

      <div className="flex flex-col p-4">
        <span className="text-lg font-bold">Critères</span>
        <div className="p-4">
          <div className="px-2 my-3 bg-indigo-600 rounded-lg w-max">
            Type d'hébergement : {currentAnnonce.type}
          </div>
          <div className="px-2 my-3 bg-indigo-600 rounded-lg w-max">
            Capacité : {currentAnnonce.capacity}
          </div>
          <div className="px-2 my-3 bg-indigo-600 rounded-lg w-max">
            Nombre de chambres : {currentAnnonce.rooms}
          </div>
        </div>
      </div>

      <Separator className="my-4" />

      <div className="flex flex-col p-4">
        <span className="text-lg font-bold">Conditions d'hébergement</span>
        <div className="p-4">
          <div className="px-2 my-3 bg-indigo-600 rounded-lg w-max">
            Animaux acceptés : {currentAnnonce.petsAllowed ? "Oui" : "Non"}
          </div>
          <div className="px-2 my-3 bg-indigo-600 rounded-lg w-max">
            {currentAnnonce.smokersAllowed ? "Fumeurs acceptés" : "Fumeurs non acceptés"}
          </div>
          <div className="px-2 my-3 bg-indigo-600 rounded-lg w-max">
            Heure d'arrivée : {currentAnnonce.arrivalHour}
          </div>
          <div className="px-2 my-3 bg-indigo-600 rounded-lg w-max">
            Heure de départ : {currentAnnonce.departureHour}
          </div>
        </div>
      </div>

      <details className="p-4 border-2 border-indigo-600 rounded-lg select-none">
        <summary>Informations supplémentaires</summary>
        <div className="my-4">
          <span className="font-bold">Documents à fournir :</span>
          <ul>
            {currentAnnonce.cniNeeded && <li>- Carte d'identité</li>}
            {currentAnnonce.passeportNeeded && <li>- Passeport</li>}
            {currentAnnonce.justificatifNeeded && <li>- Justificatif de domicile</li>}
          </ul>
        </div>

        <div className="font-bold">Montant de la caution : {currentAnnonce.bail}e</div>
      </details>

      <Separator className="my-4" />
    </>
  );
};

export default Annonce;
