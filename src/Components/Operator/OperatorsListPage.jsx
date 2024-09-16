import React from 'react'
import PageBanner from '../PageBanner'
import OperatorHeader from './OperatorHeader'
import Operatormanager from '../ComponentItems/OperatorOperator/Operatormanager'

const OperatorsListPage = () => {
  return (
    <>
      <OperatorHeader/>
      <PageBanner title='List of operator '/>
      <Operatormanager/>
    </>
  )
}

export default OperatorsListPage
