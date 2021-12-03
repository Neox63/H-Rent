import { useParams } from "react-router";

const Annonce = () => {
  const { id } = useParams();

  return (
    <>
      <div>Annonce {id}</div>
    </>
  );
};

export default Annonce;
