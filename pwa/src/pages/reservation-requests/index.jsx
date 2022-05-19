import { Link } from "react-router-dom";
import BreadCrumb from "../../components/BreadCrumb";
import { getReservationRequest, getUser } from "../../fakeAPI";

const Requests = () => {
  const initialData = getReservationRequest();

  return (
    <>
      <BreadCrumb links={[{ url: "/reservation-request", label: "Mes demandes" }]} />
      <div className="my-8 text-2xl">Demandes de réservation ({initialData.length})</div>
      {initialData.map((request, index) => {
        const currentUser = getUser(request.idUser);
        return (
          <div
            className="flex flex-col items-center p-2 mb-4 bg-indigo-500 rounded-lg w-max"
            key={index}
          >
            <div>
              Demande de réservation par {currentUser.firstname} {currentUser.lastname}{" "}
              pour {request.annonce.title}
            </div>

            <div>
              Du : {request.startDate} au {request.endDate}
            </div>
            <Link className="text-black" to={`/annonce/${request.annonce.id}`}>
              Lien vers l'annonce
            </Link>
            <div className="flex">
              <button className="px-4 py-2 mx-2 mt-4 bg-red-600 rounded-lg hover:bg-red-700">
                Refuser
              </button>
              <button className="px-4 py-2 mx-2 mt-4 bg-green-600 rounded-lg hover:bg-green-700">
                Accepter
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Requests;
