import DribbleIcon from '@/src/Icons/DribbleIcon'
import EssentialIcon from '@/src/Icons/EssentialIcon'
import InstagramIcon from '@/src/Icons/InstagramIcon'
import Logo from '@/src/Icons/Logo'
import TwitterIcon from '@/src/Icons/TwitterIcon'
import YoutubeIcon from '@/src/Icons/YoutubeIcon'
import React from 'react'

const Footer = () => {
    return (
        <div className='py-12 md:py-16 bg-neutral-black text-neutral-silver'>
            <div className='px-4 md:px-auto md:container md:mx-auto'>
                <div className='xl:mx-[90px] md:mx-[30px]'>
                    <div className='flex max-sm:flex-col md:justify-between gap-[30px]'>
                        <div className='space-y-5 md:space-y-8 lg:space-y-10'>
                            <Logo />
                            <div className='text-sm'>
                                <p>Copyright © 2020 Nexcent ltd.</p>
                                <p>All rights reserved</p>
                            </div>
                            <div className='space-x-4'>
                                <div className='bg-[#3B464C] w-8 h-8 inline-flex rounded-full'>
                                    <InstagramIcon className='w-[17px] h-auto m-auto pt-[1px]' />
                                </div>
                                <div className='bg-[#3B464C] w-8 h-8 inline-flex rounded-full'>
                                    <DribbleIcon className='w-[17px] h-auto m-auto pt-[1px]' />
                                </div>
                                <div className='bg-[#3B464C] w-8 h-8 inline-flex rounded-full'>
                                    <TwitterIcon className='w-[17px] h-auto m-auto pt-[1px]' />
                                </div>
                                <div className='bg-[#3B464C] w-8 h-8 inline-flex rounded-full'>
                                    <YoutubeIcon className='w-[17px] h-auto m-auto pt-[1px]' />
                                </div>
                            </div>
                        </div>
                        <div className='md:flex md:flex-col lg:flex-row gap-[30px] max-sm:space-y-[30px]'>
                            <div className='inline-flex justify-between gap-[30px] max-sm:w-full'>
                                <div className='space-y-6 w-1/2 md:w-[160px]'>
                                    <h2 className='text-xl font-semibold text-white'>Company</h2>
                                    <ul className='space-y-3 text-sm font-normal'>
                                        <li>About us</li>
                                        <li>Blog</li>
                                        <li>Contact us</li>
                                        <li>Pricing</li>
                                        <li>Testimonials</li>
                                    </ul>
                                </div>
                                <div className='space-y-6 w-1/2 md:w-[160px]'>
                                    <h2 className='text-xl font-semibold text-white'>Support</h2>
                                    <ul className='space-y-3 text-sm font-normal'>
                                        <li>Help center</li>
                                        <li>Terms of service</li>
                                        <li>Legal</li>
                                        <li>Privacy policy</li>
                                        <li>Status</li>
                                    </ul>
                                </div>
                            </div>
                            <div className='space-y-6 w-[255px]'>
                                <h2 className='text-xl font-semibold text-white'>Stay up to date</h2>
                                <div className='relative'>
                                    <input
                                        type='email'
                                        placeholder='Your email address'
                                        className='bg-[#3B464C] text-sm placeholder:text-[#D9DBE1] rounded-[8px] h-10 pl-3 w-full outline-none'
                                    />
                                    <EssentialIcon className='h-[18px] w-[18px] absolute top-0 bottom-0 my-auto right-3' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
