import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="flex items-center justify-between w-full h-20 px-6 border-b border-gray-400">
        <Link to="/">
          <div className="Navbar-logo">H-Rent</div>
        </Link>
        <div className="flex">
          <ul className="flex px-4 font-bold border-r">
            <li className="mx-4">
              <Link className="hover:text-indigo-500" to={"/create"}>
                Poster une annonce
              </Link>
            </li>

            <li className="mx-4">
              <Link
                className="hover:text-indigo-500"
                to={"/reservation-request"}
              >
                Demande de réservation
              </Link>
            </li>

            <li className="mx-4">
              <Link className="hover:text-indigo-500" to={"/annonces"}>
                Annonces
              </Link>
            </li>

            <li className="mx-4">
              <Link className="hover:text-indigo-500" to={"/favoris"}>
                Favoris
              </Link>
            </li>

            <li className="mx-4">
              <Link className="hover:text-indigo-500" to={"/reservations"}>
                Réservations
              </Link>
            </li>
          </ul>

          <div className="px-8">
            <button className="mr-4">
              <i class="fas fa-moon"></i>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
