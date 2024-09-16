import React from 'react'
import Subscribe from './Home/Subscribe'
import OurPatner from './About/OurPatner'
import Agency from './About/Agency'
import BecomePartner from './About/BecomePartner'
const AboutUs = () => {
    return (
        <>
            <div className="about-outer">
                <BecomePartner />
                <Agency />
                <OurPatner />
                <Subscribe />
            </div>
        </>
    )
}

export default AboutUs