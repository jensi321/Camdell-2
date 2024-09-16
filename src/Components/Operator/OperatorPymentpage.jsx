import React from 'react'
import PageBanner from '../PageBanner'
import OperatorHeader from './OperatorHeader'
import PymentPlan from '../ComponentItems/Subscription/PymentPlan'

const OperatorPymentpage = () => {
  return (
    <>
      <OperatorHeader/>
      <PageBanner title='Payment Details'/>
      <PymentPlan/>
    </>
  )
}

export default OperatorPymentpage
