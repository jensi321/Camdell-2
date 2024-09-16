import React from 'react'
import MearchantHeader from './MearchantHeader'
import PageBanner from '../PageBanner'
import YourCupon from '../ComponentItems/YourCupon/YourCupon'

const YourCuponPage = () => {
  return (
    <>
      <MearchantHeader/>
      <PageBanner title='YOUR COUPONS'/>
      <YourCupon/>
    </>
  )
}

export default YourCuponPage
