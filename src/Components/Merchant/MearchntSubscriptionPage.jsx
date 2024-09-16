import React from 'react'
import MearchantHeader from './MearchantHeader'
import PageBanner from '../PageBanner'
import SubscriptionPlan from '../ComponentItems/Subscription/SubscriptionPlan'

const MearchntSubscriptionPage = () => {
  return (
    <>
      <MearchantHeader/>
      <PageBanner title='Subscription' desc="Merchant"    />
      <SubscriptionPlan/>
    </>
  )
}

export default MearchntSubscriptionPage
