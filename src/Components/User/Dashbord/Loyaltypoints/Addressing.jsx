import React, {  useState } from 'react'
import { BaseUrl } from '../../../BaseURL/BaseUrl'

const Addressing = (props) => {
  const [name, setname] = useState()
  const [nameError, setNameError] = useState()
  const [mobile, setMobile] = useState()
  const [mobileError, setMobileError] = useState()
  const [address, setAddress] = useState()
  const [addressError, setAddressError] = useState()
  const [landmark, setLandMark] = useState()
  const [landmarkError, setLandMarkError] = useState()
  const [pincode, setPinCode] = useState()
  const [pincodeError, setPinCodeError] = useState()
  const [isChecked, setIsChecked] = useState(false)
  const [checkboxError, setCheckboxError] = useState()

  const handleName = (e) => {
    const inputValue = e.target.value;
    const onlycharacter = inputValue.replace(/[^a-zA-Z\s]/g, '');
    setname(onlycharacter);
    validName(onlycharacter);
  }
  const validName = (name) => {
    const nameregex = /^[a-zA-Z\s]{3,50}$/;
    if (!nameregex.test(name)) {
      setNameError('Please Enter Valid Name')
    }
    else {
      setNameError('')
    }
  }

  const handleMobileChange = (e) => {
    const inputValue = e.target.value;
    const onlyNumbers = inputValue.replace(/[^0-9]/, '');
    setMobile(onlyNumbers);
    validateMobile(onlyNumbers);
  };
  const validateMobile = (mobile) => {
    const mobileRegex = /^[789]\d{9}$/; // assuming 10-digit mobile number
    if (!mobileRegex.test(mobile)) {
      setMobileError('Please Enter Valid Mobile Number');
    } else {
      setMobileError('');
    }
  };

  const handleAddress = (e) => {
    const addressvalue = e.target.value;
    setAddress(addressvalue);
    validAddress(addressvalue)
  }
  const validAddress = (address) => {
    const addreregx = /^[\w\s,.-]{3,200}$/s;

    if (!addreregx.test(address)) {
      setAddressError('Location is Required');
    } else {
      setAddressError('');
    }
  }

  const handleLandmark = (e) => {
    const landmarkValue = e.target.value;
    setLandMark(landmarkValue);
    validateLandmark(landmarkValue);
  }
  const validateLandmark = (landmark) => {
    const landmarkRegex = /^[a-zA-Z\s,.-]{3,50}$/; // assuming 3-50 characters
    if (!landmarkRegex.test(landmark)) {
      setLandMarkError('Please Enter Valid Landmark');
    } else {
      setLandMarkError('');
    }
  }

  const handlePinCode = (e) => {
    const pinCodeValue = e.target.value;
    const onlyNumbers = pinCodeValue.replace(/[^0-9]/, '');
    setPinCode(onlyNumbers);
    validatePinCode(onlyNumbers);
  }

  const validatePinCode = (pinCode) => {
    const pinCodeRegex = /^[0-9]{6}$/; // assuming 6-digit pin code
    if (!pinCodeRegex.test(pinCode)) {
      setPinCodeError('Please Enter Valid Pin Code');
    } else {
      setPinCodeError('');
    }

  }


  const handleChecked = (e) => {
    setIsChecked(e.target.checked);
    if (!e.target.checked) {
      setCheckboxError('Please check the checkbox');
    } else {
      setCheckboxError('');
    }
  }

  const token= JSON.parse(sessionStorage.getItem('token'));
    const userId = (token.id)
    console.log(userId);
    
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!nameError && !mobileError && !addressError && !landmarkError && !pincodeError) {
      if (!isChecked) {
        setCheckboxError('Please check the checkbox');
      } else {
        try {
          console.log('User ID:', userId);

          const formdata = {
            user_id: userId,
            name: name,
            mobile_number: mobile,
            address: address,
            land_mark: landmark,
            pincode: pincode,
          }

          const response = await fetch(`${BaseUrl}/addaddress.php`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
            },
            body: JSON.stringify(formdata),
          });

          const data = await response.json();
          console.log(data);
          props.setShowOrderList()
          alert("Your Address add successfully")
          // Handle success response
        } catch (error) {
          console.error(error);
          // Handle error response
        }
      }
    } else {
      console.log('Please fill in all the fields correctly');
    }
  }



  return (
    <>
      <div className="addressing-outer">
        <div className="container">
          <div className="addressing-inner">
            <div className="heading">
              <h3>Address Details</h3>
            </div>

            <form onSubmit={handleSubmit}>

              <div className="row">
                <div className="col-12 col-sm-6">
                  <div className="input-group">
                    <label htmlFor="">
                      Name
                    </label>
                    <input type="text" placeholder='Enter Name' value={name} onChange={handleName} />
                    {nameError && <div className="error">{nameError}</div>}
                  </div>
                </div>
                <div className="col-12 col-sm-6">
                  <div className="input-group">
                    <label htmlFor="">
                      Mobile number
                    </label>
                    <input type="tel" minLength={10}
                      maxLength={10} placeholder='Enter Mobile Number' value={mobile} onChange={handleMobileChange} />
                    {
                      mobileError && <div className="error">{mobileError}</div>
                    }
                  </div>
                </div>
                <div className="col-12">
                  <div className="input-group">
                    <label htmlFor="">
                      Address
                    </label>
                    <textarea name="" id="" placeholder='Enter Address' value={address} onChange={handleAddress}></textarea>
                    {addressError && <div className="error">{addressError}</div>}
                  </div>
                </div>

                <div className="col-12 col-sm-6">
                  <div className="input-group">
                    <label htmlFor="">
                      Landmark
                    </label>
                    <input type="text" placeholder='Enter Near Landmark' value={landmark} onChange={handleLandmark} />
                    {landmarkError && <div className="error">{landmarkError}</div>}
                  </div>
                </div>
                <div className="col-12 col-sm-6">
                  <div className="input-group">
                    <label htmlFor="">
                      Pin code
                    </label>
                    <input type="text" placeholder='Enter Pin Code' value={pincode} minLength={6} maxLength={6} onChange={handlePinCode} />
                    {pincodeError && <div className="error">{pincodeError}</div>}
                  </div>
                </div>
              </div>

              <div className="input-group">
                <div className="check-group">
                  <input type="checkbox" name="" id="" value={isChecked} onChange={handleChecked} />
                  <label htmlFor="">Once submit the order they did not have order cancelation option </label>
                </div>
                {checkboxError && <div className="error">{checkboxError}</div>}
              </div>



              <div className="input-button">
                <button type='submit' className="button" >Submit</button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Addressing