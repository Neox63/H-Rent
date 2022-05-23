import { Link } from "react-router-dom";
import useSWR from "swr";
import { convertDateToAPIFormat } from "../../utils/date";

const Request = ({ request, onAccept, onDecline }) => {
  const { data: relatedAnnonce } = useSWR(`/api/announce/${request.idAnnounce}`, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  const { data: relatedUser } = useSWR(`/api/user/${request.idUser}`, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  /* const { data: relatedDocuments } = useSWR(
    `/api/document/getByUser/${request.idUser}`,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  ); */

  const handleAccept = () => {
    onAccept(request.id);
  };

  const handleDecline = () => {
    onDecline(request.id);
  };

  return (
    <div className="flex flex-col w-1/2 gap-8 p-8 my-4 bg-gray-200 rounded-md">
      <div className="text-xl font-extrabold">
        Demande de réservation pour l'annonce "
        <Link className="text-green-700" to={`/annonce/${request.idAnnounce}`}>
          {relatedAnnonce?.title}
        </Link>
        "
      </div>
      <div>
        Demande de <strong>{relatedUser?.firstName}</strong>{" "}
        <strong>{relatedUser?.lastName}</strong> pour un séjour du{" "}
        <strong>{convertDateToAPIFormat(request.startDate)}</strong> au{" "}
        <strong>{convertDateToAPIFormat(request.endDate)}</strong>
      </div>
      <details className="p-4 bg-gray-100 rounded-md">
        <summary className="font-extrabold">Documents fournis</summary>
        <div className="flex flex-col">
          <div className="">
            {
              relatedAnnonce?.idCardRequired &&
                "Carte d'identité : " /* relatedDocuments.idCard */
            }
          </div>
          <div className="">
            {
              relatedAnnonce?.isProofOfAddressRequired &&
                "Justificatif de domicile : " /* relatedDocuments.proofOfAdress */
            }
          </div>
          <div className="">
            {
              relatedAnnonce?.isPassportRequired &&
                "Passeport : " /* relatedDocuments.passport */
            }
          </div>
        </div>
      </details>

      <div className="flex justify-center gap-4">
        <button
          onClick={handleAccept}
          className="px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600"
        >
          Valider
        </button>
        <button
          onClick={handleDecline}
          className="px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600"
        >
          Refuser
        </button>
      </div>
    </div>
  );
};

export default Request;
