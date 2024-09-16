import React from 'react'
import MearchantHeader from './MearchantHeader'
import PageBanner from '../PageBanner'
import Draftcupon from '../ComponentItems/DraftsCupons/Draftcupon'

const DraftCuponPage = () => {
  return (
    <>
    <MearchantHeader/>
      <PageBanner title='Draft coupons'/>
      <Draftcupon/>
    </>
  )
}

export default DraftCuponPage
