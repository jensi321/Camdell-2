import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ImageUrl } from '../BaseURL/BaseUrl';
import { ProfileContext } from '../Context/UserContext';

const DiscountCuponItems = (props) => {

    const { setCouponInfo } = useContext(ProfileContext);
    return (
        <>
            <div className="item ">
                <div className="item-inner">
                    <span className="offer-sale">
                        up to {props.value.discount_amount}% off
                    </span>
                    <div className="img-content">
                        <img src={`${ImageUrl}/${props.value.images}`} alt='' />
                    </div>
                    <div className="text-content">
                        <Link to='/cupondescription' onClick={() => { setCouponInfo(props.value) }} className='button'>Earn up to {props.value.discount_amount}% rewards</Link>
                        <Link to='' className='rewards'>Rewards Rates & terms</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DiscountCuponItems
