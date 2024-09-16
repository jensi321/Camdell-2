import React from 'react'
import PageBanner from '../PageBanner'
import CreateOperatorlogin from '../ComponentItems/Desktop/CreateOperatorlogin'
import Cupons from '../ComponentItems/Desktop/Cupons'
import DraftCupon from '../ComponentItems/Desktop/DraftCupon'
import Statistics from '../ComponentItems/Desktop/Statistics'
import Subscription from '../ComponentItems/Desktop/Subscription'
import OperatorHeader from './OperatorHeader'


const OperatorDesktop = () => {
  return (
    <>
    <OperatorHeader/>
      <PageBanner title='Manager'/>
      <Cupons/>
      <DraftCupon/>
      <Subscription/>
      <Statistics/>
      <CreateOperatorlogin/>
    </>
  )
}

export default OperatorDesktop
