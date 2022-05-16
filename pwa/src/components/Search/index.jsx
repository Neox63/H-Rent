import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { getAnnonces } from "../../fakeAPI";
import useSWR from "swr";

const Search = () => {
  const [title, setTitle] = useState("");
  const [country, setCountry] = useState("");
  const [query, setQuery] = useState("");

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

  const { data, isValidating } = useSWR(
    query.length > 0
      ? `https://api-adresse.data.gouv.fr/search/?q=${query}&limit=5`
      : null
  );

  return (
    <div className="flex flex-col w-2/3 px-4 py-8 mx-auto bg-white rounded-md custom-shadow">
      <div className="relative flex gap-4 mb-8">
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
          onChange={(e) => {
            setCountry(e.target.value);
            setQuery(e.target.value);
          }}
          className="relative w-1/2 px-4 py-2 bg-gray-100 rounded-lg"
        />
        <ul
          className={`absolute right-0 w-1/2 overflow-hidden bg-white rounded-md shadow-xl top-full`}
        >
          {isValidating ? (
            <li className="py-4 text-2xl text-center text-red-500">
              <i className="fa fa-circle-notch fa-spin"></i>
            </li>
          ) : (
            <>
              {data?.features.length > 0 ? (
                <>
                  {data?.features?.map((currCountry) => (
                    <li
                      onClick={() => {
                        setQuery("");
                        setCountry(currCountry?.properties?.label);
                      }}
                      className="flex flex-col px-8 py-4 cursor-pointer hover:bg-gray-200"
                    >
                      <span>
                        {currCountry?.properties?.label} -{" "}
                        {currCountry?.properties?.postcode}
                      </span>
                      <span className="text-sm text-gray-400">
                        {currCountry?.properties?.context}
                      </span>
                    </li>
                  ))}
                </>
              ) : (
                query.length > 0 && (
                  <li className="px-8 py-4 text-center">
                    <span>
                      Aucun résultat{" "}
                      <span>
                        pour "<span className={`font-bold text-green-700`}>{query}</span>"
                      </span>
                    </span>
                  </li>
                )
              )}
            </>
          )}
        </ul>
      </div>

      <div className="filters"></div>

      <button onClick={handleResearch} className="mx-auto Button">
        Rechercher ({annonces.length} résultats)
      </button>
    </div>
  );
};

export default Search;
