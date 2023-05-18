import React, { useState, useContext, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';

import { GlobalContext } from '../state/GlobalState';

export const ViewProduct = (route) => {
  let history = useHistory();

  const { products } = useContext(GlobalContext);

  const [selectedProduct, setSelectedProduct] = useState({
    id: null,
    title: "",
    price: "",
    images: [],
  });

  const currentProductId = route.match.params.id;

  useEffect(() => {
    const productId = currentProductId;
    const selectedProduct = products.find(
      (currentProductTraversal) => currentProductTraversal.id === parseInt(productId)
    );
    setSelectedProduct(selectedProduct);
  }, [currentProductId, products]);


  if (!selectedProduct || !selectedProduct.id) {
    return <div>Invalid Product ID.</div>;
  }

  return (
    <React.Fragment>
      
      
      <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
        <div className="-m-1 flex flex-wrap md:-m-2">
        {selectedProduct.images.map((i,k) => <div key={k} className="flex w-1/3 flex-wrap">
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src={i} />
            </div>
          </div>)}
      </div>
    </div>



<div className="w-full max-w-sm container mt-20 mx-auto">
          <div className="w-full mb-5">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="title"
            >
              Product title
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
              value={selectedProduct.title}
              type="text"
              placeholder="Product Title" readOnly
            />
          </div>
          <div className="w-full  mb-5">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="description"
            >
              Description
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
              value={selectedProduct.description}
              type="text"
              placeholder="Enter Decsription" readOnly
            />
          </div>
          <div className="w-full  mb-5">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="price"
            >
              Price
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
              value={selectedProduct.price}
              type="text"
              placeholder="Enter Price" readOnly
            />
          </div>

          <div className="w-full  mb-5">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="rating"
            >
              Rating
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
              value={selectedProduct.rating}
              type="text"
              placeholder="Enter Rating" readOnly
            />
          </div>

          <div className="w-full mb-5">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="brand"
            >
              Brand
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
              value={selectedProduct.brand}
              type="text"
              placeholder="Enter Brand" readOnly
            />
          </div>

          <div className="w-full mb-5">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="category"
            >
              Category
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
              value={selectedProduct.category}
              type="text"
              placeholder="Enter Category" readOnly
            />
          </div>
          <div className="text-center mt-4 text-gray-500">
            <Link to="/">Back</Link>
          </div>
      </div>
    </React.Fragment>
  );
};