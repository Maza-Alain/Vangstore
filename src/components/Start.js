import React, { useContext } from 'react';
import ProductContext from '../context/product/ProductContext';
import styled from '@emotion/styled';
import imageVang from '../img/sorrowman.jpg'

const Container = styled.div`
    display: grid;
    grid-template-columns: 40% 60%;
    grid-template-rows: 30% 70%;
    height: 100vh;
    width: 100%;
`;
const Image = styled.img`
    grid-column: 1/2;
    grid-row: 1/3;
    height: 100%;
    @media (max-width: 768px){
        grid-column: 1/3;
        grid-row: 2/3;
        height: 100%;
        width: 100%;
    }
`;
const Div = styled.div`
    grid-column: 2/3;
    grid-row: 1/3;
    background-color: #007C8E ;
    padding: 0 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media (max-width: 768px){
        grid-column: 1/3;
        grid-row: 1/2;
        height: 100%;
    }
`;
const Text = styled.p`
    font-family: 'Montserrat', sans-serif;
    color: #fff;
    font-size: 3rem ;
    text-align:justify;
    @media (max-width: 992px){
        font-size: 2.5rem;
    }
    @media (max-width: 768px){
        font-size: 1.5rem;
    }
    @media (max-width: 565px){
        font-size: 1.2rem;
    }
    @media (max-width: 425px){
        font-size: 1.1rem;
    }
    @media (max-width: 320px){
        font-size: 1rem;
    }
`;
const Button = styled.button`
    background-color: #FFCD66;
    color: #fff;
    border-radius: 31px;
    width: 45%;
    height: 12%;
    box-shadow: 10px 10px 4px rgba(0, 0, 0, 0.25);
    font-size: 3rem;
    margin: 0 auto;
    cursor: pointer;
    @media (max-width: 768px){
        box-shadow: 5px 5px 2px rgba(0, 0, 0, 0.25);
        font-size: 1.6rem;
        height: 18%;
    }
    @media (max-width: 565px){
        font-size: 1rem;
    }
    &:hover{
        background: #DD9D18
    }
`;


const Start = ({changeStarted}) => {
    const {  addProduct } = useContext(ProductContext)
    const change = () =>{
        addProduct();
        
       
        changeStarted(false)
    }
    return ( 
    <Container>
        
        <Image alt='sorrow vangogh' src={imageVang}/>
        <Div>
            <Text>Van gogh doesn’t know how to buy on internet! Help him to buy his stuff for painting an incredible picture    
            </Text>
            <Button data-testid="start" onClick={change}>Start</Button>
        </Div>
    </Container>
     );
}
 
export default Start;