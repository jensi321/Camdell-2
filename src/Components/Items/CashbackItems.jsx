import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ImageUrl } from '../BaseURL/BaseUrl';
import { ProfileContext } from '../Context/UserContext';

const CashbackItems = (props) => {
    const { setCouponInfo } = useContext(ProfileContext);

  return (
    <>
      <div className="item">
                            <div className="item-inner">
                              <div className="img-content">
                                <img src={`${ImageUrl}/${props.value.images}`} alt='' />
                              </div>

                              <div className="text-content">
                                <p>Up to {props.value.discount_amount}% off + Extra 5% offer on EMI</p>
                                <div className="cupon-button">
                                  <Link to='/cupondescription' onClick={() => { setCouponInfo(props.value) }} className='cupon-code-button'><span className='cupon'>get Coupons</span><span className='code'>2511545614</span></Link>

                                </div>
                              </div>

                            </div>

                          </div>
    </>
  )
}

export default CashbackItems
