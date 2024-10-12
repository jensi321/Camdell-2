import React, { useContext, useState } from 'react';
import { FaX } from 'react-icons/fa6';
import { Link, useNavigate } from 'react-router-dom';
import { BaseUrl } from '../BaseURL/BaseUrl';
import { ProfileContext } from '../Context/UserContext';

const Login = ({ onClose, onOpenMemberSignUp, onLoginSuccess, onOpenReferralId }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [checkbox, setCheckbox] = useState(false);
  const [termsError, setTermsError] = useState('');


  const { setProfileImage, setLocation, setLoyaltyPoint, setEndDate, setWallet,setUserId } = useContext(ProfileContext);


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

   

    fetch(`${BaseUrl}/login.php`, {
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
          console.log("Login USer Data:",data.data[0])
          setProfileImage(data.data[0].profile_image);
          setLocation(data.data[0].location);
          setLoyaltyPoint(data.data[0].loyalty_point);
          setEndDate(data.data[0].end_date);
          setWallet(data.data[0].wallet);
          setUserId(data.data[0].id)
          handleValueSubmit()
          onClose();
          // if (data.data[0].referral_id === null) {
          //   onOpenReferralId(data.data[0].id); // Pass the userId to onOpenReferralId
          // } else {
            sessionStorage.setItem('token', JSON.stringify(data.data[0]));
            navigate('/',{ replace: true });
            onLoginSuccess();
            console.log('User LogIn Succesfully')
            alert('You are Login Succesfully')
          // }
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
    <>
      <div className="login-outer member-login">
        <div className="login-inner row">
          <div className="col-12 col-sm-6 left">
            <div className="img-content">
              <img src="assets/Image/Discount.png" alt="" />
              <img src="assets/Image/voucher.png" alt="" />
            </div>
          </div>
          <div className="col-12 col-sm-6 right">
            <button onClick={onClose}><FaX /></button>
            <div className="inner">
              <div className="heading">
                <h3>Sign in</h3>
              </div>
              <form method="post" onSubmit={handleSubmit}>
                <div className="inputgroup">
                  <input type="email" name="email" id="email" placeholder="E-mail id" value={email} onChange={handleEmailChange} />
                  {emailError && <div className="error">{emailError}</div> }
                </div>
                <div className="inputgroup">
                  <input type="password" name="password" id="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
                  {passwordError && <div className="error">{passwordError}</div> }

                </div>
                <div className="inputgroup">
                  <div className="privacy-check">
                    <input type="checkbox" checked={checkbox} onChange={handleCheckboxChange} />
                    <label htmlFor="">By signing In, I agree to the terms of use and privacy policy of app</label>
                  </div>
                  {termsError && <div className="error">{termsError}</div>}
                </div>
                <Link to="" className="button" onClick={handleSubmit}>Sign In</Link>
                <div className="sign-up">Create New Account ? <Link to="" onClick={() => onOpenMemberSignUp()}>Sign Up</Link></div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;