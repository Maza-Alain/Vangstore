import  React, { useContext } from 'react';
import styled from '@emotion/styled';
import health from '../img/hearth.png';
import ProductContext from '../context/product/ProductContext';


const ContainerDisplay = styled.div`
    display: flex;
    align-items: center;
    margin: 1rem auto;
    border-radius: 20px;
    height: 450px;
    justify-content: space-around;
    background-color: #007C8E;
    width: 95%;
    
    @media (max-width: 768px){
        flex-direction: column;
        height: 700px;
    }
`;
const ImgSelected = styled.img`
    width: 20%;
    @media (max-width: 768px){
        width: 30%;
    }
    @media (max-width: 425px){
        width: 40%;
    }
`;
const Data = styled.div`
    display: flex;
    flex-direction: column;
    width: 40%;
    @media (max-width: 768px){
        margin-bottom: 20px;
    }
    @media (max-width: 650px){
        width: 55%;
        
    }
    
`;
const ProductTitle = styled.h2`
    font-size: 2rem;
    color: #fff;
    margin-bottom: 1.3rem;
    &::after {
        content: '';
        width: 5rem;
        height: .7rem;
        background-color: #FFCD66	;
        display:block;
    }
    
`;
const ProductData = styled.p`
    color: #fff;
    font-size: 1.4rem;
    margin-bottom: 1.3rem;

`;
const ProductPrice = styled.p`
    color: #fff;
    font-size: 2.5rem;
    margin-bottom: 1.3rem;
`;
const AddingZone = styled.form`
    display: flex;
    width: 65%;
    justify-content: space-between;
    @media (max-width: 768px){
        width: 100%;
    }
`;

const ProductAmount = styled.input`
    width: 3rem;
    border: 1px solid #eee;
    
`;

const AddCar = styled.button`
    color: #fff;
    font-size: 1rem;
    cursor: pointer;
    width: 45%;
    height: 2rem;
    background: #FFCD66;
    box-shadow: 40% 40% 25% rgba(0, 0, 0, 0.25);
    border-radius: 31px;
    @media (max-width: 375px){
        font-size: .8rem;
    }
    &:hover{
        background: #DD9D18
    }

`;
const ToFav = styled.img`
    width: 10%;
    cursor: pointer;
`;

 
const Display = () => {
    const {onDisplay, toCar, showFavorites, toggleShowFav, selectAmount, amount, manageTotal, showCar, toggleShowCar, toFavorites} = useContext(ProductContext);
    
    const closeWindows = () => {
        if (showCar) {
            toggleShowCar();
        }
        if (showFavorites) {
            toggleShowFav();
        }
    }
    /* const [amountProducts, changeAmount ] = useState( 0 ) */ //im use that for passing amount to car
   
    const addAmount = e => {
        e.preventDefault(); 
        /* changeAmount(e.target.value); */
        selectAmount(e.target.value)
       
       
    }
   
    const addingCar = (e) =>{
        e.preventDefault();
       console.log('test',onDisplay[0].image)
        if(amount <= 0 || amount > 20){
            
            return null;
            
        }
        /* let Ncode = nextId();
        onDisplay[0].code = Ncode; */
        toCar(onDisplay[0].code);
        let num = amount;
        let senAmount = 0;
        while(num){
            senAmount += onDisplay[0].price;
            manageTotal(senAmount);
            num--
        }
        

       selectAmount(0)
       e.target.amountInp.value = 0;
    }

    return ( 
        <ContainerDisplay id="displayCont" onClick={() => closeWindows()}>
            <ImgSelected src={onDisplay[0].image}/>
            <Data>
                <ProductTitle>{onDisplay[0].name}</ProductTitle>
                <ProductData>Brand: {onDisplay[0].brand}<br/>Color: {onDisplay[0].color} <br/>Code: {onDisplay[0].code}</ProductData>
                <ProductPrice>${onDisplay[0].price}</ProductPrice>
                <AddingZone onSubmit={(e) => addingCar(e)}>
                    <ProductAmount type="number" name="amountInp" onChange={(e) => addAmount(e)}/>
                    <AddCar >Add to car</AddCar>
                    <ToFav src={health} onClick={() => toFavorites(onDisplay[0].code)}/>
                </AddingZone>
            </Data>
        </ContainerDisplay> 
    );
}
 
export default Display;