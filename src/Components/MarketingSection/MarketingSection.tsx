import React from 'react'
import MarketingCard from './MarketingCard'

const MarketingSection = () => {
    return (
        <div className='px-4 md:px-auto md:container md:mx-auto my-[38px] md:my-[48px]'>
            <div className='xl:mx-[90px] md:mx-[30px]'>
                <h3 className='text-3xl lg:text-4xl m-auto text-center font-semibold text-neutral-d-grey'>
                    Caring is the new marketing
                </h3>
                <p className='text-sm lg:text-base max-w-[628px] m-auto text-center mt-2 text-neutral-grey'>
                    The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who&apos;s joining the community, read about how our community are increasing their membership income and lot&apos;s more.
                </p>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6'>
                    <MarketingCard
                        image='https://i.ibb.co/Wn6FPxn/d94779a6038df61ab3795e3388d1c731-Expires-1725235200-Key-Pair-Id-APKAQ4-GOSFWCVNEHN3-O4-Signature-nqt.jpg'
                        title='Creating Streamlined Safeguarding Processes with OneRen'
                        btnTitle='Readmore'
                    />
                    <MarketingCard
                        image='https://i.ibb.co/ZGxCmY5/d80dfca071d88cdc680544ed9cbcf9ed.jpg'
                        title='What are your safeguarding responsibilities and how can you manage them?'
                        btnTitle='Readmore'
                    />
                    <MarketingCard
                        image='https://i.ibb.co/wY5Pq4G/cb260e5e45b8deb813272ee1a31ac6f1.jpg'
                        title='Revamping the Membership Model with Triathlon Australia'
                        btnTitle='Readmore'
                    />
                </div>
            </div>
        </div>
    )
}

export default MarketingSection
