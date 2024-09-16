import React, { useState } from 'react'
import { Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import CuponCodeModal from './CuponCodeModal';
import UsercuponModal from './UsercuponModal';
import PurchasingAmount from './PurchasingAmount';
import SuccessfulModal from './SuccessfulModal';

const Scanner = () => {

  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const handleClose = () => setShowModal(false);

  const handleCuponCode = () => {
    setModalContent(<CuponCodeModal onClose={handleClose} onOpenUserCupon={handleUSerCupon} />);
    setShowModal(true);
};
  const handleUSerCupon = () => {
    setModalContent(<UsercuponModal onClose={handleClose} onOpenPurchasing={handlePurchasing} />);
    setShowModal(true);
};
  const handlePurchasing = () => {
    setModalContent(<PurchasingAmount onClose={handleClose}  onOpenSuccessful={handleSuccessful}/>);
    setShowModal(true);
};
  const handleSuccessful = () => {
    setModalContent(<SuccessfulModal onClose={handleClose}  />);
    setShowModal(true);
};

  return (
    <>
      <div className="scanner-outer">
        <div className="container">
          <div className="scanner-inner">
            <div className="qr-image">
              <div className="img-content">
                <img src="assets/Image/QR-Code.png" alt="" />
              </div>
            </div>

            <div className="or"><span>(or)</span></div>

            <div className="number-box">
              <div className="inner-box">
                <div className="heading">
                  <h3>Enter 16 Digited Number</h3>
                </div>
                <div className="input-box">
                  <input type="text" placeholder='Enter 16 Digited number' />
                </div>

                <div className="submit-button">
                  <Link className="button" onClick={handleCuponCode}>Submit</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal show={showModal} onHide={handleClose}>
        {modalContent}
      </Modal>
    </>
  )
}

export default Scanner