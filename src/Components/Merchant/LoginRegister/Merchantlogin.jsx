import React, { useState } from 'react'
import { FaX } from 'react-icons/fa6'
import { Link, useNavigate } from 'react-router-dom'
import { BaseUrl } from '../../BaseURL/BaseUrl';

const Merchantlogin = ({ onClose }) => {

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [checkbox, setCheckbox] = useState(false);
  const [termsError, setTermsError] = useState('');

  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
    if (emailValue) {
      setEmailError('')
      setTermsError('')
    }
  };

  const handlePasswordChange = (e) => {
    const passwordValue = e.target.value;
    setPassword(passwordValue);
    if (passwordValue) {
      setPasswordError('')
      setTermsError('')
    }
  };

  const handleValueSubmit = () => {
    setEmail('');
    setPassword('');
  };

  const handleCheckboxChange = (e) => {
    setCheckbox(e.target.checked);
    if (e.target.checked) {
      setTermsError('');
    } else {
      setTermsError('Please agree to the terms of use and privacy policy');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (termsError) {
      return;
    }

    if(!email && !password){
      setEmailError('Please enter your email address');
      setPasswordError('Please enter your password');
    }

    if (!email) {
      setEmailError('Please enter your email address');
    }
  
    if (!password) {
      setPasswordError('Please enter your password');
    }
    if (!checkbox) {
      setTermsError('Please agree to the terms of use and privacy policy');
      return;
    }

   

    fetch(`${BaseUrl}/loginmerchant.php`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          console.log(data.data[0])
          handleValueSubmit()
          onClose();
          navigate('/merchantdesktop');
          console.log('Merchant  LogIn Succesfully')
          alert('You are Login Succesfully')
        } else {
          // Login failed, display error message
          setTermsError('Invalid email or password');
        }
      })

      .catch((error) => {
        console.error(error);

      });
  };


  return (
    <><div className="login-outer merchant-login">
      <div className="login-inner row">
        <div className="col-12 col-sm-6 left">
          <div className="img-content">
            <img src="assets/Image/Merchant.png" alt="" />
          </div>
        </div>
        <div className="col-12 col-sm-6 right">
          <button onClick={onClose}><FaX /></button>
          <div className="inner">

            <div className="heading">
              <h3>Merchant
                log in</h3>
            </div>
            <form method="post" onSubmit={handleSubmit}>

              <div className="inputgroup">
                <input type="email" name='email' id='email' placeholder='E-mail id'
                  value={email}

                  onChange={handleEmailChange} />
                {emailError && <div className="error"> {emailError}</div>}</div>


              <div className="inputgroup">
                <input type="password" name='password' id='password' placeholder='Password' value={password}

                  onChange={handlePasswordChange} />
                {passwordError && <div className="error" >{passwordError}</div>}
              </div>

              <div className="inputgroup">
                <div className="privacy-check"><input type="checkbox" checked={checkbox} onChange={handleCheckboxChange} /><label htmlFor="">By signing up . I agree to the terms of use and privacy policy of app</label></div>
                {termsError && <div className="error"> {termsError}</div>}

              </div>

              <Link to='' className='button' onClick={handleSubmit}>Sign In</Link>

            </form>
          </div>
        </div>
      </div>
    </div></>
  )
}

export default Merchantlogin