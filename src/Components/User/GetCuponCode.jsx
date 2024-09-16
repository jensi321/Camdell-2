import React from 'react'
import { PiFilesFill } from 'react-icons/pi'

const GetCuponCode = () => {
    return (
        <>
            <div className="cupon-code-outer">
                <div className="cupon-code-inner">
                    <div className="heading">
                        <h3>GET COUPON CODE</h3>
                    </div>
                    <div className="cupon-code">
                        <div className="left">
                            <h4>COUPON  CODE</h4>
                            <div className="code">
                                <span>code</span>
                                <div className="icon">
                                    <PiFilesFill />
                                </div>
                                <div className="code-number">
                                    AAA-98546-254
                                </div>
                            </div>

                        </div>

                        <div className="rotate-text"> <span>COUPON  CODE</span></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GetCuponCode