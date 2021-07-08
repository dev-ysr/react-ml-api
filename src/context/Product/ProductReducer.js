import {FILTER_PRODUCTS_BY_CONDITION, GET_PRODUCTS_BY_TERM} from '../types'
import {ORDER_PRODUCTS_BY} from '../types'

const fn = (state, action) => {
    const {payload, type} = action;

     console.log(payload);

    switch(type){
        case GET_PRODUCTS_BY_TERM:
            return {
                ...state,
                products: payload.products,
                filteredProducts: [...payload.products],
                conditions: payload.conditions
            }
        case ORDER_PRODUCTS_BY:
            return{
                ...state,
                filteredProducts: payload
            }
        case FILTER_PRODUCTS_BY_CONDITION:
            return {
                ...state,
                filteredProducts: payload
            }
        default:
            return;
    }
}

export default fn;