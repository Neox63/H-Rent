import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section
        id="hero"
        className="flex flex-col items-center max-w-5xl pt-20 mx-auto"
      >
        <h1 className="text-6xl font-extrabold tracking-tight text-center">
          Trouvez votre prochain séjour dès maintenant grace à H-Rent !
        </h1>
        <p className="my-6 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
          pariatur iure, est quisquam eveniet fugit debitis corporis vel, minima
          aspernatur voluptates
        </p>
        <Link
          className="p-4 text-center bg-indigo-400 rounded-lg"
          to="/annonces"
        >
          Parcourez les offres disponibles
        </Link>
      </section>
    </>
  );
};

export default Home;
