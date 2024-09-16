import React from 'react'
import ApplyMerchant from './LoginRegister/ApplyMerchant'
import MearchantHeader from './MearchantHeader'
import PageBanner from '../PageBanner'

const MeachantLoginPage = () => {
  return (
    <>
    <MearchantHeader/>
        <PageBanner title='merchants login'/>
        <ApplyMerchant/>
    </>
  )
}

export default MeachantLoginPage
