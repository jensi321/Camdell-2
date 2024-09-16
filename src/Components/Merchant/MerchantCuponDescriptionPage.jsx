import React from 'react'
import MearchantHeader from '../Merchant/MearchantHeader'
import PageBanner from '../PageBanner'
import CuponDescription from '../ComponentItems/CuponDescription/CuponDescription'

const MerchantCuponDescriptionPage = () => {
  return (
    <>
    <MearchantHeader/>
        <PageBanner title='coupons description'/>
        <CuponDescription/>
    </>
  )
}

export default MerchantCuponDescriptionPage
