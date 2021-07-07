import React, {useReducer} from 'react'
import ProductReducer from './ProductReducer'  
import ProductContext from './ProductContext' 
import axios from "axios";

export const ProductState = (props) => {
    const initialState = {
        products : []
    }
    
    const [state, dispatch] = useReducer(ProductReducer, initialState);

    const getProductsByTerm = async (term) => {

        // e.preventDefault();
        // const term = document.querySelector("#search-input").value;
        
        const res = await axios.get('http://localhost:4000/api/search?query='+term)
        dispatch({
            type: 'GET_PRODUCTS_BY_TERM',
            payload: res.data
        })


        console.log(res.data);

    }; 

    return (

        <ProductContext.Provider value={{
            products : state.products,
            getProductsByTerm,
        }}>
            {props.children}
        </ProductContext.Provider>
        
    )
}
