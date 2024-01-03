import React from 'react'
import { Box, styled } from '@mui/material'
import { useNavigate } from 'react-router-dom'

//image
import mobileBg from '../../uploads/Stuff-Best-Smartphone-Lead.png'
import electronicsBg from '../../uploads/home-appliances.jpg'
import fashionBg from '../../uploads/fashion.jpg'
import toysBg from '../../uploads/toys.jpg'
import automobileBg from '../../uploads/automobile.jpg'
import gamesBg from '../../uploads/games.jpg'
import kitchenBg from '../../uploads/kitchen.webp'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Pagination, Navigation } from 'swiper/modules';

const Wrapper = styled(Box)`
    margin:1vh;
    &>h1{
        text-transform: uppercase;
    }
`

const Container = styled(Box)`
    justify-content: center;
    display: flex;
    @media screen and (max-width: 768px) {
        display: block;
        white-space: nowrap;
        overflow-x: scroll;
    }
`
const Grid = styled(Box)`
    display: inline-block;
    position: relative;
    margin-right:2vh;
    width: 25vh;
    height: 25vh;
    border-radius: 1rem;
    overflow: hidden;
    &>p{
        color: white;
        text-align: center;
        font-weight: bold;
        text-transform: uppercase;
    }

    &>img{
        width: 100%;
        height: 100%;
        object-fit:cover;
    }
`

export default function ShopByCategory() {

    const navigate = useNavigate();

    return (
        <Wrapper>
            <h1>Shop By Category</h1>
            <Container>


                <Grid style={{
                    background: "#da4f64"
                }} onClick={() => navigate(`/search?category=mobiles`)}>
                    <p>SmartPhone</p>
                    <img src={mobileBg} />
                </Grid>


                <Grid style={{
                    background: "#1cabbd"
                }} onClick={() => navigate(`/search?category=electronics`)}>
                    <p>Electronics</p>
                    <img src={electronicsBg} />
                </Grid>



                <Grid style={{
                    background: "#fdbe21"
                }} onClick={() => navigate(`/search?category=fashion`)}>
                    <p>Fashion</p>
                    <img src={fashionBg} />
                </Grid>



                <Grid style={{
                    background: "#bce433"
                }} onClick={() => navigate(`/search?category=automobiles`)}>
                    <p>Automobiles</p>
                    <img src={automobileBg} />
                </Grid>



                <Grid style={{
                    background: "#b73037"
                }} onClick={() => navigate(`/search?category=toys`)}>
                    <p>Toys</p>
                    <img src={toysBg} />
                </Grid>



                <Grid style={{
                    background: "#b6d982"
                }} onClick={() => navigate(`/search?category=games`)}>
                    <p>Games</p>
                    <img src={gamesBg} />
                </Grid>



                <Grid style={{
                    background: "#dbbb7f"
                }} onClick={() => navigate(`/search?category=kitchen`)}>
                    <p>Kitchen</p>
                    <img src={kitchenBg} />
                </Grid>
            </Container>

        </Wrapper>
    )
}
