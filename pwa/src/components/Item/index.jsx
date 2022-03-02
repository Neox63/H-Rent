import { Link } from "react-router-dom";

const Item = ({ initialData, isFavorite }) => {
  return (
    <div className="flex flex-col my-8 bg-gray-200 rounded-b-lg shadow-xl md:h-64 md:rounded-lg md:flex-row">
      <img
        src="https://images.unsplash.com/photo-1528111057883-4f5a995343bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2835&q=80"
        alt=""
        className="w-full h-64 rounded-t-lg md:rounded-t-none md:h-auto md:rounded-l-lg md:w-1/4"
      />
      <div className="flex flex-col justify-between w-full p-4">
        <div className="flex flex-col">
          <div className="flex justify-between mb-4 text-xl font-semibold">
            <div>
              <Link to="/annonce/1">Studio dans jardin privatif</Link>
            </div>
            <div>
              {isFavorite ? (
                <i className="justify-end cursor-pointer far fa-heart hover:text-red-500"></i>
              ) : (
                <i className="justify-end text-red-500 cursor-pointer fas fa-heart hover:text-black"></i>
              )}
            </div>
          </div>
          <div>
            <span>2 voyageurs - </span>
            <span>1 chambre - </span>
            <span>2 lits</span>
          </div>
        </div>

        <div className="self-end text-xl font-bold">32e / nuit</div>
      </div>
    </div>
  );
};

export default Item;
