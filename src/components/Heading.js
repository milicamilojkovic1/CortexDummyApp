import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../state/GlobalState";

export const Heading = () => {

  const state = useContext(GlobalContext);
  return (
    <div>
      <div className="flex items-center mt-24 mb-10">
        <div className="flex-grow text-left px-4 py-2 m-2">
          <h5 className="text-gray-900 font-bold text-xl">Product Listing</h5>
        </div>
        <div className="flex-grow text-right px-4 py-2 m-2">
            <button onClick={state.loadMore} disabled={state.endPage >= state.productsAll.length} className="disabled:opacity-75 bg-green-400 enabled:hover:bg-green-500 text-white font-semibold py-2 px-4 mx-2 rounded inline-flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right-circle"><circle cx="12" cy="12" r="10"></circle><polyline points="12 16 16 12 12 8"></polyline><line x1="8" y1="12" x2="16" y2="12"></line></svg>
                <span className="pl-2">Load More</span>
            </button>
          <Link to="/add">
            <button className="bg-green-400 hover:bg-green-500 text-white font-semibold py-2 px-4 rounded inline-flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus-circle"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
              <span className="pl-2">Add Product</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};