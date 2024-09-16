import React from 'react'

const WhatNext = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;
    return (
        <div>
            <div className="what-next-outer" onClick={onClose}>
                <div className="what-next-inner">
                    <div className="heading">
                        <h3>What happen next</h3>
                    </div>
                    <div className="steps">
                        <div className="first">
                            <img src="assets/Image/1.png" alt="" />
                            <p>Claim
                                Submitted</p>
                        </div>
                        <span>1-2 Days</span>
                        <div className="second">
                            <img src="assets/Image/2.png" alt="" />
                            <p>Verified your
                                request</p>
                        </div>
                        <span>40-60 Days</span>
                        <div className="third">
                            <img src="assets/Image/3.png" alt="" />
                            <p>Final amount will
                                Add on your
                                Wallet</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhatNext
