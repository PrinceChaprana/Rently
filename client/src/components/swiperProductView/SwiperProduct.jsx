// Import Swiper React components
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import { Box, styled } from '@mui/material'

import Product from '../products/Product';

const Container = styled(Box)`
        height: fit-content;
        padding: 1vh 1vw;
        border: 1px solid black;
        
`


export default function SwiperProduct({ products }) {
        return (
                <Container>
                        <Swiper
                                spaceBetween={30}
                                slidesPerView={4}
                                autoplay={{
                                        delay: 2500,
                                        disableOnInteraction: false,
                                }}
                                pagination={{
                                        clickable: true,
                                }}
                                loop={true}
                                navigation={true}
                                modules={[Autoplay, Pagination, Navigation]}
                                className="mySwiper"
                        >
                                {
                                        products.map(product => (
                                                <SwiperSlide>
                                                        <Product product={product} />
                                                </SwiperSlide>
                                        ))
                                }
                                
                                

                        </Swiper>
                </Container>

        )
}
