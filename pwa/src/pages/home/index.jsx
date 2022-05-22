import { Link } from "react-router-dom";
import Destination from "../../components/Destination";
import Search from "../../components/Search";

const Home = () => {
  return (
    <>
      <div className="mb-12 text-3xl font-extrabold text-center">
        Des centaines de propriétés qui n'attendent que vous, dans toute la France
      </div>

      <Search />

      <div className="flex flex-col my-12">
        <div className="mb-4 text-xl font-extrabold text-center">
          Vous voulez louer votre logement ? Cliquez sur le bouton ci-dessous
        </div>
        <Link className="mx-auto Button" to={"/create"}>
          Déposer une annonce
        </Link>
      </div>

      <div>
        <div className="mb-4 text-xl font-extrabold text-center">
          Le top des destinations, c'est par ici !
        </div>
        <ul className="flex justify-start flex-grow w-full gap-4 overflow-scroll xl:justify-center">
          <li>
            <Destination
              title="Paris"
              imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg/1200px-La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg"
            />
          </li>
          <li>
            <Destination
              title="Lyon"
              imageUrl="https://static.lexpress.fr/medias_11552/w_1888%2Ch_1056%2Cc_crop%2Cx_154%2Cy_157/w_640%2Ch_360%2Cc_fill%2Cg_north/v1548771652/vue-de-lyon-depuis-la-saone-au-crepuscule_5914924.jpg"
            />
          </li>
          <li>
            <Destination
              title="Clermont Ferrand"
              imageUrl="https://uil.unesco.org/sites/default/files/clermont-ferrand_france_angelus_yodason_flickr.jpg"
            />
          </li>
          <li>
            <Destination
              title="Bordeaux"
              imageUrl="https://www.unairdebordeaux.fr/wp-content/uploads/2019/07/Bordeaux-F%C3%AAte-le-Fleuve-2015%C2%A9Eric-Bouloumi%C3%A9-Photographe-ok.jpg"
            />
          </li>
          <li>
            <Destination
              title="Marseille"
              imageUrl="https://www.okvoyage.com/wp-content/uploads/2020/03/marseille-france.jpg"
            />
          </li>
        </ul>
      </div>
    </>
  );
};

export default Home;
