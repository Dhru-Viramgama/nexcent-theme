import React from 'react'
import MobileLoginImage from './MobileLoginImage'
import Button from '../Button/Button'
import { showCustomToast } from '../customToast/customToast'

interface ImageWithTextSection {
    image: any
    title: string
    description: string
    buttonText: string
}

const ImageWithTextSection = (props: ImageWithTextSection) => {
    const {
        image = "",
        title = "",
        description = "",
        buttonText = "",
    } = props;

    return (
        <div className='px-4 md:px-auto md:container md:mx-auto mt-[20px] md:mt-[40px] mb-[25px] md:mb-[48px]'>
            <div className='flex flex-col md:flex-row xl:mx-[90px] md:mx-[30px] py-[35px] lg:py-[52px] gap-[25px] lg:gap-[50px]'>
                <div className='mx-auto md:my-auto min-w-[40%] max-w-full'>
                    {image}
                </div>
                <div className='mx-auto md:my-auto'>
                    <h2 className='font-semibold text-3xl lg:text-4xl'>
                        {title}
                    </h2>
                    <p className='text-sm mt-4'>
                        {description}
                    </p>
                    <Button className="primaryBtn mt-8" onClick={() => showCustomToast({ message: "Coming Soon!" })}>
                        {buttonText}
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default ImageWithTextSection
