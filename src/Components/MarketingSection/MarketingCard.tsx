import RightArrowIcon from '@/src/Icons/RightArrowIcon'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface MarketingCardProps {
    image: string
    title: string
    btnTitle: string
}

const MarketingCard = (props: MarketingCardProps) => {
    const {
        image = "",
        title = "",
        btnTitle = ""
    } = props;

    return (
        <div className='relative w-fit'>
            <Image src={image} alt="marketing_image" className='rounded-md object-cover w-[368px] h-[286px]' width={368} height={286} />
            <div className='absolute bg-neutral-silver shadow-marketing-card p-4 w-[317px] -bottom-[80px] rounded-md right-0 left-0 mx-auto'>
                <h4 className='h-[84px] text-center text-neutral-grey text-lg md:text-xl line-clamp-3'>{title}</h4>
                <Link href="/" className='text-lg md:text-xl text-brand-primary flex items-center justify-center py-2 gap-2 mt-4'>
                    <span>
                        {btnTitle}
                    </span>
                    <RightArrowIcon className="" />
                </Link>
            </div>
        </div>
    )
}

export default MarketingCard
