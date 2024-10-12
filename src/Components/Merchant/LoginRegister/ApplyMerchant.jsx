import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ApprovalPandding from './ApprovalPandding'
import Merchantlogin from './Merchantlogin'


const ApplyMerchant = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const [shopName, setShopName] = useState('');
  const [shopError, setShopError] = useState('');

  const [registrationNumber, setRegistrationNumber] = useState('');
  const [registrationNumberError, setRegistrationNumberError] = useState('');

  const [owner, setOwner] = useState('');
  const [ownerError, setOwnerError] = useState('');

  const [address, setAddress] = useState('');
  const [addressError, setAddressError] = useState('');

  const [websiteLink, setWebsiteLink] = useState('');
  const [websiteLinkError, setWebsiteLinkError] = useState('');

  const [treandingYear, setTreandingYear] = useState('');
  const [treandingYearError, setTreandingYearError] = useState('')

  const handleClose = () => setShowModal(false);
  const handleMerchantLogin = () => {
    setModalContent(<Merchantlogin onClose={handleClose} />);
    setShowModal(true);
  };

  const approvelpanding = () => {
    setModalContent(<ApprovalPandding onClick={handleMerchantLogin} onClose={handleClose} />)
    setShowModal(true)
  }

  const handleShopName = (e) => {
    const inputValue = e.target.value;
    setShopName(inputValue);
    validShopName(inputValue);
  };
  const validShopName = (shopName) => {
    if (shopName === '') {
      setShopError('Please Enter Shop Name');
    } else {
      setShopError('');
    }
  };

  const handleRegistrationNumberChange = (e) => {
    const inputValue = e.target.value;
    const onlyNumbers = inputValue.replace(/[^0-9]/g, '');
    setRegistrationNumber(onlyNumbers);
    validateRegistrationNumber(onlyNumbers);
  }
  const validateRegistrationNumber = (registrationNumber) => {
    const regex = /^[0-9]{3,20}$/; // adjust the regex to match your requirements
    if (!regex.test(registrationNumber)) {
      setRegistrationNumberError('Please enter a valid registration number');
    } else {
      setRegistrationNumberError('');
    }
  }

  const handleOwnerNAme = (e) => {
    const inputValue = e.target.value;
    setOwner(inputValue);
    validOwnerName(inputValue);
  };
  const validOwnerName = (name) => {
    if (name === '') {
      setOwnerError('Please Enter Owner Name');
    } else {
      setOwnerError('');
    }
  };


  const handleAddressChange = (e) => {
    const inputValue = e.target.value;
    setAddress(inputValue);
    validAddress(inputValue);
  }
  const validAddress = (address) => {
    if (!address.trim()) {
      setAddressError('Please enter Address');
    } else {
      setAddressError('');
    }
  }

  const handleWebsiteLinkChange = (e) => {
    const inputValue = e.target.value;
    setWebsiteLink(inputValue);
    validateWebsiteLink(inputValue);
  }
  const validateWebsiteLink = (websiteLink) => {
    const regex = /^(https?|ftp|file):\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]*[-A-Za-z0-9+&@#/%=~_|]$/; // adjust the regex to match your requirements
    if (!regex.test(websiteLink)) {
      setWebsiteLinkError('Please enter a valid website link');
    } else {
      setWebsiteLinkError('');
    }
  }

  const handletreandingYear = (e) => {
    const inputValue = e.target.value;
    const onlyNumbers = inputValue.replace(/[^0-9]/g, '');
    setTreandingYear(onlyNumbers);
    validtrandingYear(onlyNumbers);
  }
  const validtrandingYear = (year) => {
    const regex = /^[0-9]{1,4}$/; // adjust the regex to match your requirements
    if (!regex.test(year)) {
      setTreandingYearError('Please enter a valid number of years');
    } else {
      setTreandingYearError('');
    }
  }


  const handleSubmit = async () => {
    alert("Merchant Apply Successfuuly")
    approvelpanding();
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
                    <label htmlFor="">Shop  name</label>
                    <input type="text" name='' id='' placeholder='Enter Shop name' value={shopName} onChange={handleShopName} />
                    {shopError && <div className="error">{shopError}</div>}
                  </div>
                </div>
                <div className=" col-12 col-md-6">
                  <div className="inputgroup">
                    <label htmlFor="">Registration number</label>
                    <input type="text" id='registrationnumber' name='registrationnumber' placeholder='Registration number' value={registrationNumber} onChange={handleRegistrationNumberChange} />
                    {registrationNumberError && <div className="error">{registrationNumberError}</div>}
                  </div>
                </div>

                <div className=" col-12 col-md-6">
                  <div className="input-group">
                    <label htmlFor="">Owner Name</label>
                    <input type="text" name='' id='' placeholder='Enter Owner Name' onChange={handleOwnerNAme} value={owner} />
                    {ownerError && <div className="error">{ownerError}</div>}
                  </div>
                </div>
                <div className=" col-12 col-md-6">
                  <div className="input-group">
                    <label htmlFor="">Address</label>
                    <input type="text" name='' id='' placeholder='Enter Address' onChange={handleAddressChange} value={address} />
                    {addressError && <div className="error">{addressError}</div>}
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="inputgroup">
                    <label htmlFor="">Website link</label>
                    <input type="text" name='wesite' id='website' placeholder='enter website link' value={websiteLink} onChange={handleWebsiteLinkChange} />
                    {websiteLinkError && <div className="error">{websiteLinkError}</div>}
                  </div>
                </div>
                <div className=" col-12 col-md-6">
                  <div className="input-group">
                    <label htmlFor="">Treanding Year</label>
                    <input type="text" name='' id='' placeholder="Enter Treanding Year" onChange={handletreandingYear} value={treandingYear} />
                    {treandingYearError && <div className="error">{treandingYearError}</div>}
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
