import { Navigation, Pagination, A11y, Lazy } from 'swiper';
import product1 from '../assets/images/shirt1.jpeg';
import product2 from '../assets/images/shirt2.jpeg';
import product3 from '../assets/images/shirt (1).jpeg';
import product4 from '../assets/images/shirt (2).jpeg';
import product5 from '../assets/images/shirt (3).jpeg';
import product6 from '../assets/images/shirt (4).jpeg';
import product7 from '../assets/images/shirt (5).jpeg';
import product8 from '../assets/images/shirt (6).jpeg';
import product9 from '../assets/images/shirt (7).jpeg';
import product10 from '../assets/images/shirt (8).jpeg';
import product11 from '../assets/images/shirt (9).jpeg';
import product12 from '../assets/images/shirt (10).jpeg';

const products = [
    product1,
    product2,
    product3,
    product4,
    product5,
    product6,
    product7,
    product8,
    product9,
    product10,
    product11,
    product12,
];

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/controller';

const ClothingSlider = () => {
    return (
        <div className='container w-full max-w-screen-xl'>
            <Swiper
                modules={[Navigation, Pagination, A11y, Lazy]}
                spaceBetween={50}
                slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
                className='text-white'
                autoplay
                lazy
                a11y
                loop
                grabCursor
                breakpoints={{
                    // when window width is >= 320px
                    320: {
                        slidesPerView: 1,
                    },
                    // when window width is >= 768px
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    // when window width is >= 1024px
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                }}
            >
                {products.map(product => (
                    <SwiperSlide key={product}>
                        <img src={product} className='w-full' alt='product' />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default ClothingSlider;
