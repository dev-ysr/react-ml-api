import {GET_PRODUCTS_BY_TERM} from '../types'
import {ORDER_PRODUCTS_BY} from '../types'

export default (state, action) => {
    const {payload, type} = action;

    switch(type){
        case GET_PRODUCTS_BY_TERM:
            return {
                ...state,
                products: payload,
            }
        case ORDER_PRODUCTS_BY:
            return{
                ...state,
                products: payload
            }
    }
}