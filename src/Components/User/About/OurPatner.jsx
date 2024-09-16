import React from 'react'
import PartnerSlider from '../Home/PartnerSlider'

const OurPatner = () => {
  return (
    <>
      <div className="partner-outer">
        <div className="container">
          <div className="partner-inner">
            <div className="heading">
              <h3>Our partners</h3>
            </div>

            <div className="partner-slider">
              <PartnerSlider />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default OurPatner