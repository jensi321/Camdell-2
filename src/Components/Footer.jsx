import React, { useState } from 'react'
import { Modal } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaLinkedin, FaSquareXTwitter } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { BaseUrl } from './BaseURL/BaseUrl';
import SubTermsCondition from './User/SubTermsCondition';

const Footer = () => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    validateEmail(e.target.value);
  };
  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid email address');
    } else {
      setEmailError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      email: email,
    };

    fetch(`${BaseUrl}/emaillead.php`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        alert("you are subscribe Successfully")
        // Handle the response data
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };


  return (
    <>
      <footer>
        <div className="footer-inner">


          <div className="top">
            <div className="top-inner row">
              <div className="col-12 col-sm-6 col-lg-3 logo-item item">
                <div className="item-inner">
                  <div className="footer-logo">
                    <img src="assets/Image/logo.png" alt="Footer-logo" />
                  </div>
                  <div className="app-icon">

                    <Link to="" target="_blank" className="market-btn market-btn-light apple-btn" role="button">
                      <span className="market-button-subtitle">Download on the</span>
                      <span className="market-button-title">App Store</span>
                    </Link>

                    <Link to="" target="_blank" className="market-btn google-btn" role="button">
                      <span className="market-button-subtitle">Download on the</span>
                      <span className="market-button-title">Google Play</span>
                    </Link>

                  </div>
                </div>
              </div>

              <div className="col-12 col-sm-6 col-lg-2 item">
                <div className="footer-heading">
                  <h4>Special Offers</h4>
                </div>
                <ul className='footer-menu'>
                  <li>
                    <Link to=''>Limited - Time Offers</Link>
                  </li>
                  <li>
                    <Link to=''>Exclusive Codes</Link>
                  </li>
                  <li>
                    <Link to=''>Seasonal</Link>
                  </li>
                  <li>
                    <Link to=''>Black Friday</Link>
                  </li>
                  <li>
                    <Link to=''>Cyber Monday</Link>
                  </li>
                  <li>
                    <Link to='/subscription'>Subscription</Link>
                  </li>
                  <li>
                    <Link to='/operatordesktop'>Operator</Link>
                  </li>
                </ul>
              </div>

              <div className="col-12 col-sm-6 col-lg-2 item">
                <div className="footer-heading">
                  <h4>Get to Know us</h4>
                </div>
                <ul className='footer-menu'>
                  <li>
                    <Link to='/aboutus'>About Us</Link>
                  </li>
                  <li>
                    <Link to='/partnerwithus'>Partner With Us</Link>
                  </li>
                  <li>
                    <Link to=''>Influencers Partnership</Link>
                  </li>
                  <li>
                    <Link to=''>Contact Us</Link>
                  </li>
                  <li>
                    <Link to=''>Press Room</Link>
                  </li>
                  <li>
                    <Link to=''>Careers</Link>
                  </li>
                  <li>
                    <Link to='/faq'>FAQs</Link>
                  </li>

                </ul>
              </div>

              <div className="col-12 col-sm-6 col-lg-2 item">
                <div className="footer-heading">
                  <h4>Legal</h4>
                </div>
                <ul className='footer-menu'>
                  <li>
                    <Link to=''>Privacy Policy</Link>
                  </li>
                  <li>
                    <Link to=''>Reward Terms</Link>
                  </li>
                  <li>
                    <Link onClick={() => setShow(true)}>Terms & Conditions</Link>
                  </li>
                  <li>
                    <Link to=''>Cookies Policy</Link>
                  </li>
                  <li>
                    <Link to=''>Modern Slavery Policy</Link>
                  </li>
                  <li>
                    <Link to='/shoper'>Cashier</Link>
                  </li>
                </ul>

              </div>
              <div className="col-12 col-sm-6 col-lg-3 item">
                <div className="footer-heading">
                  <h4>Follow Us</h4>
                </div>
                <div className="soical-icon-list">
                  <ul className="icons">
                    <li>
                      <Link to=''>
                        <FaFacebook />
                      </Link>
                    </li>
                    <li>
                      <Link to=''>
                        <FaInstagram />
                      </Link>
                    </li>
                    <li>
                      <Link to=''>
                        <FaSquareXTwitter />
                      </Link>
                    </li>
                    <li>
                      <Link to=''>
                        <FaLinkedin />
                      </Link>
                    </li>

                  </ul>

                </div>

                <div className="footer-heading">
                  <h4>Sign up for the latest deals</h4>
                </div>

                <form method='post'>
                  <div className="input-groups">
                    <input type="email" name="email" id="email" placeholder='Email Address' value={email} onChange={handleEmailChange} />
                    <button className='button' onClick={handleSubmit}>
                      Subscribe
                    </button>
                  </div>
                  {emailError && <div className='error'>{emailError}</div>}
                </form>
                <p>By subscription, I agree to the terms of use and have read the privacy statement</p>
              </div>

            </div>
          </div>

          <div className="bottom">
            <div className="bottom-inner">
              <p><b>From Dreams to Reality. </b> Copyright © 2024 Camdell Bharat Private Limited. All Rights Reserved.</p>
              <ul>
                <li>
                  <Link to={''}>India</Link>
                </li>
                <li>
                  <Link to={''}>English</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </footer >

      <Modal show={show} onHide={() => { setShow(false) }}>
        <SubTermsCondition />
      </Modal>
    </>
  )
}

export default Footer