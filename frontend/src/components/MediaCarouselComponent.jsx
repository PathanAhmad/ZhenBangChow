/* eslint-disable no-unused-vars */
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Autoplay, Pagination } from 'swiper/modules';

const images = [
    { src: '/assets/images1.jpg', alt: 'Image 1' },
    { src: '/assets/images2.jpg', alt: 'Image 2' },
    { src: '/assets/images3.jpg', alt: 'Image 3' },
];

const MediaCarouselComponent = () => {
    
  return (
    <div className='rounded-lg overflow-hidden' style={{ maxWidth: '100%', margin: '0 auto' }}>
       <Swiper
            spaceBetween={20}
            pagination={{ clickable: true }}
            className="mySwiper"
            modules={[Autoplay, Pagination]} 
            autoplay={{ delay: 3000 }}
        >
            {images.map((image, index) => (
                <SwiperSlide key={index}>
                    <img src={image.src} alt={image.alt} style={{ 
                            width: '100%', 
                            height: '400px', // Fixed height for consistency
                            objectFit: 'cover' // Ensures images cover the area
                        }}  />
                </SwiperSlide>
            ))}
        </Swiper>
    </div>
  );
};

export default MediaCarouselComponent;