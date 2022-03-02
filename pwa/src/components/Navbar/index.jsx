import { useUser } from "../../hooks/user";

const Navbar = () => {
  const { isLogged } = useUser();

  return (
    <>
      <div
        className={`text-center py-4 font-bold text-xl ${
          isLogged ? "bg-green-500" : "bg-red-500"
        }`}
      >
        {isLogged ? "Logged" : "Not logged"}
      </div>
      <nav className="flex items-center justify-between w-full h-20 px-12 bg-gray-200">
        <div className="text-xl Navbar-logo">H-Rent</div>
        <ul className="flex text-lg font-bold Navbar-items">
          <li>
            <a
              href="/"
              className="block px-4 py-2 mx-2 transition duration-100 ease-linear rounded-full md:mx-4 hover:bg-gray-300 hover:text-black hover:shadow-md"
            >
              <i className="far fa-heart md:mr-2"></i>
              <span className="hidden md:inline-block">Mes Favoris</span>
            </a>
          </li>

          <li>
            <a
              href="/"
              className="block px-4 py-2 mx-2 transition duration-100 ease-linear rounded-full md:mx-4 hover:bg-gray-300 hover:text-black hover:shadow-md"
            >
              <i className="far fa-calendar md:mr-2"></i>
              <span className="hidden md:inline-block">Mes Réservations</span>
            </a>
          </li>

          <li>
            <button
              onClick={() => {}}
              className="px-4 py-2 mx-2 text-white transition duration-100 ease-linear bg-black rounded-full md:mx-4 hover:bg-gray-300 hover:text-black hover:shadow-md"
            >
              Connexion
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
