import { useState } from "react";
import { useHistory } from "react-router-dom";
import { getAnnonces } from "../../fakeAPI";

const Search = () => {
  const [title, setTitle] = useState("");
  const [country, setCountry] = useState("");

  const history = useHistory();

  const annonces = getAnnonces();

  const handleResearch = () => {
    history.push(
      `/annonces${
        title && country
          ? `?title=${title}&country=${country}`
          : title && !country
          ? `?title=${title}`
          : country && !title
          ? `?country=${country}`
          : ""
      }`
    );
  };

  return (
    <div
      className="flex flex-col w-2/3 px-4 py-8 mx-auto bg-white rounded-md"
      style={{
        boxShadow: "0 -1px 4px 0 rgb(26 26 26 / 8%), 0 4px 8px 0 rgb(26 26 26 / 12%)",
      }}
    >
      <div className="flex gap-4 mb-8">
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Que recherchez-vous ?"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-1/2 px-4 py-2 bg-gray-100 rounded-lg"
        />
        <input
          type="text"
          name="location"
          id="location"
          placeholder="Saisissez une ville ou un code postal"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          className="w-1/2 px-4 py-2 bg-gray-100 rounded-lg"
        />
      </div>

      <div className="filters"></div>

      <button onClick={handleResearch} className="mx-auto Button">
        Rechercher ({annonces.length} résultats)
      </button>
    </div>
  );
};

export default Search;
