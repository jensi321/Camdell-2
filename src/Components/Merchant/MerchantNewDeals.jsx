import React from 'react'
import MearchantHeader from './MearchantHeader'
import PageBanner from '../PageBanner'
import Addnewdealform from '../ComponentItems/AddNewDeals/Addnewdealform'

const MerchantNewDeals = () => {
  return (
    <>
    <MearchantHeader/>
      <PageBanner title='Add new deals'/>
      <Addnewdealform/>
    </>
  )
}

export default MerchantNewDeals
