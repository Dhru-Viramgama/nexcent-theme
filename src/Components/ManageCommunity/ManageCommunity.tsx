import React from 'react'
import Heading from '../HeadingComponent/Heading'
import ManageCommunityCards from './ManageCommunityCards'
import UserGroupIcon from '@/src/Icons/UserGroupIcon'
import BuildingIcon from '@/src/Icons/BuildingIcon'
import MultiHandIcon from '@/src/Icons/MultiHandIcon'

const ManageCommunity = () => {
    return (
        <div className='px-4 md:px-auto md:container md:mx-auto mt-[20px]'>
            <Heading heading='Manage your entire community in a single system' description='Who is Nextcent suitable for?' className="mt-[20px] md:mt-[40px] mb-2 md:mb-3 lg:mb-4" />
            <div className='py-[10px] mt-4 xl:mx-[90px] md:mx-[30px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[30px] md:gap-[70px] lg:gap-[120px]'>
                <div className='mx-auto'>
                    <ManageCommunityCards icon={<UserGroupIcon className="m-auto" />} title='Membership Organisations' description='Our membership management software provides full automation of membership renewals and payments' />
                </div>
                <div className='mx-auto'>
                    <ManageCommunityCards icon={<BuildingIcon className="m-auto" />} title='National Associations' description='Our membership management software provides full automation of membership renewals and payments' />
                </div>
                <div className='mx-auto'>
                    <ManageCommunityCards icon={<MultiHandIcon className="m-auto text-[#103E13]" />} title='Clubs And Groups' description='Our membership management software provides full automation of membership renewals and payments' />
                </div>
            </div>
        </div>
    )
}

export default ManageCommunity
