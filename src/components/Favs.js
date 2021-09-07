import React, { useContext, useEffect } from 'react';
import styled from '@emotion/styled';
import ProductContext from '../context/product/ProductContext';
import ProductInFav from './ProductInFav';
import nextId from "react-id-generator";


const FavContainer = styled.div`
    position: fixed;
    top: 7rem;
    right: 13rem;
    background-color: rgba(226, 225, 133, 0.76);
    width: 55%;
    height: 20rem;
    z-index: 3;
    overflow-y: scroll;
    @media (max-width: 850px){
        right: 9rem;
    }
    @media (max-width: 560px){
        right: 7rem;
    }
    @media (max-width: 476px){
        right: 5.5rem;
    }
    @media (max-width: 370px){
        right: 4.4rem;
    }
`;
const Default = styled.p`
    color: #fff;
    font-size: 1.76rem;
    padding:10px;
    text-align: center;
    background-color: rgba(12, 79, 117, 0.65);
    @media (max-width: 768px){
        font-size: 1.7rem;
    }
`;
const Favs = () => {
    
    const { onFavorites,showCar,toggleShowCar, selectAmount } = useContext(ProductContext);

    useEffect(() =>{
        
        if(showCar) toggleShowCar();
        selectAmount(1);
        
    },[ ])
   
    


    return ( 
        <FavContainer>
            
            {onFavorites[0]
            ? 
            onFavorites.map(product => (
                <ProductInFav
                    key={nextId()}
                    product={product}
                />
            ))

            /* onFavorites.map(on =>(
                on.map(product => (
                    <ProductInFav
                        key={nextId()}
                        product={product}
                    />
                ))
                )) */
            :<Default>Add something to your favs!</Default>
            }
        </FavContainer>
        );
}
 
export default Favs ;