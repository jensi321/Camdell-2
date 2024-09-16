import React from 'react'
import MearchantHeader from './MearchantHeader'
import PageBanner from '../PageBanner'
import LoyaltyPoints from '../User/Dashbord/LoyaltyPoints'

const Loyaltypointspage = () => {
  return (
    <>
    <MearchantHeader/>
      <PageBanner title="Loyalty points"/>
      <LoyaltyPoints/>
    </>
  )
}

export default Loyaltypointspage
