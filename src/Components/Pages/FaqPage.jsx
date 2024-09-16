import React from 'react'
import Header from '../Header'
import PageBanner from '../PageBanner'
import Faq from '../User/Faq'

const FaqPage = () => {
    return (
        <>
        <Header/>
            <PageBanner title='FAQS' />
            <Faq />
        </>
    )
}

export default FaqPage