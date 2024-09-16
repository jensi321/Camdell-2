import React, { useContext, useEffect, useState } from 'react'
import { Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { ProfileContext } from '../Context/UserContext';

const Subscriptionmodel = () => {

    const [show, setShow] = useState(false);

    const { endDate } = useContext(ProfileContext);
    useEffect(() => {

        const currentDate = new Date();
        const endDateObject = new Date(endDate);
        const differenceInTime = endDateObject.getTime() - currentDate.getTime();
        const differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24));

        if (differenceInDays <= 8) {
            setTimeout(() => {
                setShow(true);
            }, 15000); // Show the modal immediately if the difference is less than or equal to 8 days
        } else {
            
                setShow(false);

        }

    }, [endDate]);

    const { setActiveTab } = useContext(ProfileContext); 
  
    const handleSubscriptionClick = () => {
  
      setActiveTab('6'); // Update the activeTab state to 4 (Wallet tab)
  
    };

    return (
        <>
            <Modal show={show} onHide={() => {
                setShow(false)
            }}>
                <div className="sub-model-outer">
                    <div className="sub-model-inner">
                        <div className="all-sub">
                            <h4>Your Subscription plan</h4><Link to={'/dashbord'} onClick={handleSubscriptionClick}>View All</Link>
                        </div>
                        <div className="img-content">
                            <img src='assets/Image/subscriptionmodel.png' alt="" />
                            <div className="heading">
                                <h3>Premium<span> ( PER MONTH )</span></h3>
                            </div>

                        </div><div className="date">
                            <span className="strat-deate">Starting Date : 11/05/2024</span>
                            <span className="end-deate">End Date : {endDate}</span>
                        </div>
                        <div className="cupon-info">
                            <span className="avialabel-cupon">Coupon Available : 19</span>
                            <Link to={'/subscription'} onClick={() => {
                                setShow(false)
                            }} className='renewed'>Renewed now</Link>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default Subscriptionmodel