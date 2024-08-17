import Image from 'next/image'
import React from 'react'
import Logo1 from '../OurClient/Logos/Logo1'
import Logo2 from '../OurClient/Logos/Logo2'
import Logo3 from '../OurClient/Logos/Logo3'
import Logo4 from '../OurClient/Logos/Logo4'
import Logo5 from '../OurClient/Logos/Logo5'
import Logo6 from '../OurClient/Logos/Logo6'
import Button from '../Button/Button'
import RightArrowIcon from '@/src/Icons/RightArrowIcon'

const MeetCustomers = () => {
    return (
        <div className='bg-neutral-silver'>
            <div className='px-4 md:px-auto md:container md:mx-auto'>
                <div className='xl:mx-[144px] md:mx-[40px] py-8 flex flex-col md:flex-row gap-[40px] lg:gap-[7px]'>
                    <div className='max-w-full m-auto'>
                        <Image src="https://i.ibb.co/ZWt875h/ezgif-com-resize-1.jpg" className='rounded-[8px] w-full' alt="ezgif-com-resize-1" width={326} height={326} />
                    </div>
                    <div className='md:w-3/5'>
                        <p className='text-neutral-grey font-medium'>
                            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.
                        </p>
                        <h4 className='text-[20px] text-brand-primary mt-4'>
                            Tim Smith
                        </h4>
                        <p className='text-neutral-l-grey mt-2'>
                            British Dragon Boat Racing Association
                        </p>
                        <div className='mt-8 flex flex-wrap items-center gap-[25px]'>
                            <div className='w-[48px] h-[48px] inline-flex'>
                                <Logo1 className="m-auto" />
                            </div>
                            <div className='w-[48px] h-[48px] inline-flex'>
                                <Logo2 className="m-auto" />
                            </div>
                            <div className='w-[48px] h-[48px] inline-flex'>
                                <Logo3 className="m-auto" />
                            </div>
                            <div className='w-[48px] h-[48px] inline-flex'>
                                <Logo4 className="m-auto" />
                            </div>
                            <div className='w-[48px] h-[48px] inline-flex'>
                                <Logo5 className="m-auto" />
                            </div>
                            <div className='w-[48px] h-[48px] inline-flex'>
                                <Logo6 className="m-auto" />
                            </div>
                            <p className='text-brand-primary space-x-2'>
                                <span className='inline'>
                                    Meet all customers
                                </span>
                                <RightArrowIcon className='inline' />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MeetCustomers
