import BreadCrumb from "../../components/BreadCrumb";

const Profil = () => {
  return (
    <>
      <BreadCrumb links={[{ url: "/profil", label: "Profil" }]} />
      <div className="my-8 text-2xl">Mon profil</div>
    </>
  );
};

export default Profil;
