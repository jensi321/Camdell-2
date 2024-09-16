import React, { useState } from 'react'
import { FaX } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { BaseUrl } from '../BaseURL/BaseUrl';

const ReferralId = ({ onClose, onOpenMemberLogin , userId}) => {
  const [refId, setRefId] = useState('');
  const [refIdError, setRefIdError] = useState('');

  const handleChange = (e) => {
    const inputValue = e.target.value;
    setRefId(inputValue);
    validateRefId(inputValue);
  };


  const validateRefId = (refId) => {
    const refIdRegex = /^[a-zA-Z0-9]{1,}$/; // assuming 3-50 characters
    if (!refIdRegex.test(refId)) {
      setRefIdError('Please enter a valid Referral ID');
    } else {
      setRefIdError('');
    }
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    console.log(userId)

    if (!refIdError) {

      try {

        const formData = {
          user_id: userId,
          referral_id: refId,
        };

        const response = await fetch(`${BaseUrl}/addreferal.php`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify(formData),
        });


        const data = await response.json();

        if (data.success) {
          onOpenMemberLogin();
          alert("your referral Id Add Successfully")
        } else {
          setRefIdError(data.data.error);
        }
      } catch (error) {
        console.error(error);
      }

    } else {
      console.log('Please enter a valid Referral ID');
    }

  };

  return (
    <>
      <div className="login-outer referral-modal-outer">
        <div className="login-inner row">
          <div className="col-12 col-sm-6 left">
            <div className="img-content">
              <img src="assets/Image/refferalId.png" alt="" />

            </div>
          </div>
          <div className="col-12 col-sm-6 right">
            <button onClick={onClose}><FaX /></button>
            <div className="inner">
              <div className="heading">
                <h3>Referral ID</h3>
                <p>Did you have referral id enter here you will get offers for this app</p>
              </div>
              <form method="post">
                <div className="inputgroup">
                  <input type="refid" name="refid" id="refid" placeholder="Enter Referral ID " value={refId} onChange={handleChange}/>
                  {refIdError && <div className="error">{refIdError}</div>}
                </div>

                <Link to="" className="button" onClick={handleSubmit}>Submit</Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ReferralId
