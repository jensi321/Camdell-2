import React from 'react'
import PageBanner from '../PageBanner'
import OperatorHeader from './OperatorHeader'
import Static from './Statics/Static'

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
