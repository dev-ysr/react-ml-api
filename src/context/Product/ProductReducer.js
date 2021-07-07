import {GET_PRODUCTS_BY_TERM} from '../types'

export default (state, action) => {
    const {payload, type} = action;

    switch(type){
        case GET_PRODUCTS_BY_TERM:
            return {
                ...state,
                products: payload,
            }
    }
}