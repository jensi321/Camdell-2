import React from 'react'
import { Link } from 'react-router-dom'

const BecomePartner = () => {
    return (
        <>
            <div className="become-outer">
                <div className="container">
                    <div className="become-inner">
                        <div className="row">
                            <div className="col-12 col-lg-6 item">
                                <div className="item-inner">
                                    <div className="text-content">
                                        <div className="heading">
                                            <h3>
                                                Become a Agency partner
                                            </h3>
                                        </div>

                                        <p>A car wash, or auto wash, is a facility used to clean the exterior, and in some cases the interior, of cars. Car washes can be self-service, full-service (with attendants who wash the vehicle), or fully automated (possibly connected to a filling station)</p>

                                        <Link to={''}>Become a Partner</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 item">
                                <div className="img-content">
                                    <img src="assets/Image/Become.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="wave">
                </div>
            </div>
        </>
    )
}

export default BecomePartner