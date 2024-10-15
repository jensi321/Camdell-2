import React, {  useEffect, useState } from 'react'
import { DropdownButton, DropdownItem } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { BaseUrl, ImageUrl } from '../../../BaseURL/BaseUrl'

const NewSubscription = () => {
 
    const [items, setItems] = useState([])
    const token= JSON.parse(sessionStorage.getItem('token'));
    const userId = (token.id)
    console.log(userId);
    useEffect(() => {
        const formData = {
            user_id: userId
        }

        console.log(formData)
        fetch(`${BaseUrl}/getexpense.php`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                  },
                body: JSON.stringify(formData)
            })

            .then(response => response.json())

            .then(data => {

                setItems(data.data.purchased);
                console.log(data.data.purchased);

            })

            .catch(error => {

                console.error('API error:', error);

            });

    }, [userId]);
    return (
        <>
            <div className="new-subscription">
                <div className="heading">
                    <h3>New</h3>
                    <DropdownButton id="dropdown-basic-button" className="list-view" title="List View">
                        <DropdownItem as={Link} to='' >User</DropdownItem>
                        <DropdownItem as={Link} to='' >Merchant</DropdownItem>
                    </DropdownButton>

                </div>

                <div className="row">
                    {
                       items && items.map((i) => {
                            const endDate = new Date(i.end_date);

                            const now = new Date();
                        
                            if (now < endDate) {
                            return (
                                <div className="subcription-item col-xl-4 col-md-6  col-12">
                                    <div className="item-inner">
                                        <div className="img-content">
                                            <img src={`${ImageUrl}/${i.icon}`} alt="" />
                                        </div>
                                        <div className="text-content">
                                            <h3>{i.plan_name} Subscription plan</h3>
                                            <div className="date-info">
                                                <p className='start-date'>Start On : {i.startdate}</p>
                                                <p className='end-date'>End On : {i.end_date}</p>
                                            </div>
                                            <div className="cupon-limit">
                                                Coupon limited  : {i.cuponlimit} Coupons
                                            </div>
                                            <div className="wallet">
                                                <div className="usedwallet">Used Wallet  : Rs {i.used_wallet_amount}</div>
                                                <p><span className='ruppes-icon'>₹ </span>{i.plan_price}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            else{
                                return null
                            }
                        })
                    }
                </div>


            </div></>
    )
}

export default NewSubscription