import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import BreadCrumb from "../../components/BreadCrumb";
import { addAnnonce } from "../../fakeAPI";

const CreateAnnonce = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    addAnnonce({
      title: title,
      description: description,
      price: price,
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
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Prix"
              required
              aria-required="true"
            />

            <button className="p-2 bg-indigo-500 rounded-lg" type="submit">
              Valider
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateAnnonce;
