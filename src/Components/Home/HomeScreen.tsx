import React from 'react'
import Navbar from '../Navbar/Navbar'
import HeroBanner from '../HeroBanner/HeroBanner'
import OurClient from '../OurClient/OurClient'
import ManageCommunity from '../ManageCommunity/ManageCommunity'
import ImageWithTextSection from '../ImageWithTextSection/ImageWithTextSection'
import MobileLoginImage from '../ImageWithTextSection/MobileLoginImage'
import HelpingLocalSection from '../HelpingLocalSection/HelpingLocalSection'
import MobileLoginImage2 from '../ImageWithTextSection/MobileLoginImage2'
import MeetCustomers from '../MeetCustomers/MeetCustomers'

const HomeScreen = () => {
    return (
        <div>
            <Navbar />
            <HeroBanner />
            <OurClient />
            <ManageCommunity />
            <ImageWithTextSection
                image={<MobileLoginImage className="max-w-full" />}
                title='The unseen of spending three years at Pixelgrade'
                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.'
                buttonText='Learn More'
            />
            <HelpingLocalSection />
            <ImageWithTextSection
                image={<MobileLoginImage2 className="max-w-full" />}
                title='How to design your site footer like we did'
                description='Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.'
                buttonText='Learn More'
            />
            <MeetCustomers />
        </div>
    )
}

export default HomeScreen
