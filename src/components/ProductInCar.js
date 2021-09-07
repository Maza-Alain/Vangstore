import React, { useContext } from 'react';
import styled from '@emotion/styled';
import ProductContext from '../context/product/ProductContext';

const ContainerProduct = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 95%;
    margin: 5px auto;
    background-color: rgba(24, 20, 20, 0.65);
    
`;
const NamePrice= styled.p`
    color: #fff;
    font-size: 1.65rem;
    @media(max-width: 425px){
        font-size: 1.1rem;  
    }
`;

const ImageProduct = styled.img`
    width: 20%;
`;
const EraserProduct = styled.p`
    color: #b3a813;
    font-size: 2rem;
    cursor: pointer;
    
`;
const ProductInCar = ({product}) => {
    const {deleteProduct, manageTotal } = useContext(ProductContext);
    const {name, price, image, code} = product;
   
    const deleting = () => {
        deleteProduct(code);
        manageTotal(-price)
    }

    return ( 
        <ContainerProduct >
            <ImageProduct src={image} />
            <NamePrice>{name}</NamePrice>
            <NamePrice>${price}</NamePrice>
            <EraserProduct onClick={deleting}>x</EraserProduct>
        </ContainerProduct>
     );
}
 
export default ProductInCar;