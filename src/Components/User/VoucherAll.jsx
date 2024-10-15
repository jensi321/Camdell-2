import axios from 'axios';
import React, {  useEffect, useState } from 'react'
import { BaseUrl } from '../BaseURL/BaseUrl';
import VoucherCuponItems from '../Items/VoucherCuponItems';

const VoucherAll = () => {
    // const items = [
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
            <div className="voucherpage-outer">
                <div className="container">
                    <div className="vaoucherpage-inner">
                        <div className="row">
                            {items && Array.isArray(items) && items.map((i,index) => {
                                if (i.coupon_type === 'Voucher') {
                                    return (
                                        <>
                                            <VoucherCuponItems value={i} key={index}/>
                                        </>
                                    )
                                }
                                else{
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

export default VoucherAll