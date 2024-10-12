import React, {  useState } from 'react'
import { Link } from 'react-router-dom'
import { BaseUrl } from '../../BaseURL/BaseUrl';

const CuponCodeEnter = ({ onOpenUserCupon }) => {

    const [couponCode, setCouponCode] = useState('');

    const handleCouponCodeChange = (e) => {

        setCouponCode(e.target.value);
    
      };

      const token = sessionStorage.getItem('token');
      console.log(token)
      const userId = token.id


  const handleSubmit = async (event) => {
    event.preventDefault();
    try {

        const formData = {
            user_id : userId,
            code :couponCode
        }

        console.log(formData)
      const response = await fetch( `${BaseUrl}/couponsubmit.php`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: (formData),
      });
      const data = await response.json();
      if(data.success){
        console.log(data);
      // Handle the response data
      onOpenUserCupon();
      }
      else {
        console.log(data)
      }
      
    } catch (error) {
      console.error(error);
    }

  };

    return (
        <>
            <div className="enter-cupon-code">
                <div className="cupon-code-info">
                    <div className="heading"><h3>Enter coupon code</h3></div>
                    <input type="text" placeholder='Enter coupon code'  value={couponCode} onChange={handleCouponCodeChange}/>
                </div>

                <div className="submit-button">
                    <Link className="button" onClick={handleSubmit}>Submit</Link>
                </div>
            </div>
        </>
    )
}

export default CuponCodeEnter
