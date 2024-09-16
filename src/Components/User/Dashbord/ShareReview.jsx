import { Rate } from 'antd';
import React, { useEffect, useState } from 'react'
import { Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ShareReview = () => {

    const [show, setShow] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setShow(true)
        }, 2000)

    }, []);

    return (
        <>
            <Modal show={show} onHide={() =>{setShow(false)}}>
                <div className="review-outer">
                    <div className="review-inner">
                        <div className="heading">
                            <p>Share your Feedback</p>
                        </div>
                        <div className="rating">
                            <Rate defaultValue={1} />
                        </div>
                        <div className="submit-button">
                        <Link className="button">Submit</Link>
                        </div>
                        
                    </div>
                </div>
            </Modal>

        </>
    )
}

export default ShareReview
