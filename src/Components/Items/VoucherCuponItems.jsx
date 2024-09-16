import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ImageUrl } from '../BaseURL/BaseUrl';
import { ProfileContext } from '../Context/UserContext';

const VoucherCuponItems = (props) => {

    const {  setCouponInfo } = useContext(ProfileContext);

    return (
        <>
            <div className="item col-md-4 col-xl-3 col-12 col-sm-6">
                <div className="item-inner">
                    <div className="text-content">
                        <h3>{props.value.business_name}</h3>
                        {props.value.cupon_type}
                        <span >Rs ( {props.value.maximum_amount} - {props.value.minimum_amount} )</span>
                        <p className='cashback' >Get Rs {props.value.discount_amount} Cashback</p>
                        <p className="link-button">
                            <Link to={'/cupondescription'} onClick={() => { setCouponInfo(props.value) }} className='button'>Get Now</Link>
                        </p>
                    </div>
                    <div className="img-content">
                        <img src={`${ImageUrl}/${props.value.images}`} alt={''} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default VoucherCuponItems
