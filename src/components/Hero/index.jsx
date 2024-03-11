import React from 'react';
import './index.css'
import logo from '../../images/logo.svg'
import book from '../../images/book.jpg'
import bookshop from '../../images/bookshop.avif'
import kitep from '../../images/kitep.jpg'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Hero = () => {

    return (
        <Swiper style={{
            height: '550px',
        }}
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            <SwiperSlide><img src={logo} alt="" style={{
                width: '100%',

            }} /></SwiperSlide>
            <SwiperSlide><img src={book} alt="" style={{
                height: '33pc',
                width: '100%',
            }} /></SwiperSlide>
            <SwiperSlide><img src={bookshop} alt="" style={{
                height: '33pc',
                width: '100%',
            }} /></SwiperSlide>
            <SwiperSlide><img src={kitep} alt="" style={{
                height: '33pc',
                width: '100%',
            }} /></SwiperSlide>
        </Swiper>

    );
};

export default Hero;