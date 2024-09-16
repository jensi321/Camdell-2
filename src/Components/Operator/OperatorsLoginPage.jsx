import React from 'react'
import OperatorHeader from './OperatorHeader'
import PageBanner from '../PageBanner'
import OperatorLogin from '../ComponentItems/OperatorOperator/OperatorLogin'

const OperatorsLoginPage = () => {
  return (
    <>
      <OperatorHeader/>
      <PageBanner title='Create operator login'/>
      <OperatorLogin/>
    </>
  )
}

export default OperatorsLoginPage
