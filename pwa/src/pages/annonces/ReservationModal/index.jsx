import { useState } from "react";
import DatePicker from "react-datepicker";
import { useHistory } from "react-router-dom";
import Separator from "../../../components/Separator";
import { addReservation } from "../../../fakeAPI";
import { convertDateToAPIFormat, getDaysBetween } from "../../../utils/date";
import "react-datepicker/dist/react-datepicker.css";

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

  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    setDaysBetween(getDaysBetween(start, end));
  };

  const history = useHistory();

  const reserve = () => {
    addReservation({
      idAnnonce: +idAnnonce,
      idUser: user.id,
      startDate: convertDateToAPIFormat(startDate),
      endDate: convertDateToAPIFormat(endDate),
    });

    history.push("/");
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div
        className="fixed inset-0 z-10 bg-gray-900 opacity-75"
        onClick={() => setReservationModalOpen(false)}
      ></div>
      <div className="fixed inset-0 z-20 flex flex-col items-center justify-center w-2/3 m-auto bg-white rounded-md h-4/5">
        <div className="w-full px-12 py-4 overflow-scroll text-center ">
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
              {currentAnnonce.cniNeeded && (
                <div className="flex items-center gap-4">
                  <label className="font-bold" htmlFor="cni-upload">
                    Carte d'identité :{" "}
                  </label>
                  <input
                    accept="image/*"
                    name="cni-upload"
                    id="cni-upload"
                    type="file"
                    onChange={(e) => setUploadedCni(e.target.files)}
                  />
                </div>
              )}

              {currentAnnonce.justificatifNeeded && (
                <div className="flex items-center gap-4">
                  <label className="font-bold" htmlFor="justificatif-upload">
                    Justificatif de domicile :{" "}
                  </label>
                  <input
                    accept="image/*"
                    name="justificatif-upload"
                    id="justificatif-upload"
                    type="file"
                    onChange={(e) => setUploadedJustificatif(e.target.files)}
                  />
                </div>
              )}

              {currentAnnonce.passeportNeeded && (
                <div className="flex items-center gap-4">
                  <label className="font-bold" htmlFor="passeport-upload">
                    Passeport :{" "}
                  </label>
                  <input
                    accept="image/*"
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
