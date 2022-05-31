import useSWR from "swr";
import BreadCrumb from "../../components/BreadCrumb";
import { useUser } from "../../providers/user";
import { convertDateToAPIFormat } from "../../utils/date";

const Reservations = () => {
  const { user } = useUser();

  const { data: reservations, error } = useSWR(
    user ? `/reservation/getByUser/${user.id}` : null,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  return (
    <>
      <BreadCrumb links={[{ url: "/reservations", label: "Mes Réservations" }]} />

      <div>
        {error ? (
          <div className="my-8 text-2xl font-bold text-center text-red-500">
            Une erreur est survenue lors de la récupération des réservations
          </div>
        ) : (
          <>
            <div className="my-8 text-2xl text-green-500">Validées</div>
            {reservations
              ?.filter((reservation) => reservation.acceptState === 1)
              .map((reservation, index) => (
                <div key={index}>
                  {reservation.id} - du {convertDateToAPIFormat(reservation.startDate)} au{" "}
                  {convertDateToAPIFormat(reservation.endDate)}
                </div>
              ))}

            <div className="my-8 text-2xl text-gray-300">En attente</div>
            {reservations
              ?.filter((reservation) => reservation.acceptState === 3)
              .map((reservation, index) => (
                <div key={index}>
                  {reservation.id} - du {convertDateToAPIFormat(reservation.startDate)} au{" "}
                  {convertDateToAPIFormat(reservation.endDate)}
                </div>
              ))}

            <div className="my-8 text-2xl text-red-500">Annulées</div>
            {reservations
              ?.filter((reservation) => reservation.acceptState === 2)
              .map((reservation, index) => (
                <div key={index}>
                  {reservation.id} - du {convertDateToAPIFormat(reservation.startDate)} au{" "}
                  {convertDateToAPIFormat(reservation.endDate)}
                </div>
              ))}
          </>
        )}
      </div>
    </>
  );
};

export default Reservations;
