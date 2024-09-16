import React from 'react'
import Header from '../Header'
import HowToSellCamdell from '../Merchant/MerchantHome/HowToSellCamdell'
import PartnerWithUsMerchant from '../Merchant/MerchantHome/PartnerWithUsMerchant'
import SellingToday from '../Merchant/MerchantHome/SellingToday'

const MearchentHome = () => {
  return (
    <>
    <Header/>
        <PartnerWithUsMerchant/>
        <HowToSellCamdell/>
        <SellingToday/>
    </>
  )
}

export default MearchentHome
