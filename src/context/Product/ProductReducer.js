import {GET_PRODUCTS_BY_TERM} from '../types'
import {ORDER_PRODUCTS_BY} from '../types'

export default (state, action) => {
    const {payload, type} = action;

     console.log(payload);

    switch(type){
        case GET_PRODUCTS_BY_TERM:
            return {
                ...state,
                products: payload.products,
                conditions: payload.conditions
            }
        case ORDER_PRODUCTS_BY:
            return{
                ...state,
                products: payload
            }
    }
}