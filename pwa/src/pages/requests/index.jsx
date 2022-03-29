import { Link } from "react-router-dom";
import { getReservationRequest } from "../../fakeAPI";

const Requests = () => {
  const initialData = getReservationRequest();

  return (
    <>
      <Link to={"/"}>Retour</Link>
      <div className="mb-8">Demandes de réservation ({initialData.length})</div>
      {initialData.map((request) => (
        <div className="flex flex-col w-1/4 p-2 mb-4 bg-indigo-500">
          <div>Demande par {request.idUser}</div>
          <Link to={`/annonce/${request.annonce.id}`}>Lien vers l'annonce</Link>
          <button className="py-2 mt-4 bg-gray-600 rounded-lg">
            Accepter la demande
          </button>
        </div>
      ))}
    </>
  );
};

export default Requests;
