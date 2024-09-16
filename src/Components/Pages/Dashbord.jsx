import React from 'react'
import Header from '../Header'
import PageBanner from '../PageBanner'
import DashbordHeader from '../User/Dashbord/DashbordHeader'

const Dashbord = () => {
    return (
        <>
        <Header/>
            <PageBanner title='Dashboard'/>
            <DashbordHeader/>
        </>
    )
}

export default Dashbord