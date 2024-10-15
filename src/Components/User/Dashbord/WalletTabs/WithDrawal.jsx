import React, {  useState } from 'react'
import { Modal } from 'react-bootstrap';
// import { PiSealCheckFill } from 'react-icons/pi'
import { Link } from 'react-router-dom'
import { BaseUrl } from '../../../BaseURL/BaseUrl';

const WithDrawal = ({ show, close, onSubmit }) => {

    const [amount, setAmount] = useState('');
    const [amountError, setAmountError] = useState('');

    const token= JSON.parse(sessionStorage.getItem('token'));
    const userId = (token.id)
    console.log(userId);

    const handleamount = (e) => {
        const inputValue = e.target.value;
        const onlyNumbers = inputValue.replace(/[^0-9]/, '');
        setAmount(onlyNumbers);
        validateAmount(onlyNumbers)

    }

    const validateAmount = (amount) => {
        const amountRegex = /^\d+(\.\d{1,2})?$/;
        if (!amountRegex.test(amount)) {
            setAmountError('Please Enter Valid Amount');
        } else {
            setAmountError('');
        }
    };

    if (!show) return null;

    const handleSubmit = () => {
        close();
        onSubmit();
    }



    const handleSubmitAmmount = (e) => {
        e.preventDefault();
        const formData = {
            user_id: userId, 
            amount: amount,
        };

        fetch(`${BaseUrl}/withdraw_request.php`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })

            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                close();
                // handle the response data here
            })

            .catch((error) => {
                console.error(error);
                // handle the error here
            });

    };




    return (
        <>
            <div className="withdral-request-outer">
                <Modal show={show} onHide={close}>
                    <div className={`withdrawal-outer`}>
                        <div className="withdrawal-inner ">
                            <div className="heading">
                                <h3>Enter Withdrawal Amount</h3>
                            </div>
                            <div className="withdrawal-amount">
                                <div className="inputgroup">
                                    <input type="text" placeholder='Enter Withdrawal Amount' value={amount} pattern='[0-9]' onChange={handleamount} />
                                    {amountError && <div className="error"> {amountError}</div>}

                                </div>
                            </div>

                            {/* <p className='verify-account'><span><PiSealCheckFill />
                        </span> Verify Bank Account</p> */}
                            <p className='warning'>! Not Verify Your Bank Account <Link to='' onClick={handleSubmit}>Click here</Link></p>

                            <div className="check-group">
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">Your request verify by camdell after then your amount transfer to your account and it take time for verification process</label>
                            </div>

                            <div className="withdrawal-button">
                                <Link to='' className='button' onClick={handleSubmitAmmount}>Submit</Link>
                            </div>
                        </div>
                    </div>
                </Modal>

            </div>


        </>
    )
}

export default WithDrawal