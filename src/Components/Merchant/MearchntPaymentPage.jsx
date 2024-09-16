import React from 'react'
import MearchantHeader from '../Merchant/MearchantHeader'
import PageBanner from '../PageBanner'
import PymentPlan from '../ComponentItems/Subscription/PymentPlan'

const MearchntPaymentPage = () => {
  return (
    <>
        <MearchantHeader/>
        <PageBanner title='Payment Details' />
        <PymentPlan/>
    </>
  )
}

export default MearchntPaymentPage
