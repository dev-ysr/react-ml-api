import React, { useReducer } from "react";
import ProductReducer from "./ProductReducer";
import ProductContext from "./ProductContext";
import axios from "axios";

export const ProductState = (props) => {
  const initialState = {
    products: [],
    conditions: [],
  };

  const [state, dispatch] = useReducer(ProductReducer, initialState);

  const getProductsByTerm = async (term) => {
    const res = await axios.get(
      "http://localhost:4000/api/search?query=" + term
    );

    let conditions = res.data
      .map((item) => item.condition)
      .filter((value, index, self) => self.indexOf(value) === index);
    conditions.push("renewed");

    dispatch({
      type: "GET_PRODUCTS_BY_TERM",
      payload: {
        products : res.data,
        conditions : conditions
      },
      
    });

    // console.log(res.data);
    console.log(conditions);
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
        conditions: state.conditions,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};
