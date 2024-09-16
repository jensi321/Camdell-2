import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const PymentPlan = () => {
    const [count, setCount] = useState(200);
    const [selectedOption, setSelectedOption] = useState('option1');



    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleIncrement = () => {
        setCount(count + 1);
    };

    const handleDecrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };
    return (
        <>
            <div className="pyment-detail-outer">
                <div className="container">
                    <div className="pyment-detail-inner">
                        <div className="row">
                            <div className="col-md-6 col-12 item">
                                <div className="item-inner">
                                    <div className="wallet-amount">
                                        <p>Wallet amount</p>
                                        <div className="amount"><span><span className='ruppes-icon'>₹ </span> 400</span> <Link to=''>Use now</Link></div>
                                    </div>
                                    <div className="payment-details">

                                        <h3>Payment Details :</h3>

                                        <p><span>Sub - Total amount </span> <span>: <span className='ruppes-icon'>₹ </span> 500</span></p>
                                        <p><span>Wallet amount  </span> <span>: <span className='ruppes-icon'>₹ </span> 400</span></p>

                                        <div className="line"></div>
                                        <p><span>Wallet amount  </span> <span>: <span className='ruppes-icon'>₹ </span> 100</span></p>

                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-12 item">
                                <div className="item-inner">
                                    <div className="mearchnt-primum">
                                        <div className="primum-inner">

                                            <p>Gold</p>
                                            <ul>
                                                <li>Subscription Plan choose</li>
                                                <li>Subscription Plan choose</li>
                                                <li>Subscription Plan choose</li>
                                            </ul>

                                            <div className="ruppes">

                                                <div className="points-amount">
                                                    <span className='ruppes-icon'>₹ </span>
                                                    500
                                                </div>
                                                <div className="duration">
                                                    Per <br />Month
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="promocode">
                                        <select value={selectedOption} onChange={handleSelectChange}>
                                            <option value="option1" selected>Enter Promo Code</option>
                                            <option value="option2">Select Loyalty point</option>
                                        </select>

                                        {selectedOption === 'option1' && (
                                            <input type="text" placeholder='Enter Promo Code' />
                                        )}

                                        {selectedOption === 'option2' && (
                                            <>
                                                <div className="loyalty-points">
                                                    <div className="img-content">
                                                        <img src="assets/Image/Coins.png" alt="" />

                                                    </div>
                                                    <span>Loyalty Point </span>

                                                    <div className="counter">
                                                        <button onClick={handleDecrement}>-</button>
                                                        <span className='count-number'>{count}</span>
                                                        <button onClick={handleIncrement}>+</button>
                                                    </div>

                                                </div>
                                            </>
                                        )}

                                        <Link className="button" >Payment Process</Link>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PymentPlan
