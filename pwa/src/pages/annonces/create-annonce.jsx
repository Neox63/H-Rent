import { useEffect, useState } from "react";
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

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    addAnnonce({
      title: title,
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
    });

    history.push("/");
  };

  useEffect(() => {}, []);

  return (
    <>
      <BreadCrumb links={[{ url: "/create", label: "Créer une annonce" }]} />
      <div className="my-8 text-2xl">Création d'annonce</div>
      <div className="text-black">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col w-1/2">
            <input
              type="text"
              className="p-2 my-4"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
              required
              aria-required="true"
            />
            <input
              type="text"
              className="p-2 my-4"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Description"
              required
              aria-required="true"
            />
            <input
              type="text"
              className="p-2 my-4"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              placeholder="Ville"
              required
              aria-required="true"
            />
            <input
              type="text"
              className="p-2 my-4"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
              placeholder="Code Postal"
              required
              aria-required="true"
            />

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
                  className="p-4 bg-indigo-500 rounded-lg"
                >
                  -
                </button>
                <span className="mx-4 my-auto ">{availablePlaces}</span>
                <button
                  onClick={() =>
                    setAvailablePlaces((availablePlaces) => availablePlaces + 1)
                  }
                  type="button"
                  className="p-4 bg-indigo-500 rounded-lg"
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
                  className="p-4 bg-indigo-500 rounded-lg"
                >
                  -
                </button>
                <span className="mx-4 my-auto ">{availableRooms}</span>
                <button
                  onClick={() =>
                    setAvailableRooms((availablePlaces) => availablePlaces + 1)
                  }
                  type="button"
                  className="p-4 bg-indigo-500 rounded-lg"
                >
                  +
                </button>
              </div>
            </div>

            <input
              type="text"
              className="p-2 my-4"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Prix par nuit"
              required
              aria-required="true"
            />

            <input
              type="text"
              className="p-2 my-4"
              value={bail}
              onChange={(e) => setBail(e.target.value)}
              placeholder="Montant de la caution"
              required
              aria-required="true"
            />

            <div className="flex flex-col items-center mb-4 text-white requiredDocuments">
              <span className="mb-4">
                Documents à fournir par le locataire lors de la réservation
              </span>

              <div className="flex items-center">
                <div className="mx-2">
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

                <div className="mx-2">
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

                <div className="mx-2">
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
