import axios from "axios";
import useSWR from "swr";
import BreadCrumb from "../../components/BreadCrumb";
import Request from "../../components/Request";
import { useUser } from "../../providers/user";

const Requests = () => {
  const { user } = useUser();

  const { data, error } = useSWR(`/reservation/getAwaitingByUser/${user.id}`, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  const acceptRequest = (requestId) => {
    axios.put(`/reservation/accept/${requestId}`);
  };

  const declineRequest = (requestId) => {
    axios.put(`/reservation/decline/${requestId}`);
  };

  return (
    <>
      <BreadCrumb links={[{ url: "/reservation-request", label: "Mes demandes" }]} />

      {error ? (
        <div className="my-8 text-2xl font-bold text-center text-red-500">
          Une erreur est survenue lors de la récupération des demandes de réservation
        </div>
      ) : (
        <>
          <div className="my-8 text-2xl">
            Demandes de réservation en attente ({data?.length})
          </div>
          {data?.map((request, index) => (
            <Request
              key={index}
              request={request}
              onAccept={acceptRequest}
              onDecline={declineRequest}
            />
          ))}
        </>
      )}
    </>
  );
};

export default Requests;
