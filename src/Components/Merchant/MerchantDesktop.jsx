import React from 'react'
import MearchantHeader from './MearchantHeader'
import PageBanner from '../PageBanner'
import Cupons from '../ComponentItems/Desktop/Cupons'
import DraftCupon from '../ComponentItems/Desktop/DraftCupon'
import Statistics from '../ComponentItems/Desktop/Statistics'
import CreateOperatorlogin from '../ComponentItems/Desktop/CreateOperatorlogin'
import Subscription from '../ComponentItems/Desktop/Subscription'

const MerchantDesktop = () => {
  return (
    <>
    <MearchantHeader/>
      <PageBanner title='Merchant'/>
      <Cupons/>
      <DraftCupon/>
      <Subscription/>
      <Statistics/>
      <CreateOperatorlogin/>
    </>
  )
}

export default MerchantDesktop
