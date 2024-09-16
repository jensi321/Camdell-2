import React from 'react'
import PageBanner from '../PageBanner'
import Draftcupon from '../ComponentItems/DraftsCupons/Draftcupon'
import OperatorHeader from './OperatorHeader'

const OperatorDraftCuponspage = () => {
  return (
    <>
        <OperatorHeader/>
        <PageBanner title='Draft coupons'/>
        <Draftcupon/>
    </>
  )
}

export default OperatorDraftCuponspage
