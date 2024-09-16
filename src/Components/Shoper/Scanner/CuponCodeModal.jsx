import React from 'react'
import { Link } from 'react-router-dom'

const CuponCodeModal = ({onOpenUserCupon,onClose}) => {
  return (
    <>
      <div className="enter-cupon-code">
        <div className="enter-inner">
          <div className="user-info">
            <div className="img-content">
              <img src="assets/Image/user6.jpeg" alt="" />
            </div>
            <div className="text-content">
              <div className="user-name">Kavin Kumar</div>
              <div className="camdell-user-msg">Kavin Kumar is a camdell user</div>
            </div>
          </div>

          <div className="cupon-code-info">
            <div className="heading"><h3>Enter coupon code</h3></div>
            <input type="text" placeholder='Enter coupon code' />
          </div>

          <div className="submit-button">
            <Link className="button" onClick={onOpenUserCupon}>Submit</Link>
          </div>
        </div>
      </div>

  
    </>
  )
}

export default CuponCodeModal
