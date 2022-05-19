import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <div className="flex flex-col p-8 text-center border-2 border-green-700 rounded-md">
      <span className="mb-8 text-2xl font-bold">
        On dirait que vous vous êtes perdu...
      </span>
      <Link className="font-extrabold text-green-700" to="/">
        Retour à l'accueil
      </Link>
    </div>
  );
};

export default Page404;
