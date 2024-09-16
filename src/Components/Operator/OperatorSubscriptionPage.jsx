import React from 'react'
import PageBanner from '../PageBanner'
import OperatorHeader from './OperatorHeader'
import SubscriptionPlan from '../ComponentItems/Subscription/SubscriptionPlan'

const OperatorSubscriptionPage = () => {
  return (
    <>
      <OperatorHeader/>
      <PageBanner title='Subscription' desc='Operator manager'/>
      <SubscriptionPlan/>
    </>
  )
}

export default OperatorSubscriptionPage
