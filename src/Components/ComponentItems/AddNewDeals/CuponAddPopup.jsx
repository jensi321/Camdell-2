import React, { useState } from 'react'
import { Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom'

const CuponAddPopup = ({close}) => {

    const [show, setShow] =useState(false);
  return (
    <>
        <div className="cuponadd-outer">
            <div className="cuponadd-inner">
                <div className="heading">
                    <h3>Verification</h3>
                </div>
                <p>Once submit your coupon can’t edited & deleted</p>

                <div className="button-group">
                    <Link className="button" onClick={() => {setShow(true)}}>Yes</Link>
                    <Link className="outline-button" onClick={close}>No</Link>
                </div>
            </div>
        </div>
        <Modal show={show} onHide={() =>{setShow(false)}}>
        <div className="cuponadd-outer">
            <div className="cuponadd-inner">
                <div className="heading">
                    <h3>Verification</h3>
                </div>
                <p>Did you want first preference on your coupons sale</p>

                <div className="button-group">
                    <Link className="button">Yes</Link>
                    <Link className="outline-button" onClick={close}>No</Link>
                </div>
            </div>
        </div>
        </Modal>
    </>
  )
}

export default CuponAddPopup
