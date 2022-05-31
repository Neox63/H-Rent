import { useState } from "react";
import { useHistory } from "react-router-dom";
import useSWR from "swr";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { convertDateToAPIFormat } from "../../utils/date";
import Separator from "../Separator";

const Search = () => {
  const [title, setTitle] = useState("");
  const [country, setCountry] = useState("");
  const [query, setQuery] = useState("");

  const [capacityFilter, setCapacityFilter] = useState("1");
  const [minPriceFilter, setMinPriceFilter] = useState("");
  const [maxPriceFilter, setMaxPriceFilter] = useState("");
  const [startDateFilter, setStartDateFilter] = useState(null);
  const [endDateFilter, setEndDateFilter] = useState(null);

  const [displayFilters, setDisplayFilters] = useState(false);

  const history = useHistory();

  const handleResearch = () => {
    const urlParams = new URLSearchParams();
    title && urlParams.append("title", title);
    country && urlParams.append("city", country);
    maxPriceFilter && urlParams.append("maxPrice", maxPriceFilter);
    minPriceFilter && urlParams.append("minPrice", minPriceFilter);
    capacityFilter !== "1" && urlParams.append("capacity", capacityFilter);

    if (startDateFilter && endDateFilter) {
      urlParams.append("startDate", convertDateToAPIFormat(startDateFilter));
      urlParams.append("endDate", convertDateToAPIFormat(endDateFilter));
    }

    history.push({
      pathname: "/annonces",
      search: "?" + urlParams.toString(),
    });
  };

  const { data, isValidating } = useSWR(
    query.length > 0
      ? `https://api-adresse.data.gouv.fr/search/?q=${query}&limit=5`
      : null
  );

  return (
    <div className="flex flex-col w-full px-4 py-8 mx-auto bg-white rounded-md md:1/2 lg:w-2/3 custom-shadow">
      <div className="relative flex flex-col gap-4 md:flex-row">
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Que recherchez-vous ?"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="px-4 py-2 bg-gray-100 rounded-lg md:w-1/2"
        />

        <input
          type="text"
          name="location"
          id="location"
          placeholder="Saisissez une ville ou un code postal"
          autoComplete="off"
          value={country}
          onChange={(e) => {
            setCountry(e.target.value);
            setQuery(e.target.value);
          }}
          className="relative px-4 py-2 bg-gray-100 rounded-lg md:w-1/2"
        />
        <ul
          className={`absolute right-0 w-full md:w-1/2 overflow-hidden bg-white rounded-md shadow-xl top-full`}
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

      <button
        className="my-8 font-bold text-green-700 w-max"
        onClick={() => setDisplayFilters(!displayFilters)}
      >
        {displayFilters ? "Cacher" : "Afficher"} les filtres
      </button>
      {displayFilters ? (
        <div className="flex flex-col items-center justify-center gap-8 mb-8 filters">
          <div className="flex flex-col items-center justify-center">
            <label htmlFor="capacity" className="text-lg font-bold">
              Capacité du logement
            </label>
            <input
              name="capacity"
              id="capacity"
              type="range"
              min="1"
              max="10"
              value={capacityFilter}
              onChange={(e) => setCapacityFilter(e.target.value)}
            />
            <span>{capacityFilter}</span>
          </div>

          <div className="flex gap-4">
            <input
              type="number"
              className="px-4 py-2 bg-gray-100 rounded-lg"
              placeholder="Prix minimum"
              value={minPriceFilter}
              onChange={(e) => setMinPriceFilter(e.target.value)}
            />
            <input
              type="number"
              className="px-4 py-2 bg-gray-100 rounded-lg"
              placeholder="Prix maximum"
              value={maxPriceFilter}
              onChange={(e) => setMaxPriceFilter(e.target.value)}
            />
          </div>

          <div className="flex items-center justify-center w-4/5 gap-4">
            <span className="text-lg font-bold">Du</span>
            <DatePicker
              dateFormat="dd/MM/yyyy"
              selected={startDateFilter}
              onChange={(date) => setStartDateFilter(date)}
              className="w-full px-4 py-2 bg-gray-100 rounded-lg"
              isClearable
              placeholderText="Choissisez une date de début"
            />

            <span className="text-lg font-bold">au</span>

            <DatePicker
              dateFormat="dd/MM/yyyy"
              selected={endDateFilter}
              onChange={(date) => setEndDateFilter(date)}
              className="w-full px-4 py-2 bg-gray-100 rounded-lg"
              isClearable
              placeholderText="Choissisez une date de fin"
            />
          </div>
        </div>
      ) : null}

      <button onClick={handleResearch} className="mx-auto Button">
        Rechercher
      </button>
    </div>
  );
};

export default Search;
