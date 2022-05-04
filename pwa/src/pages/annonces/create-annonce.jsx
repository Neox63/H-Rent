import { useState } from "react";
import { useHistory } from "react-router-dom";
import BreadCrumb from "../../components/BreadCrumb";
import { addAnnonce } from "../../fakeAPI";

const CreateAnnonce = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [country, setCountry] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [bail, setBail] = useState("");
  const [availablePlaces, setAvailablePlaces] = useState(1);
  const [availableRooms, setAvailableRooms] = useState(1);
  const [cniNeeded, setCNINeeded] = useState(false);
  const [passeportNeeded, setPasseportNeeded] = useState(false);
  const [justificatifNeeded, setJustificatifNeeded] = useState(false);
  const [smokersAllowed, setSmokersAllowed] = useState(false);
  const [petsAllowed, setPetsAllowed] = useState(false);
  const [arrivalHour, setArrivalHour] = useState("");
  const [departureHour, setDepartureHour] = useState("");
  const [type, setType] = useState("");

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    addAnnonce({
      title: title,
      type: type,
      description: description,
      price: price,
      country: country,
      zipCode: zipCode,
      capacity: availablePlaces,
      rooms: availableRooms,
      bail: bail,
      cniNeeded: cniNeeded,
      passeportNeeded: passeportNeeded,
      justificatifNeeded: justificatifNeeded,
      smokersAllowed: smokersAllowed,
      petsAllowed: petsAllowed,
      arrivalHour: arrivalHour,
      departureHour: departureHour,
    });

    history.push("/");
  };

  return (
    <>
      <BreadCrumb links={[{ url: "/create", label: "Créer une annonce" }]} />
      <div className="my-8 text-2xl">Création d'annonce</div>
      <div className="text-black">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col w-1/2">
            <input
              type="text"
              className="p-2 my-4 rounded-md"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
              required
              aria-required="true"
            />

            <select
              name="type"
              id="type"
              className="p-2 my-4 rounded-md"
              required
              onChange={(e) => setType(e.target.value)}
            >
              <option value="Appartement">Appartement</option>
              <option value="Chalet">Chalet</option>
              <option value="Chambre">Chambre</option>
              <option value="Chateau">Chateau</option>
              <option value="Villa">Villa</option>
              <option value="Studio">Studio</option>
              <option value="Autre">Autre</option>
            </select>

            <textarea
              type="text"
              rows={8}
              className="p-2 my-4 rounded-md"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Description"
              required
              aria-required="true"
            />

            <div className="flex gap-2 my-4">
              <input
                type="text"
                className="w-2/3 p-2 rounded-md"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                placeholder="Ville"
                required
                aria-required="true"
              />
              <input
                type="text"
                className="w-1/3 p-2 rounded-md"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
                placeholder="Code Postal"
                required
                aria-required="true"
              />
            </div>

            <div className="flex justify-around my-4">
              <div className="flex flex-col items-center justify-center mb-6 text-white available-bed">
                <span>Capacité de l'hébergement (nombre de couchages)</span>
                <div className="flex">
                  <button
                    onClick={() =>
                      setAvailablePlaces((availablePlaces) =>
                        availablePlaces < 1 ? 0 : availablePlaces - 1
                      )
                    }
                    type="button"
                    className="px-2 bg-indigo-500 rounded-lg "
                  >
                    -
                  </button>
                  <span className="mx-4 my-auto ">{availablePlaces}</span>
                  <button
                    onClick={() =>
                      setAvailablePlaces((availablePlaces) => availablePlaces + 1)
                    }
                    type="button"
                    className="px-2 bg-indigo-500 rounded-lg "
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center mb-6 text-white available-bed">
                <span>Nombre de chambres</span>
                <div className="flex">
                  <button
                    onClick={() =>
                      setAvailableRooms((availablePlaces) =>
                        availablePlaces < 1 ? 0 : availablePlaces - 1
                      )
                    }
                    type="button"
                    className="px-2 bg-indigo-500 rounded-lg "
                  >
                    -
                  </button>
                  <span className="mx-4 my-auto ">{availableRooms}</span>
                  <button
                    onClick={() =>
                      setAvailableRooms((availablePlaces) => availablePlaces + 1)
                    }
                    type="button"
                    className="px-2 bg-indigo-500 rounded-lg "
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            <input
              type="text"
              className="p-2 my-4 rounded-md"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Prix par nuit"
              required
              aria-required="true"
            />

            <input
              type="text"
              className="p-2 my-4 rounded-md"
              value={bail}
              onChange={(e) => setBail(e.target.value)}
              placeholder="Montant de la caution"
              required
              aria-required="true"
            />

            <div className="flex flex-col items-center mb-4 text-white requiredDocuments">
              <span className="mb-4 text-lg font-bold">
                Documents à fournir par le locataire lors de la réservation
              </span>

              <div className="flex items-center gap-4">
                <div>
                  <input
                    type="checkbox"
                    name="cni"
                    id="cni"
                    className="mr-3"
                    checked={cniNeeded}
                    onChange={() => setCNINeeded(!cniNeeded)}
                  />
                  <label htmlFor="cni">Carte Nationale d'Identité</label>
                </div>

                <div>
                  <input
                    type="checkbox"
                    name="passeport"
                    id="passeport"
                    className="mr-3"
                    checked={passeportNeeded}
                    onChange={() => setPasseportNeeded(!passeportNeeded)}
                  />
                  <label htmlFor="passeport">Passeport</label>
                </div>

                <div>
                  <input
                    type="checkbox"
                    name="justificatif"
                    id="justificatif"
                    className="mr-3"
                    checked={justificatifNeeded}
                    onChange={() => setJustificatifNeeded(!justificatifNeeded)}
                  />
                  <label htmlFor="justificatif">Justificatif de domicile</label>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center mt-8 mb-4 text-lg font-bold text-white">
              <span className="mb-4">
                Informations supplémentaires concernant le logement
              </span>

              <div className="flex gap-4">
                <div className="flex flex-col justify-center">
                  <label htmlFor="arrival">Heure d'arrivé</label>
                  <input
                    name="arrival"
                    className="px-4 bg-indigo-400"
                    onChange={(e) => setArrivalHour(e.target.value)}
                    type="time"
                    min="6:00"
                    max="22:00"
                    required
                  />
                </div>

                <div className="flex flex-col justify-center">
                  <label htmlFor="departure">Heure de départ</label>
                  <input
                    name="departure"
                    className="px-4 bg-indigo-400"
                    onChange={(e) => setDepartureHour(e.target.value)}
                    type="time"
                    min="6:00"
                    max="22:00"
                    required
                  />
                </div>
              </div>

              <div className="flex items-center gap-4 mt-4">
                <div>
                  <input
                    type="checkbox"
                    name="smokers"
                    id="smokers"
                    className="mr-3"
                    checked={smokersAllowed}
                    onChange={() => setSmokersAllowed(!smokersAllowed)}
                  />
                  <label htmlFor="smokers">Fumeurs acceptés</label>
                </div>

                <div>
                  <input
                    type="checkbox"
                    name="pets"
                    id="pets"
                    className="mr-3"
                    checked={petsAllowed}
                    onChange={() => setPetsAllowed(!petsAllowed)}
                  />
                  <label htmlFor="pets">Animaux acceptés</label>
                </div>
              </div>
            </div>

            <button className="p-4 bg-indigo-500 rounded-lg" type="submit">
              Valider
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateAnnonce;
