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
        const [infocus,setFocus] = useState(false);

        return (
                <Container onMouseEnter={()=>setFocus(true)} onMouseLeave={()=>setFocus(false)}>
                        <Swiper
                                spaceBetween={10}
                                slidesPerView={1}
                                autoplay={{
                                        delay:3000,
                                        disableOnInteraction: false,
                                }}
                                navigation={true}
                                pagination={{
                                        clickable: true,
                                }}
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
                                                slidesPerView:5,
                                                spaceBetween: 20,
                                        }
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
