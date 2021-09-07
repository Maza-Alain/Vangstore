import React, { useContext } from 'react';

import styled from '@emotion/styled';
import ProductContext from '../context/product/ProductContext';

const ContainerProduct = styled.div`
    width: 350px;
    flex-shrink: 0;
    margin: 5px 25px;
    display: flex;
    position: relative;
    justify-content: center;
    @media (max-width: 350px){
        width: 88vw;
    }
`;

const ImgContainer = styled.img`
    height: 90%;
    cursor: pointer;
`;
const Link = styled.a`
    display: flex;
    justify-content: center;
`;
const Text = styled.p`
    position: absolute;
    left: -5px;
    top: -5px;
    color: #fff;
    padding: 4px;
    background-color: #19191f;
    font-size: 1.5rem;
`;
const Product  = ({product}) => {
    const{toDisplay} = useContext(ProductContext);

    
    return ( 
        <ContainerProduct className={product.backg}>
            <Text>{product.name}</Text>
            <Link href="#displayCont"> <ImgContainer src={product.image} onClick={() => toDisplay(product.code)}/></Link>
        </ContainerProduct>
        );
}
 
export default Product ;