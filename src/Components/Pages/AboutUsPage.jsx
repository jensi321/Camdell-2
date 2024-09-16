import React from 'react'
import Header from '../Header'
import PageBanner from '../PageBanner'
import AboutUs from '../User/AboutUs'
const AboutUsPage = () => {
    return (
        <>
        <Header/>
            <PageBanner title='About US' />
            <AboutUs />
        </>
    )
}

export default AboutUsPage