import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>Bienvenue sur H-Rent</h1>
      <Link to="/annonces">Liste des annonces</Link>
    </>
  );
};

export default Home;
