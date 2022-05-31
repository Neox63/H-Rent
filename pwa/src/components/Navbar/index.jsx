import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="flex items-center justify-between w-full h-20 px-6 bg-white shadow-lg">
        <Link to="/">
          <div className="text-2xl md:text-4xl Navbar-logo">H-Rent</div>
        </Link>

        <ul className="flex items-center gap-4 px-4 font-bold md:gap-8">
          <li>
            <Link
              className="block text-sm text-center md:text-base Button"
              to={"/create"}
            >
              Poster une annonce
            </Link>
          </li>

          <li>
            <Link
              className="text-sm text-center md:text-base hover:text-green-700"
              to={"/reservations"}
            >
              Mes réservations
            </Link>
          </li>

          <li>
            <Link
              className="text-sm text-center md:text-base hover:text-green-700"
              to={"/reservation-request"}
            >
              Demande de réservation
            </Link>
          </li>

          {/* <li>
              <Link className="text-sm text-center md:text-base hover:text-green-700" to={"/favoris"}>
                Favoris
              </Link>
            </li> */}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
