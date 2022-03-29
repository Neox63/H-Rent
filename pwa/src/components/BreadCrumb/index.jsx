import { Link } from "react-router-dom";

const BreadCrumb = ({ links }) => {
  return (
    <>
      <Link to={"/"}>Home</Link>
      {links?.map((link, index) => (
        <Link key={index} to={link.url}>
          {" "}
          / {link.label}
        </Link>
      ))}
    </>
  );
};

export default BreadCrumb;
