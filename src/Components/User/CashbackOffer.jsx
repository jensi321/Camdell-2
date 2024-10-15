import axios from 'axios';
import React, {  useEffect, useState } from 'react'
import { BaseUrl } from '../BaseURL/BaseUrl';
import CashbackItems from '../Items/CashbackItems';

const CashbackOffer = () => {
    const [items, setItems] = useState([]);
    const token= JSON.parse(sessionStorage.getItem('token'));
    const userId = (token.id)
    console.log(userId);
  
    useEffect(() => {


        const formdata = {
            user_id: userId
        }

        console.log(formdata)
        const fetchCoupons = async () => {
            try {
                const response = await axios.post(`${BaseUrl}/getcouponcode.php`, formdata);
                setItems(response.data.data);
                console.log(response.data.data)
            } catch (error) {
                console.error(error);
            }
        };
        fetchCoupons();
    }, [userId]);

    return (
        <>
            <div className="cashback-store cashbackoffer-outer">
                <div className="container">
                    <div className="cashback-store-inner">
                        <div className="row cashback">
                            {items && Array.isArray(items) && items.map((i,index) => {
                                if (i.coupon_type === 'cashback') { // Add this condition

                                    return (

                                      <CashbackItems key={index} value={i}/>
                                
                                    )
                                } else {
                                    return null; // or you can return a different component for other coupon types
                                }

                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CashbackOffer