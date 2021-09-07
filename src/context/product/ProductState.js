import React, { useReducer } from 'react';
import ProductContext from './ProductContext';
import ProductReducer from './ProductReducer';
import { ADD_PRODUCT, SHOW_MODAL, DEL_FAVS, TO_CAR, TO_FAVORITES, CHANGE_CAR, SHOW_DISPLAY, SELECT_AMOUNT, MANAGE_TOTAL, DELETE_FROMCAR, CHANGE_FAVS } from '../types';

import productList from '../../AddingProducts';

const ProductState = (props) => {
    
    const initialState = {
        onCar: [],
        products: [],
        onFavorites: [],
        amount: 0,
        onDisplay:[productList[0]],
        showCar: false,
        showFavorites: false,
        started: true,
        showModal: false,
        total: 0
    };

    const [state, dispatch ] = useReducer( ProductReducer, initialState);
    /* ----------------showing modal--------------------- */
    const toggleShowModal = () => {
        
        let on;
        if ( state.showModal === false ){
            on = true;
            
           
        } if ( state.showModal === true ){
            on = false;
            
        }
        
        dispatch({
            type:SHOW_MODAL,
            payload: on
        })
    }
    /* ----------------deleting products from favs-------------------- */
    
    const deleteFav = (id) => {
        
        const newFav = state.onFavorites;

        for (let i = 0; i < newFav.length; i++) {
            
            if(newFav[i].code === id){
                
                newFav.splice(i, 1)
                break;
            }
            
        } 
         
         dispatch({
             type:DEL_FAVS,
             payload: newFav
         })
     }
    /* ----------------manage the total--------------------- */
    const manageTotal = (money) => {
        
        let moneyAmount = state.total + money;
        
        
        dispatch({
            type:MANAGE_TOTAL,
            payload: moneyAmount
        })
    }
    /* ----------------select amount--------------------- */
    const selectAmount = (amount) => {
        
        
        
        dispatch({
            type:SELECT_AMOUNT,
            payload: amount
        })
    }
    /* ----------------showing car--------------------- */
    const toggleShowCar = () => {
        
        let on;
        if ( state.showCar === false ){
            on = true;
            
           
        } if ( state.showCar === true ){
            on = false;
            
        }
        
        dispatch({
            type:CHANGE_CAR,
            payload: on
        })
    }
     /* ----------------showing favs--------------------- */
     const toggleShowFav = () => {
        
        let on;
        if ( state.showFavorites === false ){
            on = true;
           
        } if ( state.showFavorites === true ){
            on = false;
        }
        
        dispatch({
            type:CHANGE_FAVS,
            payload: on
        })
    }
    /* ----------------adding products for sale--------------------- */
    
    const addProduct = () => {
       const prods = productList;
        
        dispatch({
            type:ADD_PRODUCT,
            payload: prods
        })
    }
     /* ----------------deleting products from car-------------------- */
    
     const deleteProduct = (id) => {
        
       
        /* const newCar = state.onCar.filter( product => product[0].code !== id)
        console.log(newCar)
        console.log(id); */

        const newCar = state.onCar;

        for (let i = 0; i < newCar.length; i++) {
            
            if(newCar[i][0].code === id){
                
                newCar.splice(i, 1)
                console.log(newCar)
                break;
            }
            
        }
         
         dispatch({
             type:DELETE_FROMCAR,
             payload: newCar
         })
     }
    /* ----------------adding products to car--------------------- */
    const toCar = (id) => {
    
        let num = state.amount;
        const selectedProductCar = state.products.filter ( product => product.code === id );
        let test = []
        let finalCar = []
        
        
        for (let i = 0; i < parseInt(num); i++) {
            console.log(i);//it doesnt run the firs time
            test.push(selectedProductCar)
        }
        
        finalCar = test.concat(state.onCar);
  
        dispatch({
            type:TO_CAR,
            payload: finalCar
        })
  
    }
    /* ----------------adding products to display--------------------- */
    const toDisplay = id => {

        const showedInDisplay = state.products.filter ( product => product.code === id );
        
        dispatch({
            type:SHOW_DISPLAY,
            payload: showedInDisplay
        })
    }
    /* ----------------adding products to favs--------------------- */
    const toFavorites = (id) => {

        const selectedProductFavs = state.products.filter ( product => product.code === id );
        let finalFavs = selectedProductFavs.concat(state.onFavorites);

        dispatch({
            type:TO_FAVORITES,
            payload: finalFavs
        })
    }
    
    
    return ( 
        <ProductContext.Provider value={{
            onCar: state.onCar,
            products: state.products,
            onFavorites: state.onFavorites,
            started: state.started,
            showCar: state.showCar,
            onDisplay: state.onDisplay,
            amount: state.amount,
            total: state.total,
            showFavorites: state.showFavorites,
            showModal: state.showModal,
            toggleShowModal,
            deleteFav,
            toggleShowFav,
            deleteProduct,
            manageTotal,
            selectAmount,
            toDisplay,
            addProduct,
            toCar,
            toFavorites, 
            toggleShowCar
        }}>
            {props.children}
        </ProductContext.Provider>
     );
}
 
export default ProductState;