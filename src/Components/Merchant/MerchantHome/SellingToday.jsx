import React from 'react'
import { Link } from 'react-router-dom'

const SellingToday = () => {
  return (
    <>
        <div className="todayssell-outer">
            <div className="container">
                <div className="todayssell-inner row align-items-center">

                    <div className="text-content col-12 col-md-6">
                        <div className="heading">
                            <h3>Get Selling today</h3>
                            <p>Put your product in front of crores of customer across India</p>
                            <Link to='/merchantsignup'>Become a Partner</Link>
                        </div>
                    </div>
                    <div className="img-content col-12 col-md-6">
                        <img src="assets/Image/selling-today.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default SellingToday
