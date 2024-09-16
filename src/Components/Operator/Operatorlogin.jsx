import React, { useState } from 'react'
import { FaX } from 'react-icons/fa6'
import { Link, useNavigate } from 'react-router-dom'
import { BaseUrl } from '../BaseURL/BaseUrl';

const Operatorlogin = ({ onClose }) => {

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkbox, setCheckbox] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [termsError, setTermsError] = useState('');


  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    validateEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    validatePassword(e.target.value);
  };


  const handleCheckboxChange = (e) => {
    setCheckbox(e.target.checked);
    if (e.target.checked) {
      setTermsError('');
    } else {
      setTermsError('Please agree to the terms of use and privacy policy');
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid email address');
    } else {
      setEmailError('');
    }
  };

  const validatePassword = (password) => {
    const passwordregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/;
    if (!passwordregex.test(password)) {
      setPasswordError('Minimum eight and maximum 10 characters, at least one uppercase letter, one lowercase letter, one number and one special character:');
    } else {
      setPasswordError('');
    }
  };

  const handleValueSubmit = () => {
    setEmail('')
    setPassword('')
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    validateEmail(email);
    validatePassword(password);
    if (emailError || passwordError) {
      return;
    }
    if (!checkbox) {
      setTermsError('Please agree to the terms of use and privacy policy');
      return;
    } else {
      const jsonData = {
        email: email,
        password: password
      };

      fetch(`${BaseUrl}/loginoperator.php`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(jsonData)
      })
        .then(response => response.json())
        .then(data => {
          if (data.success) {
            sessionStorage.setItem('operatorData', JSON.stringify(data));
            localStorage.setItem('email', email);
            localStorage.setItem('password', password);
            handleValueSubmit();
            navigate('/operatordesktop');
            onClose();
            alert('Operator login Successfully')
          } else {
            // Handle error response from API
            console.error(data.error);
          }
        })
        .catch(error => {
          console.error(error);
        });
    }
  }



  return (
    <>

      <div className="login-outer operator-login">
        <div className="login-inner row">
          <div className="col-12 col-sm-6 left">
            <div className="img-content">
              <img src="assets/Image/Merchant.png" alt="" />
            </div>
          </div>
          <div className="col-12 col-sm-6 right">
            <button onClick={onClose}><FaX /></button>
            <div className="inner">

              <div className="heading" style={{ textAlign: 'center' }}>
                <h3>Manager / Cashier Sign in
                </h3>
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
      </div>

    </>
  )
}

export default Operatorlogin