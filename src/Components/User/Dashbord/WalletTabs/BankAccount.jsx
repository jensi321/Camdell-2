import React, {  useState } from 'react'
import { Link } from 'react-router-dom'
import { BaseUrl } from '../../../BaseURL/BaseUrl';

const BankAccount = () => {
    const [accountName, setAccountName] = useState('');
    const [accountNameError, setAccountNameError] = useState('');
    const [accountNumber, setAccountNumber] = useState('');
    const [accountNumberError, setAccountNumberError] = useState('');
    const [mobilenumber, setMobileNumber] = useState('');
    const [mobileError, setMobileError] = useState('');
    const [ifscCode, setifscCode] = useState('');
    const [ifscCodeError, setifscCodeError] = useState('');
    // const [upiId, setUpiId] = useState('');
    // const [upiIdError, setUpiIdError] = useState('');

    const handleAccountName = (e) => {
        const inputValue = e.target.value;
        const onlycharacter = inputValue.replace(/[^a-zA-Z\s]/g, '');
        setAccountName(onlycharacter);
        validAccountName(onlycharacter);
    }

    const validAccountName = (accountName) => {
        const accountregex = /^[a-zA-Z\s]{2,50}$/;
        if (!accountregex.test(accountName)) {
            setAccountNameError('Please Enter Valid Account Name')
        }
        else {
            setAccountNameError('')
        }
    }

    const handleAccountNumber = (e) => {
        const inputValue = e.target.value;
        const onlyNumbers = inputValue.replace(/[^0-9]/, '');
        setAccountNumber(onlyNumbers);
        validAccountNumber(onlyNumbers);
    }

    const validAccountNumber = (accountNumber) => {
        const accountregex = /^\d{9,18}$/;
        if (!accountregex.test(accountNumber)) {
            setAccountNumberError('Please Enter Valid Account Name')
        }
        else {
            setAccountNumberError('')
        }
    }

    const handleMobileChange = (e) => {
        const inputValue = e.target.value;
        const onlyNumbers = inputValue.replace(/[^0-9]/, '');
        setMobileNumber(onlyNumbers);
        validateMobile(onlyNumbers);
    };

    const validateMobile = (mobilenumber) => {
        const mobileRegex = /^[789]\d{9}$/; // assuming 10-digit mobile number
        if (!mobileRegex.test(mobilenumber)) {
            setMobileError('Please Enter Valid Mobile Number');
        } else {
            setMobileError('');
        }
    };

    const handleIfceCode = (e) => {
        const inputvalue = e.target.value;
        setifscCode(inputvalue);
        validIfscCode(inputvalue);
    }

    const validIfscCode = (ifscCode) => {
        const regexp = /^[A-Z]{4}0[A-Z0-9]{6}$/
        if (!regexp.test(ifscCode)) {
            setifscCodeError('Your IFSC Code Wrong');
        }
        else {
            setifscCodeError('')
        }
    }

    //     const handleUpiId = (e) =>{
    //         const inputvalue = e.target.value;
    //         setUpiId(inputvalue);
    //         validUpiId(inputvalue);
    //     }

    //    const validUpiId = (upiid) =>{
    //         const regexp = /[0-9A-Za-z.-]{2,256}@[A-Za-z]{2,64}$/
    //         if(!regexp.test(upiid)){
    //             setUpiIdError('Your UPI Id Number Wrong');
    //         }
    //         else{
    //             setUpiIdError('')
    //         }

    //     }
    const token= JSON.parse(sessionStorage.getItem('token'));
    const userId = (token.id)
    console.log(userId);

    const handleSubmit = (e) => {
        e.preventDefault();
       
        const formData = {
            user_id: userId, // replace with the actual user ID
            account_name: accountName,
            account_number: accountNumber,
            ifsc_code: ifscCode,
            mobile_number: mobilenumber,
        };

        fetch(`${BaseUrl}/addbank_detail.php`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
              },
            body: JSON.stringify(formData),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                alert("Your Bank Details Added")
                // handle the response data here
            })
            .catch((error) => {
                console.error(error);
                // handle the error here
            });
    };

    return (
        <>
            <div className="bank-outer">
                <div className="bank-inner">
                    <form>
                        <div className="row">
                            <div className="col-12 col-sm-6">
                                <div className="input-group">
                                    <label htmlFor="">
                                        Account Name
                                    </label>
                                    <input type="text" id='account-name' placeholder='Enter Account Name' value={accountName} onChange={handleAccountName} />
                                    {accountNameError && <div className='error'>{accountNameError}</div>}
                                </div>
                            </div>
                            <div className="col-12 col-sm-6">
                                <div className="input-group">
                                    <label htmlFor="">
                                        Account number
                                    </label>
                                    <input type="text" id='account-number' minLength={9} maxLength={18} placeholder='Enter Account number' value={accountNumber} onChange={handleAccountNumber} />
                                    {accountNumberError && <div className='error'>{accountNumberError}</div>}
                                </div>
                            </div>
                            <div className="col-12 col-sm-6">
                                <div className="input-group">
                                    <label htmlFor="">
                                        Mobile number
                                    </label>
                                    <input
                                        type="tel"
                                        name='mobilenumber'
                                        id='mobilenumber'
                                        placeholder='Enter Mobile number'
                                        minLength={10}
                                        maxLength={10}
                                        value={mobilenumber}
                                        onChange={handleMobileChange}
                                    />
                                    {mobileError && <div className="error"> {mobileError}</div>}
                                </div>
                            </div>
                            <div className="col-12 col-sm-6">
                                <div className="input-group">
                                    <label htmlFor="">
                                        IFSC code number
                                    </label>
                                    <input type="text" id='ifsccode' placeholder='Enter IFSC Code number' minLength={11} maxLength={11} value={ifscCode} onChange={handleIfceCode} />
                                    {ifscCodeError && <div className='error'>{ifscCodeError}</div>}
                                </div>
                            </div>

                        </div>

                        {/* <div className="or">
                            <span>OR</span>
                        </div>
                        <div className="row">
                            <div className="col-12 col-sm-6"><div className="input-group">
                                <label htmlFor="">
                                    Enter UPI ID Number
                                </label>
                                <input type="text" id='upiid' placeholder='Enter UPI ID number' value={upiId} onChange={handleUpiId} />
                                {upiIdError && <div className='error'>{upiIdError}</div> }
                            </div></div>
                        </div> */}

                        <div className="input-button">
                            <Link to='' className='button' onClick={handleSubmit}>Submit</Link>
                        </div>

                    </form>
                </div>
            </div>
        </>
    )
}

export default BankAccount