import React from 'react'
import Static from '../ComponentItems/Statics/Static'
import PageBanner from '../PageBanner'
import OperatorHeader from './OperatorHeader'

const OperatorStaticPage = () => {
  return (
    <>
      <OperatorHeader/>
      <PageBanner title='Statistics'/>
      <Static/>
    </>
  )
}

export default OperatorStaticPage
