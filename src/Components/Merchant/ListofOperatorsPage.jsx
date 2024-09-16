import React from 'react'
import MearchantHeader from './MearchantHeader'
import PageBanner from '../PageBanner'
import Operatormanager from '../ComponentItems/OperatorOperator/Operatormanager'

const ListofOperatorsPage = () => {
  return (
    <>
      <MearchantHeader/>
      <PageBanner title='List of operator '/>
      <Operatormanager/>
    </>
  )
}

export default ListofOperatorsPage
