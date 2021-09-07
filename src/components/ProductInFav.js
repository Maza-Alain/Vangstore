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
const Button = styled.button`
    padding: 1px 5px;
    background-color: #20202e;
    color: #fff;
    font-size: 1.2rem;
    border-radius: 10px;
    border-style: none;
    cursor: pointer;
    width: 20%;
`;

const ProductInFav = ({product}) => {
    const {name, price, image, code} = product;

    const {  toCar, manageTotal, deleteFav } = useContext(ProductContext);
    
    const toTheCar = () =>{
        deleteFav(code);
        manageTotal(price);
        toCar(code);
        
    }
    return ( 
        <ContainerProduct >
            <ImageProduct src={image} />
            <NamePrice>{name}</NamePrice>
            <NamePrice>${price}</NamePrice>
            <Button onClick={toTheCar}>+</Button>
            <EraserProduct onClick={()=>deleteFav(code)}>x</EraserProduct>
        </ContainerProduct>
     );
}
 
export default ProductInFav;