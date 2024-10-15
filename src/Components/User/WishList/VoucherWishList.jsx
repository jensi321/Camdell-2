import axios from "axios";
import React, {  useEffect, useState } from "react";
import { BaseUrl } from "../../BaseURL/BaseUrl";
import VoucherCuponItems from "../../Items/VoucherCuponItems";

const VoucherWishList = () => {
    // const voucher = [
    //     {
    //         img: "assets/Image/dominoz.png",
    //         name: "MC Dominos",
    //         rs: '5,000 - 6,000 ',
    //         cashback: 'Get Rs 100 Cashback',
    //         bgimg: "#A9D5B2",
    //     },
    //     {
    //         img: "assets/Image/swiggy.png",
    //         name: "Swiggy",
    //         rs: ' 5,000 - 6,000',
    //         cashback: 'Get Rs 500 Cashback',
    //         bgimg: '#002408',
    //     },
    //     {
    //         img: "assets/Image/dominoz.png",
    //         name: "MC Dominos",
    //         rs: '5,000 - 6,000 ',
    //         cashback: 'Get Rs 100 Cashback',
    //         bgimg: "#A9D5B2",
    //     },
    //     {
    //         img: "assets/Image/swiggy.png",
    //         name: "Swiggy",
    //         rs: ' 5,000 - 6,000',
    //         cashback: 'Get Rs 500 Cashback',
    //         bgimg: '#002408',
    //     },
    //     {
    //         img: "assets/Image/dominoz.png",
    //         name: "MC Dominos",
    //         rs: '5,000 - 6,000 ',
    //         cashback: 'Get Rs 100 Cashback',
    //         bgimg: "#A9D5B2",
    //     },
    //     {
    //         img: "assets/Image/swiggy.png",
    //         name: "Swiggy",
    //         rs: ' 5,000 - 6,000',
    //         cashback: 'Get Rs 500 Cashback',
    //         bgimg: '#002408',
    //     },
    //     {
    //         img: "assets/Image/dominoz.png",
    //         name: "MC Dominos",
    //         rs: '5,000 - 6,000 ',
    //         cashback: 'Get Rs 100 Cashback',
    //         bgimg: "#A9D5B2",
    //     },
    //     {
    //         img: "assets/Image/swiggy.png",
    //         name: "Swiggy",
    //         rs: ' 5,000 - 6,000',
    //         cashback: 'Get Rs 500 Cashback',
    //         bgimg: '#002408',
    //     },

    // ]

    const [voucher, setVoucher] = useState([]);

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
        
                    console.log('Data received from API:', data);
        
                    if (Array.isArray(data)) {
                        setVoucher(data);
                        console.log('State updated:', voucher);
                    } else {
                        console.error("API response is not an array");
                    }
                } catch (error) {
                    console.error(error);
                }
            };
            fetchCoupons();
        });


    return (
        <>
            <div className="vouchercupon-outer voucher-outer">
                <div className="container">
                    <div className="vouchercupon-inner">
                        <div className="heading">
                            <h3>Vouchers coupons</h3>
                        </div>
                        <div className="row">

                            {voucher.filter(coupon => coupon.coupon_type === 'Voucher' && coupon.is_liked === 1).length > 0 ? (
                                voucher.filter(coupon => coupon.coupon_type === 'Voucher' && coupon.is_liked === 1).map((coupon, index) => (
                                    <VoucherCuponItems key={index} value={coupon} />
                                ))
                            ) : (
                                <div className="no-coupons-message">
                                    <b>Your Voucheer offer wishlist is blank</b>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default VoucherWishList