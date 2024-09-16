import React from 'react'
import Header from '../Header'
import PageBanner from '../PageBanner'
import SubscriptionPlan from '../User/SubscriptionPlan'

const Subscriptionuser = () => {
    return (
        <>
            <Header />
            <PageBanner title='Subscription' desc='User' />
            <SubscriptionPlan />
        </>
    )
}

export default Subscriptionuser