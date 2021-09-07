import { CHANGE_FAVS, SHOW_MODAL, DEL_FAVS, ADD_PRODUCT, TO_CAR, TO_FAVORITES, CHANGE_CAR, SHOW_DISPLAY, SELECT_AMOUNT, MANAGE_TOTAL,DELETE_FROMCAR } from '../types';

 const ProductReducer =( state, action ) => { 
    const {payload, type} = action;

    switch (type) { 
        case SHOW_MODAL:
            
            return{
                ...state,
                showModal: payload,
                onCar: [],
                onFavorites: [],
                amount:0,
                total:0
            }
        case DEL_FAVS:
            
            return{
                ...state,
                onFavorites: payload
            }
        case CHANGE_FAVS:
            
            return{
                ...state,
                showFavorites: payload
            }
        case DELETE_FROMCAR:
            
            return{
                ...state,
                onCar: payload
            }
        case MANAGE_TOTAL:
            
            return{
                ...state,
                total: payload
            }
        case CHANGE_CAR:
            
            return{
                ...state,
                showCar: payload
            }
        case SELECT_AMOUNT:
            
            return{
                ...state,
                amount: payload
            }
        case SHOW_DISPLAY:
            
            return{
                ...state,
                onDisplay: payload,
                amount: 0
            }
        case ADD_PRODUCT:
            
            return{
                ...state,
                products: payload
            }
        case TO_CAR:
            return{
                ...state,
                onCar: payload
            }
        case TO_FAVORITES:
            return{
                ...state,
                onFavorites: payload
            }
        
         
        default:
            return state;
    }
}
export default ProductReducer;