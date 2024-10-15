import axios from 'axios';
import React, {  useEffect, useState } from 'react'
import { BaseUrl } from '../../../BaseURL/BaseUrl';
import CashbackItems from '../../../Items/CashbackItems';

const CashbackStore = () => {

    // const cashback = [
    //     {
    //         img: 'assets/Image/amzon.png',
    //         sale: 'Up to 760% off + Extra 5% offer on EMI',

    //     },
    //     {
    //         img: 'assets/Image/realme.png',
    //         sale: 'Up to 760% off + Extra 5% offer on EMI',

    //     },
    //     {
    //         img: 'assets/Image/nike.png',
    //         sale: 'Up to 760% off + Extra 5% offer on EMI',

    //     },
    //     {
    //         img: 'assets/Image/acer-logo.png',
    //         sale: 'Up to 760% off + Extra 5% offer on EMI',

    //     },
    //     {
    //         img: 'assets/Image/acer-logo.png',
    //         sale: 'Up to 760% off + Extra 5% offer on EMI',

    //     },
    //     {
    //         img: 'assets/Image/drema.png',
    //         sale: 'Up to 760% off + Extra 5% offer on EMI',

    //     },
    //     {
    //         img: 'assets/Image/udemy.png',
    //         sale: 'Up to 760% off + Extra 5% offer on EMI',

    //     },
    // ]


    const [cashback, setCashback] = useState([]);

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
                setCashback(response.data.data);
                console.log(response.data.data)
            } catch (error) {
                console.error(error);
            }
        };
        fetchCoupons();
    }, [userId]);


    return (
        <>
            <div className="cashback-store">
                <div className="container">
                    <div className="cashback-store-inner">


                        <div className="heading">
                            <h3>cash back stores</h3>
                        </div>
                        <div className="row cashback">
                            {
                               cashback && cashback.map((i,index) => {

                                    if (i.coupon_type === 'cashback') {
                                        return (
                                            <CashbackItems key={index} value={i} />

                                        )
                                    }
                                    else{
                                        return null;
                                    }
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CashbackStore