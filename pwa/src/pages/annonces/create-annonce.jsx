import { useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import BreadCrumb from "../../components/BreadCrumb";
import ImageGallery from "../../components/ImageGallery";
import Separator from "../../components/Separator";
import { addAnnonce } from "../../fakeAPI";

const CreateAnnonce = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [country, setCountry] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [bail, setBail] = useState("");
  const [availablePlaces, setAvailablePlaces] = useState(1);
  const [cniNeeded, setCNINeeded] = useState(false);
  const [passeportNeeded, setPasseportNeeded] = useState(false);
  const [justificatifNeeded, setJustificatifNeeded] = useState(false);
  const [smokersAllowed, setSmokersAllowed] = useState(false);
  const [petsAllowed, setPetsAllowed] = useState(false);
  const [arrivalHour, setArrivalHour] = useState("");
  const [departureHour, setDepartureHour] = useState("");
  const [type, setType] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [images, setImages] = useState([]);

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
      bail: bail,
      cniNeeded: cniNeeded,
      passeportNeeded: passeportNeeded,
      justificatifNeeded: justificatifNeeded,
      smokersAllowed: smokersAllowed,
      petsAllowed: petsAllowed,
      arrivalHour: arrivalHour,
      departureHour: departureHour,
      images: Array.from(images),
    });

    history.push("/");
  };

  return (
    <>
      <BreadCrumb links={[{ url: "/create", label: "Créer une annonce" }]} />
      <div className="my-8 text-2xl font-extrabold text-center">Déposer une annonce</div>
      <div>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="flex flex-col w-2/3 gap-8 mx-auto">
            <div className="flex flex-col px-4 py-2 bg-white rounded-lg shadow-md custom-shadow">
              <span className="text-lg font-bold">Commençons par un titre !</span>
              <input
                type="text"
                className="p-2 my-4 bg-gray-100 border rounded-md"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Quel est le titre de l'annonce ?"
                required
                aria-required="true"
              />
            </div>

            <div className="flex flex-col px-4 py-2 bg-white rounded-lg shadow-md custom-shadow">
              <span className="mb-4 text-lg font-bold">
                Ajoutez des images à votre annonce (5 maximum)
              </span>
              <input
                multiple
                accept="image/*"
                name="file"
                id="file"
                type="file"
                onChange={(e) =>
                  e.target.files.length <= 5
                    ? setImages(e.target.files)
                    : alert("Vous ne pouvez pas déposer plus de 5 images à la fois !")
                }
                className="hidden"
              />
              <label htmlFor="file" className="mx-auto cursor-pointer Button w-max">
                Cliquez pour ajouter des images
              </label>
              {images.length > 0 && <ImageGallery images={Array.from(images)} />}
            </div>

            <div className="flex flex-col px-4 py-2 bg-white rounded-lg shadow-md custom-shadow">
              <span className="mb-8 text-lg font-bold">
                Dites nous en plus sur votre bien
              </span>
              <span className="font-bold ">Type d'hébergement</span>
              <select
                name="type"
                id="type"
                className="p-2 mt-2 mb-4 bg-gray-100 border rounded-md"
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

              <div className="flex justify-around my-4">
                <div className="flex flex-col items-center justify-center mb-6 available-bed">
                  <span className="mb-4 font-bold">
                    Capacité de l'hébergement (nombre de couchages)
                  </span>
                  <div className="flex">
                    <button
                      onClick={() =>
                        setAvailablePlaces((availablePlaces) =>
                          availablePlaces < 1 ? 0 : availablePlaces - 1
                        )
                      }
                      type="button"
                      className="Button"
                    >
                      -
                    </button>
                    <span className="mx-4 my-auto ">{availablePlaces}</span>
                    <button
                      onClick={() =>
                        setAvailablePlaces((availablePlaces) => availablePlaces + 1)
                      }
                      type="button"
                      className="Button"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              <Separator />
              <div className="flex flex-col items-center my-4 requiredDocuments">
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
              <Separator />
              <div className="flex items-center justify-center gap-4 my-4">
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
              <div className="flex gap-4 mx-auto">
                <div className="flex flex-col justify-center">
                  <label className="font-bold" htmlFor="arrival">
                    Heure d'arrivé
                  </label>
                  <input
                    name="arrival"
                    className="px-4 bg-green-400 rounded-md"
                    onChange={(e) => setArrivalHour(e.target.value)}
                    type="time"
                    min="6:00"
                    max="22:00"
                    required
                  />
                </div>

                <div className="flex flex-col justify-center">
                  <label className="font-bold" htmlFor="departure">
                    Heure de départ
                  </label>
                  <input
                    name="departure"
                    className="px-4 bg-green-400 rounded-md"
                    onChange={(e) => setDepartureHour(e.target.value)}
                    type="time"
                    min="6:00"
                    max="22:00"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col px-4 py-2 bg-white rounded-lg shadow-md custom-shadow">
              <span className="mb-8 text-lg font-bold">Décrivez votre bien !</span>
              <textarea
                type="text"
                rows={8}
                className="p-2 bg-gray-100 border rounded-md"
                value={description}
                onChange={(e) =>
                  (description.length < 3000 || description.length < e.target.value) &&
                  setDescription(e.target.value)
                }
                placeholder="Description de votre annonce, attention, elle est limite à 3000 caractères !"
                required
                aria-required="true"
              />
              <span className="text-right text-gray-500">
                {description.length} / 3000 caractères
              </span>
            </div>

            <div className="flex flex-col px-4 py-2 bg-white rounded-lg shadow-md custom-shadow">
              <span className="mb-8 text-lg font-bold">
                Parlons argent, quel est votre prix ?
              </span>

              <input
                type="number"
                min={0}
                className="p-2 my-4 bg-gray-100 border rounded-md"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Prix par nuit"
                required
                aria-required="true"
              />

              <input
                type="number"
                min={0}
                max={price}
                className="p-2 my-4 bg-gray-100 border rounded-md"
                value={bail}
                onChange={(e) => setBail(e.target.value)}
                placeholder="Montant de la caution"
                required
                aria-required="true"
              />
            </div>

            <div className="flex flex-col px-4 py-2 bg-white rounded-lg shadow-md custom-shadow">
              <span className="mb-8 text-lg font-bold">Où se situe votre bien ?</span>
              <div className="flex gap-2 my-4">
                <input
                  type="text"
                  className="w-2/3 p-2 bg-gray-100 border rounded-md"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  placeholder="Ville"
                  required
                  aria-required="true"
                />
                <input
                  type="text"
                  className="w-1/3 p-2 bg-gray-100 border rounded-md"
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value)}
                  placeholder="Code Postal"
                  required
                  aria-required="true"
                />
              </div>
            </div>

            <div className="flex flex-col px-4 py-2 bg-white rounded-lg shadow-md custom-shadow">
              <span className="mb-8 text-lg font-bold">Contact de l'hôte</span>
              <input
                type="text"
                className="w-1/3 p-2 bg-gray-100 border rounded-md"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="Votre numéro de téléphone"
                required
                aria-required="true"
              />
            </div>

            <button className="w-2/3 mx-auto Button" type="submit">
              Déposer l'annonce
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateAnnonce;
