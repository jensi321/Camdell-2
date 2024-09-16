import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const UsercuponModal = ({ onClose, onOpenPurchasing }) => {

  const [submitButtonVisible, setSubmitButtonVisible] = useState(true);
  const [message, setMessage] = useState('');

  const handleButtonClick = () => {
    setSubmitButtonVisible(false);
    setMessage('Submitted successfully!');
    setTimeout(() => {
      onOpenPurchasing(); // Call onOpenPurchasing after 2 seconds
    }, 2000); // delay closing the modal for 2 seconds
  };

  return (
    <>
      <div className="user-cupon-outer">
        <div className="user-cupon-inner">
          <div className="user-info">
            <div className="img-content">
              <img src="assets/Image/user6.jpeg" alt="" />
            </div>
            <div className="text-content">
              <div className="user-name">Kavin Kumar</div>
            </div>
          </div>

          <div className="cupon-row">
            <div className="item">
              <div className="item-inner">
                <div className="top">
                  <div className="img-content">
                    <img src='assets/Image/swiggy.png' alt="" />
                    <h2>Swiggy</h2>
                  </div>
                </div>
                <div className="bottom row">
                  <div className="col-6">Cat : Food  & Drinks</div>
                  <div className="col-6">Started : 08-feb-2024</div>
                  <div className="col-6">Sub - Cat : Dinners</div>
                  <div className="col-6">Ended : 30-feb-2024</div>
                  <div className="col-6">Min amount : 1,000</div>
                  <div className="col-6">Max amount : 5,000</div>
                  <div className="col-6">Deals :  Discount</div>
                </div>

              </div>
            </div>
          </div>


          {submitButtonVisible ? (
            <div className="submit-button">
              <Link className='button' onClick={handleButtonClick}>Submit</Link>
            </div>
          ) : (
            <div className="message">
              <span>
                {message}
              </span>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default UsercuponModal
