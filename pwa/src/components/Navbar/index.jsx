import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="flex items-center justify-between w-full h-20 px-6 bg-white shadow-lg">
        <Link to="/">
          <div className="text-4xl Navbar-logo">H-Rent</div>
        </Link>
        <div className="flex">
          <ul className="flex px-4 font-bold">
            <li className="mx-4">
              <Link className="Button" to={"/create"}>
                Poster une annonce
              </Link>
            </li>

            <li className="mx-4">
              <Link className="hover:text-green-700" to={"/reservation-request"}>
                Demande de réservation
              </Link>
            </li>

            <li className="mx-4">
              <Link className="hover:text-green-700" to={"/favoris"}>
                Favoris
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
