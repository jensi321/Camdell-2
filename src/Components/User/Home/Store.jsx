import React from 'react'
import { Link } from 'react-router-dom'
import PartnerSlider from './PartnerSlider'

const Store = () => {


    return (
        <>
            <div className="store-outer">
                <div className="container">
                    <div className="store-inner">

                        <div className="heading">
                            <h3>Popular Store</h3>
                        </div>

                        <div className="row">
                            <div className="left col-12 col-lg-3">
                                <div className="inner">
                                    <div className="text-inner">


                                        <div className="heading">
                                            <h3>
                                                Popular Store
                                            </h3>
                                        </div>
                                        <div className="img-content">
                                            <img src="assets/Image/Naykaa.png" alt="" />
                                        </div>
                                        <div className="text-content">
                                            <p>Up to 760% off + Extra 5% offer on EMI</p>
                                            <Link to='/voucher' className='button'>vouchers</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="right col-12 col-lg-9">
                                <div className="inner">
                                    <PartnerSlider />
                                </div></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Store