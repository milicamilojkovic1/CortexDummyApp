import React, { useState, useContext, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';

import { GlobalContext } from '../state/GlobalState';

export const EditProduct = (route) => {
  let history = useHistory();

  const { products, editProduct } = useContext(GlobalContext);

  const [selectedProduct, setSelectedProduct] = useState({
    id: null,
    title: "",
    description: "",
    price: "",
    rating: "",
    brand: "",
    category: ""
  });

  const currentProductId = route.match.params.id;

  useEffect(() => {
    const productId = currentProductId;
    const selectedProduct = products.find(
      (currentProductTraversal) => currentProductTraversal.id === parseInt(productId)
    );
    setSelectedProduct(selectedProduct);
  }, [currentProductId, products]);

  const onSubmit = (e) => {
    e.preventDefault();
    editProduct(selectedProduct);
    history.push("/");
  };

  const handleOnChange = (productKey, newValue) =>
    setSelectedProduct({ ...selectedProduct, [productKey]: newValue });

  if (!selectedProduct || !selectedProduct.id) {
    return <div>Invalid Employee ID.</div>;
  }

  return (
    <React.Fragment>
      <div className="w-full max-w-sm container mt-20 mx-auto">
        <form onSubmit={onSubmit}>
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
              onChange={(e) => handleOnChange("title", e.target.value)}
              type="text"
              placeholder="Product Title"
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
              onChange={(e) => handleOnChange("description", e.target.value)}
              type="text"
              placeholder="Enter Decsription"
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
              onChange={(e) => handleOnChange("price", e.target.value)}
              type="text"
              placeholder="Enter Price"
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
              onChange={(e) => handleOnChange("rating", e.target.value)}
              type="text"
              placeholder="Enter Rating"
            />
          </div>

          <div className="w-full  mb-5">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="brand"
            >
              Brand
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
              value={selectedProduct.brand}
              onChange={(e) => handleOnChange("brand", e.target.value)}
              type="text"
              placeholder="Enter Brand"
            />
          </div>

          <div className="w-full  mb-5">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="category"
            >
              Category
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
              value={selectedProduct.category}
              onChange={(e) => handleOnChange("category", e.target.value)}
              type="text"
              placeholder="Enter Category"
            />
          </div>

          <div className="flex items-center justify-between">
            <button className="block mt-5 bg-green-400 w-full hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:text-gray-600 focus:shadow-outline">
              Edit Product
            </button>
          </div>
          <div className="text-center mt-4 text-gray-500">
            <Link to="/">Cancel</Link>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};