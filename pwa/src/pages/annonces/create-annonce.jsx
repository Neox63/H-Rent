import { useEffect, useState } from "react";
import { addAnnonce } from "../../fakeAPI";

const CreateAnnonce = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    addAnnonce({ title: title, description: description, price: price });
  };

  useEffect(() => {}, []);

  return (
    <>
      <div>Création d'annonce</div>
      <div className="text-black">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col w-1/2">
            <input
              type="text"
              className="p-2 my-4"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
            />
            <input
              type="text"
              className="p-2 my-4"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Description"
            />
            <input
              type="text"
              className="p-2 my-4"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Prix"
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
