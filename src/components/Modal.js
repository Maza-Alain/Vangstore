import React, { useContext } from 'react';
import styled from '@emotion/styled';
import vincent from '../img/happyVincent 1.png'
import ProductContext from '../context/product/ProductContext';

const ModalContainer = styled.div`
        position: fixed;
        background-color: rgba(36, 27, 27, 0.46);
        width: 100%;
        height: 100vh;
        display: flex;
        z-index: 5;
        justify-content: center;
        align-items: center;
    `;
    const ModalContent = styled.div`
    position: relative;
    background-color: #EAD28E;
    width: 80%;
    height: 60vh;
    padding: 0 8px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    border-radius: 20px;
    @media (max-width:768px){
        height: 50vh;
    }
    @media (max-width:560px){
        flex-direction: column;
        justify-content: space-around;
        width: 60%;
        height: 60vh;
        padding: 0 0;
    }
    `;
    const ContainerImg = styled.div`
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        /* @media (max-width:768px){
            width: 70%;
        } */
        @media (max-width:560px){
            width: 100%;
        }
        
    `;
    

    const Vincent = styled.img`
        width: 95%;
        filter: drop-shadow(14px 10px 4px rgba(0, 0, 0, 0.25));
    `;
    const Thanks = styled.p`
        font-size: 3rem;
        /* color:#808499; */
        color:#fff;
        width: 100%;
        text-align: center;
        @media (max-width:768px){
            font-size: 2.1em;
            
        }
        @media (max-width:560px){
            font-size: 1.84rem;
        }
    `;
    const Close = styled.p`
    color: #fff;
    position: absolute;
    padding: 5px 8px;
    background-color: #032E64;
    right: 10px;
    top: 10px;
    border: 1px solid #fff;
    cursor: pointer;
    @media (max-width:560px){
        
        color: #808499;
        z-index:4;
        top: 20px;
    }
    `;
const Modal = () => {
    /* const logo = require('../img/happyVincent.png'); */
    const {toggleShowModal} = useContext(ProductContext);
    return ( 
        <ModalContainer>
            <ModalContent>
                <Close onClick={toggleShowModal}>X</Close>
                <ContainerImg>
                    <Vincent src={vincent} />
                </ContainerImg>
                <Thanks>Thank you for helping Vincent!</Thanks>
            </ModalContent>
        </ModalContainer>
     );
}
 
export default Modal;