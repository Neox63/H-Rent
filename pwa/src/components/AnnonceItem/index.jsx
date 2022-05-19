import { Link } from "react-router-dom";
import useSWR from "swr";

const AnnonceItem = ({ initialData }) => {
  const { data: typeLogement } = useSWR(
    initialData ? `/typeLogement/${initialData.idTypeLogement}` : null,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  return (
    <div className="flex flex-col my-8 overflow-hidden border-2 border-black rounded-lg shadow-xl md:p-2 md:h-64 md:flex-row">
      {/* <img
        src={
          initialData.images.length > 0
            ? URL.createObjectURL(initialData.images[0])
            : "https://images.unsplash.com/photo-1528111057883-4f5a995343bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2835&q=80"
        }
        alt=""
        className="w-full h-64 md:w-2/5 md:h-auto md:rounded-lg"
      /> */}
      <div className="flex flex-col justify-between w-full p-4">
        <div className="flex flex-col">
          <div className="flex justify-between mb-4 text-xl font-semibold">
            <div>
              <Link to={`/annonce/${initialData.id}`}>{initialData.title}</Link>
            </div>
          </div>
          <div>
            {typeLogement?.libelle} · {initialData.capacity} pers. · {initialData.city}
          </div>
        </div>

        <div className="self-end text-lg">
          à partir de <span className="text-2xl font-bold">{initialData.price}e</span> /
          nuit
        </div>
      </div>
    </div>
  );
};

export default AnnonceItem;
