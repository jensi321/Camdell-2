import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { BaseUrl } from '../../BaseURL/BaseUrl';

const Subscribe = () => {

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
          setEmail('')
          alert('You are Subscribe Successfully')
          // Handle the response data
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    };
  
    return (
        <>
            <div className="subscribe-outer">
                <div className="container">
                    <div className="subscribe-inner row">
                        <div className="left col-12 col-lg-7">
                            <div className="text-content">
                                <div className="heading">
                                    <h3>Get The Latest & best coupons / offers alerts </h3>
                                </div>

                                <form method='post'>
                                    <input type="email" name="" id="" placeholder='E-mail id' value={email} onChange={handleEmailChange}/>
                                    {emailError && <div className="error">{emailError}</div> }
                                    <Link to={''} className='button' onClick={handleSubmit}>Subscribe</Link>
                                </form>
                            </div>


                        </div>
                        <div className="right col-12 col-lg-5">
                            <div className="img-content">
                                <img src='assets/Image/subscribe.png' alt="" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Subscribe