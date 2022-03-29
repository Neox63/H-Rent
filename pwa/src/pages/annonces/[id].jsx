import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { getAnnonce } from "../../fakeAPI";
import { Redirect } from "react-router-dom";

const Annonce = () => {
  const { id } = useParams();

  const currentAnnonce = getAnnonce(id);

  if (currentAnnonce === undefined) return <Redirect to={"/"} />;

  return (
    <>
      <Link to={"/annonces"}>Retour</Link>
      <div>Annonce {id}</div>
      <pre>{JSON.stringify(currentAnnonce)}</pre>
      <button className="p-2 mt-4 bg-indigo-500 rounded-lg">Réserver</button>
    </>
  );
};

export default Annonce;
