import React from 'react'

interface ManageCommunityCardsProps {
    icon: any
    title: string
    description: string
    [key: string]: any;
}

const ManageCommunityCards = (props: ManageCommunityCardsProps) => {
    const {
        icon = "",
        title = "",
        description = "",
        ...rest
    } = props;

    return (
        <div className='p-4 lg:p-6 max-w-[300px] shadow-manage-community-card rounded-[8px] h-full' {...rest}>
            <div className='relative w-[65px] h-[56px] mx-auto'>
                <div className='w-[48px] h-[48px] absolute top-0 left-0 z-[1] inline-flex'>
                    {icon}
                </div>
                <div className='absolute bottom-0 right-0 w-[50px] h-[49px] rounded-tl-[10px] rounded-tr-[5px] rounded-br-[18px] rounded-bl-[5px] bg-tint-500' />
            </div>
            <h2 className='text-neutral-d-grey text-center font-bold text-[24px] lg:text-[28px] mt-4 h-auto md:h-[74px] lg:h-[84px]'>
                {title}
            </h2>
            <p className='mt-2 text-sm text-center'>
                {description}
            </p>
        </div>
    )
}

export default ManageCommunityCards
