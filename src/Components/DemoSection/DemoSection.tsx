import React from 'react'
import Button from '../Button/Button'
import RightArrowIcon from '@/src/Icons/RightArrowIcon'
import { showCustomToast } from '../customToast/customToast'

const DemoSection = () => {
    return (
        <div className='py-[32px] bg-neutral-silver'>
            <div className='px-4 md:px-auto md:container md:mx-auto'>
                <h1 className='max-w-[888px] mx-auto text-center text-[40px] md:text-[45px] lg:text-[55px] xl:text-[64px] font-semibold'>
                    Pellentesque suscipit fringilla libero eu.
                </h1>
                <div className='mt-6 md:mt-8 flex justify-center'>
                    <Button className="flex items-center primaryBtn !text-base" onClick={() => showCustomToast({ message: "Coming Soon!" })}>
                        Get a Demo <RightArrowIcon className="ml-2" />
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default DemoSection
