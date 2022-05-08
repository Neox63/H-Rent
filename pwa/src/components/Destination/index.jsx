import { Link } from "react-router-dom";

const Destination = ({ title, imageUrl }) => {
  return (
    <Link
      to={`/annonces?country=${title}`}
      className="relative block overflow-hidden text-center text-white bg-green-700 rounded-lg w-60 hover:bg-green-800"
    >
      <img src={imageUrl} alt="destination" className="" />

      <div className="py-3 text-xl font-bold">{title}</div>
    </Link>
  );
};

export default Destination;
