import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { BaseUrl } from '../../../BaseURL/BaseUrl';
import { ProfileContext } from '../../../Context/UserContext';
import DiscountCuponItems from '../../../Items/DiscountCuponItems';

const CuponOffer = () => {

    // const cuponoffer = [
    //     {
    //         img: 'assets/Image/amzon.png',
    //         sale: 'up to 30% off',
    //         btn: 'Earn up to 30% rewards'
    //     },
    //     {
    //         img: 'assets/Image/Puma.png',
    //         sale: 'up to 30% off',
    //         btn: 'Earn up to 30% rewards'
    //     },
    //     {
    //         img: 'assets/Image/flipkart.png',
    //         sale: 'up to 50% off',
    //         btn: 'Earn up to 50% rewards'
    //     },
    //     {
    //         img: 'assets/Image/adidas.png',
    //         sale: 'END : 04:50:11',
    //         btn: 'Earn up to 30% rewards'
    //     },
    //     {
    //         img: 'assets/Image/Naykaa.png',
    //         sale: 'END : 04:50:11',
    //         btn: 'Earn up to 40% rewards'
    //     },
    //     {
    //         img: 'assets/Image/boat.png',
    //         sale: 'up to 30% off',
    //         btn: 'Earn up to 30% rewards'
    //     },
    //     {
    //         img: 'assets/Image/flipkart.png',
    //         sale: 'up to 50% off',
    //         btn: 'Earn up to 50% rewards'
    //     },
    //     {
    //         img: 'assets/Image/adidas.png',
    //         sale: 'END : 04:50:11',
    //         btn: 'Earn up to 30% rewards'
    //     },
    // ]


    const [cuponoffer, setcuponoffer] = useState([]);
    const { userId } = useContext(ProfileContext);

    useEffect(() => {


        const formdata = {
            user_id: userId
        }

        console.log(formdata)
        const fetchCoupons = async () => {
            try {
                const response = await axios.post(`${BaseUrl}/getcouponcode.php`, formdata);
                setcuponoffer(response.data.data);
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
                            <h3>COUPONS & OFFERS</h3>
                        </div>

                        <div className="cupon-offer row">
                            {
                            
                            cuponoffer && cuponoffer.map((i) => {

                                if (i.coupon_type === 'discount') {
                                    return (<>

                                      <DiscountCuponItems value={i}/>
                                    </>
                                    )
                                }
                                else{
                                    return null
                                }
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CuponOffer