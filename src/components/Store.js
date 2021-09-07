import styled from '@emotion/styled';
import React, { useContext } from 'react'
import Header from './Header';
import Display from './Display';
import Scroll from './Scroll';
import ProductContext from '../context/product/ProductContext';
import Modal from './Modal';

const MainContainer = styled.div`
    position: relative;
    width: 100%;
    max-height: 970px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    background-color: rgba(18, 57, 66, 0.295);
    @media(max-height:810px){
        height: 810px;
    }
    /* background-color: rgba(0, 124, 142, 0.16); */
 `;
const Store = () => {
     
    const { showModal } = useContext(ProductContext);
    
    
    return(
        <MainContainer >
            {
            showModal
            ?<Modal/>
            :null
            }
            
            <Header/>
            
            <Display />
            <Scroll/>
            
        </MainContainer>
        
    )
}
export default Store;