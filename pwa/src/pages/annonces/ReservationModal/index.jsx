import { useState } from "react";
import DatePicker from "react-datepicker";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Separator from "../../../components/Separator";
import "react-datepicker/dist/react-datepicker.css";
import { convertDateToAPIFormat, getDaysBetween } from "../../../utils/date";
import { API_BASE_URL } from "../../../utils/constant";

const ReservationModal = ({
  currentAnnonce,
  idAnnonce,
  user,
  setReservationModalOpen,
}) => {
  const [, setUploadedCni] = useState([]);
  const [, setUploadedJustificatif] = useState([]);
  const [, setUploadedPasseport] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const [daysBetween, setDaysBetween] = useState(1);

  const history = useHistory();

  /* const { data: reservedDates } = useSWR(
    `/reservation/getAccepted/${idAnnonce}`
  ); */

  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    setDaysBetween(getDaysBetween(start, end));
  };

  const reserve = () => {
    const formData = new FormData();
    formData.append("idUser", user.id);
    formData.append("idAnnounce", idAnnonce);
    formData.append("startDate", convertDateToAPIFormat(startDate));
    formData.append("endDate", convertDateToAPIFormat(endDate));
    formData.append("isAccepted", 3);

    axios
      .post(`${API_BASE_URL}/api/reservation/create`, formData)
      .then((res) => {
        console.log(res.status);
        res.status === 200 && history.push("/reservations");
      })
      .catch((err) => {
        setReservationModalOpen(false);
        console.log(err);
      });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div
        className="fixed inset-0 z-10 bg-gray-900 opacity-75"
        onClick={() => setReservationModalOpen(false)}
      ></div>
      <div className="fixed inset-0 z-20 flex flex-col items-center justify-center w-5/6 m-auto bg-white rounded-md md:w-2/3 h-4/5">
        <div className="w-full px-8 py-4 overflow-scroll text-center md:px-12 ">
          <span className="text-2xl font-bold">
            Encore quelques étapes avant de réserver !
          </span>

          <Separator className="my-8" />

          <div>
            <span className="text-lg font-bold">
              Le propriétaire du logement demande les documents suivant pour accepter
              votre séjour :
            </span>

            <div className="flex flex-col gap-2 my-8">
              {currentAnnonce.idCardRequired && (
                <div className="flex items-center gap-4">
                  <label className="font-bold text-left" htmlFor="cni-upload">
                    Carte d'identité :{" "}
                  </label>
                  <input
                    accept="image/*"
                    required
                    name="cni-upload"
                    id="cni-upload"
                    type="file"
                    onChange={(e) => setUploadedCni(e.target.files)}
                  />
                </div>
              )}

              {currentAnnonce.isProofOfAddressRequired && (
                <div className="flex items-center gap-4">
                  <label className="font-bold text-left" htmlFor="justificatif-upload">
                    Justificatif de domicile :{" "}
                  </label>
                  <input
                    accept="image/*"
                    required
                    name="justificatif-upload"
                    id="justificatif-upload"
                    type="file"
                    onChange={(e) => setUploadedJustificatif(e.target.files)}
                  />
                </div>
              )}

              {currentAnnonce.isPassportRequired && (
                <div className="flex items-center gap-4">
                  <label className="font-bold text-left" htmlFor="passeport-upload">
                    Passeport :{" "}
                  </label>
                  <input
                    accept="image/*"
                    required
                    name="passeport-upload"
                    id="passeport-upload"
                    type="file"
                    onChange={(e) => setUploadedPasseport(e.target.files)}
                  />
                </div>
              )}
            </div>
          </div>

          <Separator className="my-8" />

          <span className="block mb-4 text-lg font-bold">
            Sélectionnez vos dates de séjour
          </span>

          <DatePicker
            minDate={new Date()}
            maxDate={new Date(currentAnnonce.endDate) - 1}
            selected={startDate}
            onChange={onChange}
            startDate={startDate}
            endDate={endDate}
            selectsRange
            selectsDisabledDaysInRange
            inline
          />

          <Separator className="my-8" />

          <div className="flex flex-col gap-2">
            <span>
              Montant dû à la fin du séjour :{" "}
              <span className="text-xl font-extrabold">
                {currentAnnonce.price * daysBetween}e ({daysBetween} nuit
                {daysBetween > 1 ? "s" : ""})
              </span>
            </span>

            <span>
              Montant à régler maintenant (Caution) :{" "}
              <span className="text-xl font-extrabold">{currentAnnonce.caution}</span>e
            </span>
          </div>

          <Separator className="my-8" />

          <div className="flex justify-center">
            <button className="Button" onClick={reserve}>
              Je réserve
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservationModal;
