import React, { useEffect, useState } from 'react'
import { Modal } from 'react-bootstrap';
import SubTermsCondition from './SubTermsCondition';

const TermsSetTimeOut = () => {
    const [show, setShow] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setShow(true)
        }, 5000)

    }, []);


    return (
        <>
            <Modal id="myModal" show={show} className='' onHide={() => setShow(false)}>
               
                    <SubTermsCondition close={() => setShow(false)} />

            </Modal>
        </>
    )
}

export default TermsSetTimeOut