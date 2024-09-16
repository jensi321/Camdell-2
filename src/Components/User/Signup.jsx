import React, { useState } from 'react'
import { FaX } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { BaseUrl } from '../BaseURL/BaseUrl';

const Signup = ({ onClose, onOpenreferralId, onOpenMemberLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [mobile, setMobile] = useState('');
    const [otp, setOtp] = useState('');
    const [checkbox, setCheckbox] = useState(false);
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [mobileError, setMobileError] = useState('');
    const [otpError, setOtpError] = useState('');
    const [termsError, setTermsError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [otpSent, setOtpSent] = useState(false);
    const [userData, setUserData] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        validateEmail(e.target.value);
    };
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        validatePassword(e.target.value);
    };
    const handleMobileChange = (e) => {
        const inputValue = e.target.value;
        const onlyNumbers = inputValue.replace(/[^0-9]/, '');
        setMobile(onlyNumbers);
        validateMobile(onlyNumbers);
    };
    const handleOtpChange = (e) => {
        const inputValue = e.target.value;
        const onlyNumbers = inputValue.replace(/[^0-9]/, '');
        setOtp(onlyNumbers);
        validateotp(onlyNumbers)

    }
    const handleCheckboxChange = (e) => {
        setCheckbox(e.target.checked);
        if (e.target.checked) {
            setTermsError('');
        } else {
            setTermsError('Please agree to the terms of use and privacy policy');
        }
    };

    const validateEmail = (email) => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email)) {
            setEmailError('Please enter a valid email address');
        } else {
            setEmailError('');
        }
    };
    const validatePassword = (password) => {
        const passwordregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$! %*?&])[A-Za-z\d@$!%*?&]{8,}/;
        if (!passwordregex.test(password)) {
            setPasswordError('Minimum eight and maximum 10 characters, at least one uppercase letter, one lowercase letter, one number and one special character:');
        } else {
            setPasswordError('');
        }
    };
    const validateMobile = (mobilenumber) => {
        const mobileRegex = /^[789]\d{9}$/; // assuming 10-digit mobile number
        if (!mobileRegex.test(mobilenumber)) {
            setMobileError('Please Enter Valid Mobile Number');
        } else {
            setMobileError('');
        }
    };
    const validateotp = (otp) => {
        const otpregexp = /^\d{4}$/;
        if (!otpregexp.test(otp)) {
            setOtpError('Please Enter Valid OTP ');
        }
        else {
            setOtpError('');
        }
    }


    const sendOtpToMobile = (mobile) => {
        // logic to send OTP to mobile number
        console.log(`Sending OTP to ${mobile}`);
        // You can add the actual logic to send the OTP here
        setOtpSent(true);
    };

    const handleResendOtp = () => {
        const userId = userData;
        const formData = {
            user_id: userId,
        };
        fetch(`${BaseUrl}/resendotp.php`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.success) {
                    console.log('OTP resent successfully');
                    sendOtpToMobile(mobile)
                    setSuccessMessage('OTP resent successfully');
                } else {
                    console.log('Error resending OTP');
                    setOtpError('Error resending OTP')
                }

            })

            .catch((error) => {

                console.error(error);

            });

    };

    const handleVerifyotp = () => {

        const userId = userData;
        console.log(userData)
        const formData = {
            user_id: userId,
            otp: otp,
        };

        fetch(`${BaseUrl}/verifyotp.php`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.success === true) {
                    console.log('OTP verified successfully!');
                    onClose();
                    onOpenreferralId(userData);
                    alert('Your SignUp Successfully')
                    // Update the user's status or perform any other action after OTP verification
                } else {
                    console.log('Invalid OTP');
                    setOtpError('Invalid OTP')
                }
            })
            .catch((error) => {
                console.error(error);
            });
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        if (emailError || passwordError || mobileError) {

        }
        if (termsError) {
            return;
        }

        const formData = {
            email,
            password,
            mobile,
        };

        console.log(formData)

        fetch(`${BaseUrl}/register.php`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
              },
            body: JSON.stringify(formData),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.success === false) {
                    console.log(data);
                    if (data.data.email) {
                        setEmailError(data.data.email);
                    }
                    if (data.data.password) {
                        setPasswordError(data.data.password);
                    }
                    if (data.data.mobile) {
                        setMobileError(data.data.mobile);
                    }
                } else {
                    console.log('Data added successfully! ', data);
                    setSuccessMessage('Data added successfully! OTP sent to your mobile number.');
                    // Send OTP logic here
                    sendOtpToMobile(mobile);
                    console.log('Id', data.data[0].id)
                    setUserData(data.data[0].id)
                }
            })

            .catch((error) => {
                // Handle error response from API
                console.error(error);
            });
    }

    // const OpenreferralId = () => {onOpenreferralId()}
    return (
        <>
            <div className="signup-outer">
                <div className="signup-inner row">
                    <div className="col-12 col-sm-6 left">
                        <div className="img-content">
                            <img src="assets/Image/Discount.png" alt="" />
                            <img src="assets/Image/signupcuponbg.png" alt="" />
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 right">
                        <button onClick={onClose}><FaX /></button>
                        <div className="inner">

                            <div className="heading">
                                <h3>Sign Up</h3>
                            </div>
                            <form method="post" >

                                <div className="inputgroup">
                                    <input type="email" name='email' id='email' placeholder='Enter Your Email' value={email} onChange={handleEmailChange} />
                                    {emailError && <div className="error"> {emailError}</div>}

                                </div>
                                <div className="inputgroup">
                                    <input
                                        type="password"
                                        name='password'
                                        id='password'
                                        placeholder='Enter your password'
                                        value={password}
                                        onChange={handlePasswordChange}
                                        minLength={8}
                                    />
                                    {passwordError && <div className="error"> {passwordError}</div>}

                                </div>
                                <div className="inputgroup">
                                    <input
                                        type="tel"
                                        name='mobilenumber'
                                        id='mobilenumber'
                                        placeholder='Mobile number'
                                        minLength={10}
                                        maxLength={10}
                                        value={mobile}
                                        onChange={handleMobileChange}
                                    />
                                    {mobileError && <div className="error"> {mobileError}</div>}
                                </div>

                                <div className="inputgroup">
                                    <div className="otp-group">
                                        <input
                                            type="text"
                                            name="otp"
                                            placeholder='Enter OTP'
                                            value={otp}
                                            onChange={handleOtpChange}
                                            onKeyPress={(e) => {
                                                if (!/[0-9]/.test(e.key)) {
                                                    e.preventDefault();
                                                }
                                            }}
                                            inputMode="numeric"
                                            pattern="[0-9]*"
                                            minLength={4}
                                            maxLength={4}
                                        />
                                        <input
                                            type='button'
                                            className='button'
                                            value='Get OTP'
                                            onClick={handleSubmit} />
                                    </div>
                                    {otpError && <div className="error"> {otpError}</div>}
                                    {otpSent && (
                                        <div className='success' onClick={handleResendOtp}>Resend OTP</div>
                                    )}
                                </div>

                                <div className="inputgroup">
                                    <div className="privacy-check">
                                        <input type="checkbox" checked={checkbox} onChange={handleCheckboxChange} />
                                        <label htmlFor="">By signing up . I agree to the terms of use and privacy policy of app</label>
                                    </div>
                                    {termsError && <div className="error"> {termsError}</div>}
                                </div>


                                {successMessage && <div className="success">{successMessage}</div>}


                                <Link to='' className='button' onClick={handleVerifyotp}>Sign Up</Link>

                                <div className="sign-in">Already have an account ? <Link to={''} onClick={() => {

                                    onOpenMemberLogin();
                                }}>Sign in</Link></div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup