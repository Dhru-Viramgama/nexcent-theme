import CardIcon from '@/src/Icons/CardIcon'
import EventBookingIcon from '@/src/Icons/EventBookingIcon'
import MembersIcon from '@/src/Icons/MembersIcon'
import MultiHandIcon from '@/src/Icons/MultiHandIcon'
import React from 'react'

const HelpingLocalSection = () => {
    return (
        <div className='bg-neutral-silver'>
            <div className='px-4 md:px-auto md:container md:mx-auto'>
                <div className='xl:mx-[144px] md:mx-[40px] py-[64px] flex flex-col md:flex-row md:items-center md:justify-between gap-[30px] lg:gap-[72px]'>
                    <div className='text-center md:text-left'>
                        <h2 className='text-neutral-d-grey font-semibold text-3xl lg:text-4xl'>Helping a local <span className='!text-brand-primary block'>business reinvent itself</span></h2>
                        <p className='mt-2 text-[#18191F]'>We reached here with our hard work and dedication</p>
                    </div>
                    <div className='space-y-5 md:space-y-[40px]'>
                        <div className='flex flex-col md:flex-row max-[540px] gap-5 lg:gap-[70px]'>
                            <div className='inline-flex items-center gap-4 max-md:mx-auto'>
                                <div className='w-[48px] h-[48px] inline-flex'>
                                    <MembersIcon className="m-auto" />
                                </div>
                                <div>
                                    <h3 className='font-bold text-[24px] lg:text-[28px] text-neutral-d-grey'>2,245,341</h3>
                                    <p className='text-neutral-grey'>Members</p>
                                </div>
                            </div>
                            <div className='inline-flex items-center gap-4 max-md:mx-auto'>
                                <div className='w-[48px] h-[48px] inline-flex'>
                                    <MultiHandIcon className="m-auto text-brand-primary" />
                                </div>
                                <div>
                                    <h3 className='font-bold text-[24px] lg:text-[28px] text-neutral-d-grey'>2,245,341</h3>
                                    <p className='text-neutral-grey'>Clubs</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col md:flex-row max-[540px] gap-5 lg:gap-[70px]'>
                            <div className='inline-flex items-center gap-4 max-md:mx-auto'>
                                <div className='w-[48px] h-[48px] inline-flex'>
                                    <EventBookingIcon className="m-auto" />
                                </div>
                                <div>
                                    <h3 className='font-bold text-[24px] lg:text-[28px] text-neutral-d-grey'>2,245,341</h3>
                                    <p className='text-neutral-grey'>Event Bookings</p>
                                </div>
                            </div>
                            <div className='inline-flex items-center gap-4 max-md:mx-auto'>
                                <div className='w-[48px] h-[48px] inline-flex'>
                                    <CardIcon className="m-auto" />
                                </div>
                                <div>
                                    <h3 className='font-bold text-[24px] lg:text-[28px] text-neutral-d-grey'>2,245,341</h3>
                                    <p className='text-neutral-grey'>Payments</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HelpingLocalSection
