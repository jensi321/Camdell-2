import React from 'react'
import MearchantHeader from './MearchantHeader'
import PageBanner from '../PageBanner'
import OperatorLogin from '../ComponentItems/OperatorOperator/OperatorLogin'

const OperatorLoginPage = () => {
  return (
    <>
      <MearchantHeader/>
      <PageBanner title='Create operator login'/>
      <OperatorLogin/>
    </>
  )
}

export default OperatorLoginPage
