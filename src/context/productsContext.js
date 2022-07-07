import axios from "axios";
import React, { createContext, useReducer } from "react";

export const productsContext = createContext();
const INIT_STATE = {
  products: [],
  pages: 0,
  oneProduct: null,
};
function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_PRODUCTS":
      return {
        ...state,
        products: action.payload.data,
        pages: Math.ceil(action.payload.headers["x-total-count"] / 4),
      };
    case "GET_ONE":
      return {
        ...state,
        oneProduct: action.payload,
      };
    default:
      return state;
  }
}

const PRODUCTS_API = "http://localhost:8000/products";
const ProductsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  // !Create
  async function createWatch(newWatch) {
    await axios.post(`${PRODUCTS_API}`, newWatch);
    getWatch();
  }
  // !Read
  async function getWatch() {
    let res = await axios(`${PRODUCTS_API}${window.location.search}`);
    dispatch({
      type: "GET_PRODUCTS",
      payload: res,
    });
  }
  // !DELETE
  async function deleteWatch(id) {
    await axios.delete(`${PRODUCTS_API}/${id}`);
    getWatch();
  }
  // ! details and edit
  async function oneWatch(id) {
    const res = await axios(`${PRODUCTS_API}/${id}`);
    dispatch({
      type: "GET_ONE",
      payload: res.data,
    });
  }

  // !Update
  async function updateWatch(id, editedWatch) {
    await axios.patch(`${PRODUCTS_API}/${id}`, editedWatch);
    getWatch();
  }

  return (
    <productsContext.Provider
      value={{
        products: state.products,
        pages: state.pages,
        oneProduct: state.oneProduct,
        createWatch,
        deleteWatch,
        getWatch,
        oneWatch,
        updateWatch,
      }}>
      {children}
    </productsContext.Provider>
  );
};
export default ProductsContextProvider;
