import React from "react";
import { Link } from "react-router-dom";

const PartnerWithUsMerchant = () => {
    return (
        <>
            <div className="partnerwith-merchant-outer">
                <div className="container">
                    <div className="partnerwith-merchant-inner row align-items-center">
                        <div className="text-content col-12 col-md-6">
                            <h3>Become a Partner with us </h3>
                            <h3>Camdell.in</h3>
                            <p>Sell on camdell.in , India most visited shopping coupons on here and get a chance to get benefit worth of lakhs</p>
                            <Link to='/merchantsignup'>
                                Become a Partner
                            </Link>
                        </div>
                        <div className="img-content col-12 col-md-6">
                            <img src="assets/Image/partnerr-with-us.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PartnerWithUsMerchant;