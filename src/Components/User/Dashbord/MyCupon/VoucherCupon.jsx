import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { BaseUrl } from '../../../BaseURL/BaseUrl';
import { ProfileContext } from '../../../Context/UserContext';
import VoucherCuponItems from '../../../Items/VoucherCuponItems';

const VoucherCupon = () => {
    // const voucher = [
    //     {
    //         img: "assets/Image/dominoz.png",
    //         name: "MC Dominos",
    //         rs: '5,000 - 6,000 ',
    //         cashback: 'Get Rs 100 Cashback',
    //     },
    //     {
    //         img: "assets/Image/swiggy.png",
    //         name: "Swiggy",
    //         rs: ' 5,000 - 6,000',
    //         cashback: 'Get Rs 500 Cashback',
    //     },
    //     {
    //         img: "assets/Image/dominoz.png",
    //         name: "MC Dominos",
    //         rs: '5,000 - 6,000 ',
    //         cashback: 'Get Rs 100 Cashback',
    //     },
    //     {
    //         img: "assets/Image/swiggy.png",
    //         name: "Swiggy",
    //         rs: ' 5,000 - 6,000',
    //         cashback: 'Get Rs 500 Cashback',
    //     },
    // ]


    const [voucher, setvoucher] = useState([]);
    const { userId } = useContext(ProfileContext);

    useEffect(() => {


        const formdata = {
            user_id: userId
        }

        console.log(formdata)
        const fetchCoupons = async () => {
            try {
                const response = await axios.post(`${BaseUrl}/getcouponcode.php`, formdata);
                setvoucher(response.data.data);
                console.log(response.data.data)
            } catch (error) {
                console.error(error);
            }
        };
        fetchCoupons();
    }, [userId]);
    return (
        <>
            <div className="vouchercupon-outer">
                <div className="container">
                    <div className="vouchercupon-inner">

                    
                <div className="heading">
                    <h3>Vouchers coupons</h3>
                </div>
                <div className="row">


                    {
                      voucher && voucher.map((i,index) => {

                            if (i.coupon_type === 'Voucher') {

                                return (<>

                                    <VoucherCuponItems value={i} key={index}/>
                                  </>
                                  )
                                }else{
                                return null
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

export default VoucherCupon