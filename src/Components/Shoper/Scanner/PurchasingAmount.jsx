import React from 'react'
import { Link } from 'react-router-dom'

const PurchasingAmount = ({onOpenSuccessful}) => {
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
                        </div>
                    </div>

                    <div className="purchasing-amount">
                        <label htmlFor="">Enter Purchasing amount</label>
                        <input type="text" placeholder='Enter mount' />
                    </div>

                    <div className="submit-button">
                        <Link className='button' onClick={onOpenSuccessful}>Submit</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PurchasingAmount