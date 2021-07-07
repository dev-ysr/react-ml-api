import React, { useReducer } from "react";
import ProductReducer from "./ProductReducer";
import ProductContext from "./ProductContext";
import axios from "axios";

export const ProductState = (props) => {
  const initialState = {
    products: [],
    conditions : [],
  };

  const [state, dispatch] = useReducer(ProductReducer, initialState);

  const getProductsByTerm = async (term) => {
    const res = await axios.get(
      "http://localhost:4000/api/search?query=" + term
    );
    dispatch({
      type: "GET_PRODUCTS_BY_TERM",
      payload: res.data,
    });

    state.conditions = res.data.map(item => item.condition)
    .filter((value, index, self) => self.indexOf(value) === index);
    state.conditions.push('renewed');

    // console.log(res.data);
    console.log(state.conditions);

  };

  const orderProductsBy = (order) => {
    if (order === "asc") {
      console.log("asc");
      state.products.sort((a, b) => {
        return a.price - b.price;
      });
    }
    if (order === "des") {
      console.log("des");
      state.products.sort((a, b) => {
        return b.price - a.price;
      });
    }

    dispatch({
      type: "ORDER_PRODUCTS_BY",
      payload: state.products,
    });

  };

  return (
    <ProductContext.Provider
      value={{
        products: state.products,
        getProductsByTerm,
        orderProductsBy,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};
