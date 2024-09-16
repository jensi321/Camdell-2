import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { BaseUrl, ImageUrl } from '../BaseURL/BaseUrl';
import { ProfileContext } from '../Context/UserContext';

const Allcupon = ({ subcategoryId, category }) => {
 

    const [coupons, setCoupons] = useState([]);
    const { userId,setCouponInfo } = useContext(ProfileContext);


    useEffect(() => {


        const formdata = {
            user_id: userId,
            category: category,
            subcategory: subcategoryId,
        }

        console.log(formdata)
        const fetchCoupons = async () => {
            try {
                const response = await axios.post(`${BaseUrl}/getcouponcode.php`, formdata);
                setCoupons(response.data.data);
                console.log(response.data.data)
            } catch (error) {
                console.error(error);
            }
        };
        fetchCoupons();
    }, [category, subcategoryId, userId]);
    return (
        <>
          <div className="cupon-outer">
            <div className="container">
              <div className="cupon-inner row">
                {Array.isArray(coupons) && coupons.length > 0 ? (
                  coupons.map((i) => {
                    return (
                      <>
                        <div className="item">
                          <div className="item-inner">
                            <div className="img-content">
                              <img src={`${ImageUrl}/${i.images}`} alt='' />
                            </div>
      
                            <div className="text-content">
                              <p>Up to {i.discount_amount}% off + Extra 5% offer on EMI</p>
                              <div className="cupon-button">
                                <Link to='/cupondescription' onClick={() =>{setCouponInfo(i)}} className='cupon-code-button'><span className='cupon'>get Coupons</span><span className='code'>2511545614</span></Link>
      
                              </div>
                            </div>
      
                          </div>
      
                        </div>
                      </>
                    );
                  })
                ) : (
                  <div className="no-coupons-message">
                    <b>No coupons available for this category.</b>
                  </div>
                )}
              </div>
            </div>
          </div>
        </>
      );
}

export default Allcupon