import React, { createContext, useEffect, useReducer } from "react";

import appReducer from "./AppReducer";

const initialState = {
  products: [],
  productsAll: [],
  endPage: 9
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        loadProducts(data.products);
      });
  }, []);

  function loadProducts(products) {
    dispatch({
      type: "LOAD_PRODUCTS",
      payload: products,
    });
  }

  function loadMore() {
    dispatch({
      type: "LOAD_MORE"
    });
  }

  function addProduct(product) {
    fetch(`https://dummyjson.com/products/add`, { 
        method: "POST",  
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product)})
      .then(res => res.json())
      .then(data => console.log(data));

    dispatch({
      type: "ADD_PRODUCT",
      payload: product,
    });
  }

  function editProduct(product) {
    fetch(`https://dummyjson.com/products/${product.id}`, { 
        method: "PUT",  
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({title: 'iPhone Galaxy +1'})})
      .then(res => res.json())
      .then(data => console.log(data));
    dispatch({
      type: "EDIT_PRODUCT",
      payload: product,
    });
  }

  function removeProduct(id) {
    fetch(`https://dummyjson.com/products/${id}`,{ method: "DELETE"})
      .then(res => res.json())
      .then(data => console.log(data));

    dispatch({
      type: "REMOVE_PRODUCT",
      payload: id,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        products: state.products,
        productsAll: state.productsAll,
        endPage: state.endPage,
        loadProducts,
        addProduct,
        editProduct,
        removeProduct,
        loadMore,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
