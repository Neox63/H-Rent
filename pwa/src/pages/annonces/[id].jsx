import { useParams } from "react-router";
import { addReservation, getAnnonce } from "../../fakeAPI";
import { Redirect, useHistory } from "react-router-dom";
import BreadCrumb from "../../components/BreadCrumb";
import { useUser } from "../../providers/user";

const Annonce = () => {
  const { id } = useParams();
  const { user } = useUser();
  const history = useHistory();

  const currentAnnonce = getAnnonce(+id);

  const reserve = () => {
    addReservation({ idAnnonce: +id, idUser: user.id });
    history.push("/");
  };

  if (currentAnnonce === undefined) return <Redirect to={"/"} />;

  return (
    <>
      <BreadCrumb
        links={[
          { url: "/annonces", label: "Annonces" },
          { url: `/annonce/${id}`, label: id },
        ]}
      />
      <div className="my-8 text-2xl">Annonce {id}</div>
      <pre>{JSON.stringify(currentAnnonce)}</pre>
      <button onClick={reserve} className="p-2 mt-4 bg-indigo-500 rounded-lg">
        Réserver
      </button>
    </>
  );
};

export default Annonce;
