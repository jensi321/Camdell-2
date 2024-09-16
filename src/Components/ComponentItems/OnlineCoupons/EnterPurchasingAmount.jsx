import React from 'react'
import { FaCalendarAlt } from 'react-icons/fa'
import { IoTime } from "react-icons/io5";
import { Link } from 'react-router-dom'

const EnterPurchasingAmount = ({ onOpenSuccessfull }) => {
    return (
        <>
            <div className="purchasing-outer">
                <div className="purchasing-inner">
                    <div className="user-info">
                        <div className="img-content">
                            <img src="assets/Image/user6.jpeg" alt="" />
                        </div>
                        <div className="text-content">
                            <div className="user-name">Kavin Kumar</div>
                            <div className="camdell-user-msg">Kavin Kumar is a camdell user</div>
                        </div>
                    </div>

                    <div className="purchasing-amount">
                        <div className="inputgroup">
                            <label htmlFor="">Enter Purchasing amount</label>
                            <input type="text" placeholder='Enter mount' />
                        </div>
                        <div className="inputgroup">
                            <label htmlFor="">Enter Date & Time</label>
                            <div className="row">
                                <div className="col-6">
                                    <input type="text" placeholder='Enter Date' />
                                    <span className="icon">
                                        <FaCalendarAlt />
                                    </span>

                                </div>
                                <div className="col-6">
                                    <input type="text" placeholder='Enter Time' />
                                    <span className='icon'>
                                        <IoTime />
                                    </span>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="submit-button">
                        <Link className='button' onClick={onOpenSuccessfull}>Submit</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EnterPurchasingAmount
