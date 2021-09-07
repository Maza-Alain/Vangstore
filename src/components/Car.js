import React, { useContext, useEffect } from 'react';
import styled from '@emotion/styled';
import ProductContext from '../context/product/ProductContext';
import ProductInCar from './ProductInCar';
import nextId from "react-id-generator";

const CarContainer = styled.div`
    position: fixed;
    top: 7rem;
    /* right: 13rem; */
    background-color: rgba(226, 225, 133, 0.76);
    width: 55%;
    height: 20rem;
    z-index: 3;
    overflow-y: scroll;
`;
const Total = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 95%;
    margin: 5px auto;
    background-color: rgba(24, 20, 20, 0.65);
`;
const Money= styled.p`
    color: #fff;
    font-size: 1.65rem;
    @media(max-width: 425px){
        font-size: 1.1rem;  
    }
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
    @media (max-width: 768px){
        font-size: 1rem;
        width: 29%;
    }
    &:hover{
        background-color: rgba(12, 79, 117, 0.65);
    }
`;
const Default = styled.p`
    color: #fff;
    font-size: 2.4rem;
    padding:10px;
    text-align: center;
    background-color: rgba(12, 79, 117, 0.65);
    @media (max-width: 768px){
        font-size: 1.7rem;
    }
`;
const Car = () => {
    const {onCar, total, showFavorites, toggleShowFav,toggleShowCar, toggleShowModal} = useContext(ProductContext);

    useEffect(()=>{
        if(showFavorites) toggleShowFav(); 
    },[])

    const toModal = () => {
        if(onCar[0]){
            toggleShowCar();
            toggleShowModal();
        }
    }
    /* const test = onCar[0].name */
    return ( 
        <CarContainer>
            <Total>
                <Money>Total: ${total}</Money>
                <Button onClick={()=>{toModal()}}>Pay</Button>
            </Total>
            {onCar[0]
            ?
            
            onCar.map(on =>(
                on.map(product => (
                    <ProductInCar
                        key={nextId()}
                        product={product}
                    />
                ))
                ))
            : 
            <Default>Select something!</Default>
            }
            
            
        </CarContainer>
     );
}
 
export default Car;