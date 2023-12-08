// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Banner() {
  return (
        <>
                <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                        delay: 3500,
                        disableOnInteraction: false,
                        }}
                        pagination={{
                        clickable: true,
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                >
                        //all the recomendation of Top Products products
                        <SwiperSlide><img src='https://images.pexels.com/photos/19384411/pexels-photo-19384411/free-photo-of-early-sunrise-at-mesa-arch.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'></img></SwiperSlide>
                        <SwiperSlide><img src='https://images.pexels.com/photos/950210/pexels-photo-950210.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/></SwiperSlide>
                        <SwiperSlide><img src='https://images.pexels.com/photos/7527858/pexels-photo-7527858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/></SwiperSlide>
                </Swiper>
      </>
  )
}
