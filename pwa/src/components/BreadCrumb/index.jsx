import { Link } from "react-router-dom";

const BreadCrumb = ({ links, className = "" }) => {
  return (
    <div className={`${className}`}>
      <Link className="hover:text-green-700" to={"/"}>
        Home
      </Link>
      {links?.map((link, index) => (
        <div key={index} className="inline">
          {" "}
          /{" "}
          <Link className="hover:text-green-700" key={index} to={link.url}>
            {link.label}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BreadCrumb;
