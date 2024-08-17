import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation, EffectCreative } from 'swiper/modules';
import Image from 'next/image';

const HeroBanner = () => {
    return (
        <div className='bg-neutral-silver'>
            <div className='px-4 md:px-auto md:container md:mx-auto'>
                <Swiper
                    spaceBetween={30}
                    speed={1000}
                    loop={true}
                    autoplay={{ delay: 2000, disableOnInteraction: false, }}
                    pagination={{ clickable: true, dynamicBullets: true, }}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    {Array.from({ length: 5 }).map((_, index) => (
                        <SwiperSlide key={index}>
                            <Image src="https://svgshare.com/i/19Bo.svg" quality={75} priority={true} alt="hero-banner" width={10} height={10} className='w-full h-auto' />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default HeroBanner
