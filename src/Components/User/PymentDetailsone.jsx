import React, { useContext, useState } from 'react';
import { Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import GetCuponCode from './GetCuponCode';
import axios from 'axios';
import { ProfileContext } from '../Context/UserContext';
import { BaseUrl } from '../BaseURL/BaseUrl';

const PymentDetailsone = () => {
    const [show, setShow] = useState(false);
    const [count, setCount] = useState(200);
    const [selectedOption, setSelectedOption] = useState('promocode');
    const [paymentStatus, setPaymentStatus] = useState(null);
    const [promoCode, setPromoCode] = useState(''); // New state variable to store promo code
    const [promocodeError, setPromocodeError] = useState(''); // New state variable to store error message

    // Use the props here

    const { planId, planName, planPrice ,wallet} = useContext(ProfileContext);

    const token= JSON.parse(sessionStorage.getItem('token'));
    const userId = (token.id)
    console.log(userId);
    
    const hadleClose = () => {
        setShow(false);
    };

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleIncrement = () => {
        setCount(count + 1);
    };

    const handleDecrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    const handlePromoCodeChange = (e) => {
        const inputValue = e.target.value;
        const onlycharacter = inputValue.replace(/[^0-9]/g, '');
        setPromoCode(onlycharacter);

        if (onlycharacter === '') {
            setPromocodeError('Please enter a promo code!');
        } else if (onlycharacter.length < 6) {
            setPromocodeError('Promo code must be at least 6 characters long!');
        } else {
            setPromocodeError('');
        }

    }

    const handlePayment = async () => {

        if (selectedOption === 'promocode' && promoCode === '') {
            setPromocodeError('Enter Promocode');
            return
        }

        const keyId = 'rzp_test_TREPWNGhQCTA0t';
        const usedWalletAmount = 400; // Replace with the actual used wallet amount
        const usedPoint = count; // Replace with the actual used point

        
        const planid = planId; // Replace with the actual plan ID

        const formdata = {
            user_id: userId,
            plan_id: planid,
            used_wallet_amount: usedWalletAmount,
            used_point: usedPoint,
        }
        console.log(formdata)
        const options = {
            key: keyId,
            amount: planPrice * 100, // Replace with the actual amount (in paise)
            currency: 'INR',
            name: planName,
            description: 'Premium subscription',
            image: 'https://example.com/logo.png',
            order_id: '', // Replace with the actual order ID
            handler: (response) => {
                if (response.razorpay_payment_id) {
                    // Payment successful
                    setPaymentStatus('success');
                    axios.post(`${BaseUrl}/purchaseplan.php`, formdata)
                        .then((response) => {
                            console.log(response.data);
                            if (response.data.success) {
                                alert('Payment successful!');
                            }
                        })

                        .catch((error) => {
                            console.error(error);
                            alert('Payment successful, but API call failed!');

                        });
                } else {
                    // Payment failed
                    setPaymentStatus('failed');

                }
            },
            prefill: {
                name: 'John Doe',
                email: 'john.doe@example.com',
                contact: '9999999999',
            },
            notes: {
                address: 'Razorpay Corporate Office',
            },
            theme: {
                color: '#F37254',
            },
        };

        const rzp1 = new window.Razorpay(options);
        rzp1.open();
    };

    return (
        <>
            <div className="pyment-detail-outer">
                <div className="container">
                    <div className="pyment-detail-inner">
                        <div className="row">
                            <div className="col-md-6 col-12 item">
                                <div className="item-inner">
                                    <div className="wallet-amount">
                                        <p>Wallet amount</p>
                                        <div className="amount">
                                            <span>
                                                <span className="ruppes-icon">₹ </span> {wallet}
                                            </span>
                                            <Link to="">Use now</Link>
                                        </div>
                                    </div>
                                    <div className="payment-details">
                                        <h3>Payment Details :</h3>

                                        <p>
                                            <span>Sub - Total amount </span>
                                            <span>: <span className="ruppes-icon">₹ </span> {planPrice}</span>
                                        </p>
                                        <p>
                                            <span>Wallet amount </span>
                                            <span>: <span className="ruppes-icon">₹ </span> {wallet}</span>
                                        </p>

                                        <div className="line"></div>
                                        <p>
                                            <span>Wallet amount </span>
                                            <span>: <span className="ruppes-icon">₹ </span> {planPrice - wallet}</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-12 item">
                                <div className="item-inner">
                                    <div className="premium">
                                        <div className="img-content">
                                            <img src="assets/Image/subscriptionmodel.png" alt="" />
                                        </div>
                                        <div className="text-content">
                                            <h3>{planName}</h3>
                                            <span>PER Month</span>
                                            <p className="ruppes">
                                                <span className="ruppes-icon">₹ </span>
                                                <span> {planPrice}</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="promocode">
                                        <select value={selectedOption} onChange={handleSelectChange}>
                                            <option value="promocode" selected>Enter Promo Code</option>
                                            <option value="loyaltypoint">Select Loyalty point</option>
                                        </select>

                                        {selectedOption === 'promocode' && (
                                            <>
                                                <input type="text" placeholder='Enter Promo Code' value={promoCode} onChange={handlePromoCodeChange} />
                                                {promocodeError && <div className="error">{promocodeError}</div>}
                                            </>
                                        )}

                                        {selectedOption === 'loyaltypoint' && (
                                            <>
                                                <div className="loyalty-points">
                                                    <div className="img-content">
                                                        <img src="assets/Image/Coins.png" alt="" />

                                                    </div>
                                                    <span>Loyalty Point </span>

                                                    <div className="counter">
                                                        <button onClick={handleDecrement}>-</button>
                                                        <span className='count-number'>{count}</span>
                                                        <button onClick={handleIncrement}>+</button>
                                                    </div>

                                                </div>
                                            </>
                                        )}

                                        <button className="button" onClick={handlePayment}>Payment Process</button>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Modal show={show} onHide={hadleClose}>
                <GetCuponCode />
            </Modal>



            {paymentStatus === 'failed' && (

                alert("Payment failed!")

            )}
        </>
    );
};

export default PymentDetailsone;