import  React, { useContext, useEffect } from 'react';
import styled from '@emotion/styled';
import health from '../img/hearth.png';
import profile from '../img/profilePicture.jpg';
import car from '../img/car.png';
import ProductContext from '../context/product/ProductContext';
import Car from './Car';
import Favs from './Favs';
const Container = styled.header`
    /* position: fixed; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 10%;
    
    overflow: hidden;
    height: 7rem;
    
    
    @media (max-width:992px){
        height: 6rem;;
    }
   
`;
const Nav = styled.nav`
    width: 37%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
   
`;


const CarImg = styled.img`
    width: 20%;
    cursor: pointer;
    
    @media (max-width:768px){
        width: 35%;
    }
    @media (max-width:425px){
        width: 44%;
    }
`;
const Favorites = styled.img`
    width: 20%;
    cursor: pointer;
    @media (max-width:768px){
        width: 25%;
    }
    @media (max-width:425px){
        width: 35%;
    }
`;
const Profile = styled.img`
    width: 25%;

    border-radius: 60%;
    @media (max-width:768px){
        width: 40%;
    }
    @media (max-width:425px){
        width: 40%;
    }
`;

const Title = styled.h1`
    font-size: 3rem;
    color: #fff;
    @media (max-width:425px){
        font-size: 2rem;
    }
    
    
`;



 const Header = () => {

    useEffect(()=>{
        window.onscroll = () =>{
            const screenScrolled = document.documentElement.scrollTop;
            const head = document.getElementById('cont');
            
            if (screenScrolled > 100){
                head.classList.remove("headCont")
                head.classList.add("headFixed")
            } else if( screenScrolled < 100){
                head.classList.remove("headFixed")
                head.classList.add("headCont")
            }
        }
    },[])

    const { toggleShowCar, showCar,showFavorites, toggleShowFav } = useContext(ProductContext);
    return(
        <>
        <Container id="cont" className="headCont">
            <Title>OIL</Title>
            { showCar 
            ? <Car/>
            : null
            }
            {showFavorites
            ? <Favs/>
            : null
            }
            <Nav>
                
                <CarImg src={car} onClick={ toggleShowCar}/>
                <Favorites src={health} onClick={toggleShowFav}/> 
                <Profile src={profile}/>    
                {/* <p>hi Vincent!</p>  */}     
                
            </Nav>
        </Container>
        
        </>
    );
 }

 export default Header;