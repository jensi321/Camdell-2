import axios from "axios";
import React, {  useEffect, useState } from "react";
import { BaseUrl } from "../../BaseURL/BaseUrl";
import DiscountCuponItems from "../../Items/DiscountCuponItems";

const CuponOfferWishList = () => {
  

    const [cuponoffer, setcuponoffer] = useState([]);

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

                const data = response.data.data;

                if (Array.isArray(data)) {

                    setcuponoffer(data);

                } else {

                    console.error("API response is not an array");

                }

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
                    <div className="cupon-offer-inner">


                        <div className="heading">
                            <h3>Coupons & Offers</h3>
                        </div>

                        <div className="cupon-offer row">

                            {cuponoffer.filter(coupon => coupon.coupon_type === "discount" && coupon.is_liked === 1).length > 0 ? (
                                cuponoffer.filter(coupon => coupon.coupon_type === "discount" && coupon.is_liked === 1).map((coupon, index) => (
                                    <DiscountCuponItems key={index} value={coupon} />
                                ))
                            ) : (
                                <div className="no-coupons-message">
                                    <b>Your cashback offer wishlist is blank</b>
                                </div>
                            )}

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CuponOfferWishList