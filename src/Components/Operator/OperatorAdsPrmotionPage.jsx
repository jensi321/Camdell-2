import React from 'react'
import PageBanner from '../PageBanner'
import OperatorHeader from './OperatorHeader'
import Promostion from '../ComponentItems/Promotions/Promostion'

const OperatorAdsPrmotionPage = () => {
  return (
    <>
      <OperatorHeader/>
      <PageBanner title='ADS PROMOTIONS'/>
      <Promostion/>
    </>
  )
}

export default OperatorAdsPrmotionPage
