import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { BaseUrl } from '../../BaseURL/BaseUrl'
import ApprovalPandding from './ApprovalPandding'
import Merchantlogin from './Merchantlogin'


const ApplyMerchant = () => {
  const [firstName, setFirstName] = useState();
  const [firstNameError, setFirstNameError] = useState();
  const [lastName, setLastName] = useState();
  const [lastNameError, setLastNameError] = useState();
  const [contactNumber, setContactNumber] = useState();
  const [contactNumberError, setContactNumberError] = useState();
  const [email, setEmail] = useState();
  const [emailError, setEmailError] = useState();
  const [password, setPassword] = useState();
  const [passwordError, setPasswordError] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [confirmPasswordError, setConfirmPasswordError] = useState();

  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);


  const handlefirstname = (e) => {
    const inputValue = e.target.value;
    const onlycharacter = inputValue.replace(/[^a-zA-Z\s]/g, '');
    setFirstName(onlycharacter);
    validFirstName(onlycharacter);
  }
  const validFirstName = (firstName) => {
    const nameregex = /^[a-zA-Z\s]{3,50}$/;
    if (!nameregex.test(firstName)) {
      setFirstNameError('Please Enter Valid Name')
    }
    else {
      setFirstNameError('')
    }
  }

  const handleLastname = (e) => {
    const inputValue = e.target.value;
    const onlycharacter = inputValue.replace(/[^a-zA-Z\s]/g, '');
    setLastName(onlycharacter);
    validLastName(onlycharacter);
  }
  const validLastName = (firstName) => {
    const nameregex = /^[a-zA-Z\s]{3,50}$/;
    if (!nameregex.test(firstName)) {
      setLastNameError('Please Enter Valid Name')
    }
    else {
      setLastNameError('')
    }
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    validateEmail(e.target.value);
  };
  const validateEmail = (email) => {
    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid email address');
    } else {
      setEmailError('');
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    validatePassword(e.target.value);
  };
  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
    validateConfirmPassword(e.target.value);
  }

  const validatePassword = (password) => {
    const passwordregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;
    if (!passwordregex.test(password)) {
      setPasswordError('Minimum 8 characters, at least one uppercase letter, one lowercase letter, one number and one special character:');
    } else {
      setPasswordError('');
    }
  };
  const validateConfirmPassword = (confirmPassword) => {
    if (password !== confirmPassword) {
      setConfirmPasswordError('Confirm password does not match password');
    } else {
      setConfirmPasswordError('');
    }

  };


  const handleMerchantLogin = () => {
    setModalContent(<Merchantlogin onClose={handleClose} />);
    setShowModal(true);
  };

  const approvelpanding = () => {
    setModalContent(<ApprovalPandding onClick={handleMerchantLogin} onClose={handleClose} />)
    setShowModal(true)
  }

  const handleClose = () => setShowModal(false);

  const handleContactChange = (e) => {
    const inputValue = e.target.value.replace(/[^0-9]/g, ''); // remove non-numeric characters
    setContactNumber(inputValue);
    console.log(inputValue);
    validateContact(inputValue);
  };
  
  const validateContact = (contactNumber) => {
    const mobileRegex = /^\d{10}$/; // allow for any 10-digit mobile number
    if (!mobileRegex.test(contactNumber)) {
      setContactNumberError('Please Enter Valid Mobile Number');
    } else {
      setContactNumberError('');
    }
  };
  
  const handleSubmit = async () => {
    if (firstNameError || lastNameError || contactNumberError || emailError || passwordError || confirmPasswordError) {
      return;
    } else {
      const formData = {
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: password,
        contact_number: contactNumber.replace(/[^0-9]/g, ''), // remove non-numeric characters
      };
  
      console.log(formData);
  
      fetch(`${BaseUrl}/applyformerchant.php`, {
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
            console.log("response :" , data.data.contact_number) ;
            if (data.data.email) {
              setEmailError(data.data.email);
            }
            if (data.data.password) {
              setPasswordError(data.data.password);
            }
            if (data.data.contact_number) {
              setContactNumberError(data.data.contact_number);
            }
          } else {
            alert("Merchant Apply Successfuuly")
            approvelpanding(); // Show "Approval Pending" modal
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };
  return (
    <>
      <div className="apply-merchant">
        <div className="container">
          <div className="apply-inner">
            <div className="heading">
              <h3>Apply of Merchants</h3>
            </div>
            <form>
              <div className="row">
                <div className="col-12 col-md-6">
                  <div className="input-group">
                    <label htmlFor="">First  name</label>
                    <input type="text" name='fname' id='fname' placeholder='Enter first name' value={firstName} onChange={handlefirstname} />
                    {firstNameError && <div className="error">{firstNameError}</div>}
                  </div>
                </div>
                <div className=" col-12 col-md-6">
                  <div className="input-group">
                    <label htmlFor="">Last  name</label>
                    <input type="text" name='lname' id='lname' placeholder='Enter last name' value={lastName} onChange={handleLastname} />
                    {lastNameError && <div className="error">{lastNameError}</div>}

                  </div>
                </div>
                <div className=" col-12 col-md-6">
                  <div className="input-group">
                    <label htmlFor="">Contact number</label>
                    <input type="tel" name='contactNumber' id='contactNumber' placeholder='Enter your number' value={contactNumber} onChange={handleContactChange} minLength={10} maxLength={10} />
                    {contactNumberError && <div className="error">{contactNumberError}</div>}
                  </div>
                </div>
                <div className=" col-12 col-md-6">
                  <div className="input-group">
                    <label htmlFor="">E-Mail ID</label>
                    <input type="email" name='email' id='email' placeholder='Enter E- mail ID' value={email} onChange={handleEmailChange} />
                    {emailError && <div className="error">{emailError}</div>}
                  </div>
                </div>
                <div className=" col-12 col-md-6">
                  <div className="input-group">
                    <label htmlFor="">password</label>
                    <input type="password" name='password' id='password' placeholder='Enter your password' value={password} onChange={handlePasswordChange} />
                    {passwordError && <div className="error">{passwordError}</div>}
                  </div>
                </div>
                <div className=" col-12 col-md-6">
                  <div className="input-group">
                    <label htmlFor="">Confirm password</label>
                    <input type="password" name='cpassword' id='cpssword' placeholder='Enter confirm password' value={confirmPassword} onChange={handleConfirmPassword} />
                    {confirmPasswordError && <div className="error">{confirmPasswordError}</div>}
                  </div>
                </div>
                <div className="col-12">
                  <div className="signup-button">
                    <Link to='' onClick={handleSubmit}>Apply now</Link>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Modal show={showModal} onHide={handleClose}>
        {modalContent}
      </Modal>


    </>
  )
}

export default ApplyMerchant
