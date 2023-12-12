// Import Swiper React components
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
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
                                spaceBetween={10}
                                slidesPerView={1}
                                autoplay={{
                                        delay: 2500,
                                        disableOnInteraction: false,
                                }}
                                loop={true}
                                navigation={true}
                                breakpoints={{
                                        375: {
                                                slidesPerView: 2,
                                                spaceBetween: 20,
                                              },
                                        426: {
                                          slidesPerView: 2,
                                          spaceBetween: 20,
                                        },
                                        700: {
                                          slidesPerView: 3,
                                          spaceBetween: 30,
                                        },
                                        924: {
                                          slidesPerView: 4,
                                          spaceBetween: 20,
                                        },
                                        1024:{
                                                slidesPerView:4,
                                                spaceBetween: 20,
                                        }
                                      }}
                                pagination={{
                                        clickable: true,
                                }}
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
