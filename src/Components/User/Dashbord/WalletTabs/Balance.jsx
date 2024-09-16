import React from 'react'
import { Link } from 'react-router-dom'

const Balance = () => {
    return (
        <>
            <div className="balance-outer">
                <div className="item your-balance">
                    <div className="item-inner">
                        <div className="heading">
                            <h4>Your Balance</h4>
                        </div>

                        <div className="balnce-amount"><span className='ruppes-icon'>₹ </span>400</div>
                        <div className="use-now">
                            <Link to={''}>Use Now</Link>  </div>
                    </div>
                </div>
                <div className="item total-income">
                    <div className="item-inner">
                        <div className="heading">
                            <h4>Total income</h4>
                        </div>
                        <div className="income-amount"><span className='ruppes-icon'>₹ </span>400</div>
                    </div>
                </div>
                <div className="item total-expenses">
                    <div className="item-inner">
                        <div className="heading">
                            <h4>Total expenses</h4>
                        </div>
                        <div className="expenses-amount"><span className='ruppes-icon'>₹ </span>400</div>
                    </div>
                </div>
            </div></>
    )
}

export default Balance