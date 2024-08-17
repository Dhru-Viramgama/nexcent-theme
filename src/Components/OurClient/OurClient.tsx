import React from 'react'
import Heading from '../HeadingComponent/Heading'
import Logo1 from './Logos/Logo1'
import Logo2 from './Logos/Logo2'
import Logo3 from './Logos/Logo3'
import Logo4 from './Logos/Logo4'
import Logo5 from './Logos/Logo5'
import Logo6 from './Logos/Logo6'
import Logo7 from './Logos/Logo7'
import { cn } from '@/lib/utils'
import Marquee from '@/src/magicui/marquee'

const OurClient = () => {
    const reviews = [
        {
            tooltipName: "",
            logo: <Logo1 className="m-auto text-[#263238]" />
        },
        {
            tooltipName: "",
            logo: <Logo2 className="m-auto" />
        },
        {
            tooltipName: "",
            logo: <Logo3 className="m-auto" />
        },
        {
            tooltipName: "",
            logo: <Logo4 className="m-auto" />
        },
        {
            tooltipName: "",
            logo: <Logo5 className="m-auto" />
        },
        {
            tooltipName: "",
            logo: <Logo6 className="m-auto" />
        },
        {
            tooltipName: "",
            logo: <Logo7 className="m-auto" />
        },
    ];

    return (
        <div className='px-4 md:px-auto md:container md:mx-auto'>
            <Heading heading='Our Clients' description='We have been working with some Fortune 500+ clients' className="mt-[20px] md:mt-[40px]" />
            <div className="relative w-full overflow-hidden mt-2 md:mt-3 lg:mt-4">
                <Marquee pauseOnHover className="[--duration:25s] py-[25px] md:mx-[70px] lg:mx-[110px]">
                    {reviews.map((item, index) => (
                        <div key={index} className='h-[48px] w-[48px] flex mr-[30px] md:mr-[60px] lg:mr-[136px]'>
                            {item?.logo}
                        </div>
                    ))}
                </Marquee>
                <div className="pointer-events-none absolute inset-y-0 left-0 lg:ml-[110px] md:ml-[70px] w-1/3 bg-gradient-to-r from-white dark:from-background" />
                <div className="pointer-events-none absolute inset-y-0 right-0 lg:mr-[110px] md:mr-[70px] w-1/3 bg-gradient-to-l from-white dark:from-background" />
            </div>
        </div>
    )
}

export default OurClient
