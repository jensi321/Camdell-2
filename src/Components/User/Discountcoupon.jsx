import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { ProfileContext } from '../Context/UserContext';
import DiscountCuponItems from '../Items/DiscountCuponItems';
import { BaseUrl } from '../BaseURL/BaseUrl';

const Discountcoupon = () => {
    const [items, setItems] = useState([]);
    const { userId } = useContext(ProfileContext);

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
            <div className="cupon-offer-outer">
                <div className="container">
                    <div className="cupon-offer-inner row">
                        {items && Array.isArray(items) && items.map((i,index) => {
                            if (i.coupon_type === 'discount') { // Add this condition
                                return (
                                    <>
                                        <DiscountCuponItems key={index} value={i}/>
                                    </>
                                );
                            } else {
                                return null; // or you can return a different component for other coupon types
                            }
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Discountcoupon;