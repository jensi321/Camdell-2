import React from 'react'
import NewSubscription from './SubscriptionHistory/NewSubscription'
import ExpiredSubscription from './SubscriptionHistory/ExpiredSubscription'

const SubscriptionHistory = () => {
  return (
    <>
      <div className="sub-history-outer">
        <div className="container">
          <div className="sub-history-inner">
            <NewSubscription />
            <ExpiredSubscription />
          </div>
        </div>
      </div></>
  )
}

export default SubscriptionHistory