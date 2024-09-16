import React from 'react'
import PageBanner from '../PageBanner'
import Addnewdealform from '../ComponentItems/AddNewDeals/Addnewdealform'
import OperatorHeader from './OperatorHeader'

const OperatorNewDealsPage = () => {
  return (
    <>
      <OperatorHeader/>
        <PageBanner title='Add new deals'/>
        <Addnewdealform/>
    </>
  )
}

export default OperatorNewDealsPage
