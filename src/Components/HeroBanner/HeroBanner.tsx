import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';
// import DesktopImage from "@/src/Assets/Hero-desktop-image.png"
import HeroImage from "@/src/Assets/Hero-image.png"
import Button from '../Button/Button';
import { showCustomToast } from '../customToast/customToast';

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
                            <div className='xl:mx-[90px] md:mx-[30px]'>
                                <div className='w-full md:flex rounded-md p-3 pb-8 md:pt-8 md:pb-12 lg:pt-16 lg:pb-20'>
                                    <div className='md:w-[60%] lg:ml-8 my-auto'>
                                        <h2 className='text-[30px] md:text-[45px] lg:text-[55px] leading-[43px] md:leading-[55px] lg:leading-[70px] xl:leading-[76px] xl:text-[64px] font-semibold text-neutral-d-grey'>Lessons and insights</h2>
                                        <h2 className='text-[30px] md:text-[45px] lg:text-[55px] leading-[43px] md:leading-[55px] lg:leading-[70px] xl:leading-[76px] xl:text-[64px] font-semibold text-brand-primary'>from 8 years</h2>
                                        <p className='md:max-w-[90%] text-sm md:text-base text-neutral-grey mt-2 md:mt-4'>Where to grow your business as a photographer: site or social media?</p>
                                        <Button className='primaryBtn mt-4 md:mt-6 lg:mt-8' onClick={() => showCustomToast({ message: "Coming Soon!" })}>
                                            Register
                                        </Button>
                                    </div>
                                    <div className='max-sm:mt-8 md:inline-flex md:w-[40%]'>
                                        <Image
                                            src={HeroImage}
                                            alt='hero-banner'
                                            width={360}
                                            height={370}
                                            loading='eager'
                                            className='w-[190px] md:w-[230px] lg:w-[300px] xl:w-[360px] h-auto m-auto'
                                        />
                                    </div>
                                </div>
                            </div>
                            {/* <Image src="https://i.ibb.co/1MPw90K/ben-kolde-bs2-Ba7t69m-M-unsplash-1.jpg" alt="hero-banner" width={350} height={400} className='' loading='eager' /> */}
                            {/* <Image src={DesktopImage} alt="hero-banner" width={1440} height={600} className='w-full h-auto max-sm:hidden rounded-md' loading='eager' /> */}
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default HeroBanner
