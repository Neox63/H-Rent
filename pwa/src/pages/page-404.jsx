import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <div className="text-center">
      <h1>This looks like a 404...</h1>
      <Link to="/">Get me back home !</Link>
    </div>
  );
};

export default Page404;
