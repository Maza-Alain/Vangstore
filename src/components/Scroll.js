import React, { useContext } from 'react';
import styled from '@emotion/styled';
import ProductContext from '../context/product/ProductContext';
import Product from './Product';

const ScrollContainer = styled.div`
    width: 95%;
    overflow-x: auto;
    height: 250px;
    margin: 1rem auto;
    display: flex;
    z-index: 0;
    position: relative;

`;

const Scroll = () => {

    const { products, showCar, toggleShowCar, showFavorites, toggleShowFav } = useContext(ProductContext);
    
    const closeWindows = () => {
        if (showCar) {
            toggleShowCar();
        }
        if (showFavorites) {
            toggleShowFav();
        }
    }
    
    return ( 
        <ScrollContainer onClick={() => closeWindows()}>
            {products.map( product => ( 
                <Product
                    key={product.code}
                    product={product}
                />))}
        </ScrollContainer>
     );
}
 
export default Scroll;