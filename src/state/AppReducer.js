export default function appReducer(state, action) {
  switch (action.type) {
    case "LOAD_PRODUCTS":
      const productsAll = [...action.payload];
      return {
        ...state,
        endPage: 9,
        productsAll: productsAll,
        products: [...action.payload.slice(0, 9)],
      };

    case "LOAD_MORE":
      return {
        ...state,
        endPage: (state.endPage + 9),
        products: [...state.productsAll.slice(0, state.endPage + 9)],
      };

    case "ADD_PRODUCT":
      return {
        ...state,
        products: [...state.products, action.payload],
      };

    case "EDIT_PRODUCT":
      const updatedProduct = action.payload;

      const updatedProducts = state.products.map((product) => {
        if (product.id === updatedProduct.id) {
          return updatedProduct;
        }
        return product;
      });

      return {
        ...state,
        products: updatedProducts,
      };

    case "REMOVE_PRODUCT":
      return {
        ...state,
        products: state.products.filter(
          (products) => products.id !== action.payload
        ),
      };

    default:
      return state;
  }
}
