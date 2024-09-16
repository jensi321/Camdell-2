import React, { useContext, useEffect, useState } from 'react'
import { BaseUrl, ImageUrl } from '../../../BaseURL/BaseUrl';
import { ProfileContext } from '../../../Context/UserContext';

const ExpiredSubscription = () => {
    // const items = [
    //     {
    //         name: 'Basic ',
    //         img: 'assets/Image/sub-1.png',
    //         startdate: '22/02/2023',
    //         enddate: '22/02/2023',
    //         cuponlimit: '20',
    //         wallet: '100',
    //         rupees: '1,000'
    //     },
    //     {
    //         name: 'Premium ',
    //         img: 'assets/Image/subscriptionmodel.png',
    //         startdate: '22/02/2023',
    //         enddate: '22/02/2023',
    //         cuponlimit: '20',
    //         wallet: '100',
    //         rupees: '1,000'
    //     },
    //     {
    //         name: 'Premium ',
    //         img: 'assets/Image/subscriptionmodel.png',
    //         startdate: '22/02/2023',
    //         enddate: '22/02/2023',
    //         cuponlimit: '20',
    //         wallet: '100',
    //         rupees: '1,000'
    //     },
    //     {
    //         name: 'Basic ',
    //         img: 'assets/Image/sub-1.png',
    //         startdate: '22/02/2023',
    //         enddate: '22/02/2023',
    //         cuponlimit: '20',
    //         wallet: '100',
    //         rupees: '1,000'
    //     },
    //     {
    //         name: 'Premium ',
    //         img: 'assets/Image/subscriptionmodel.png',
    //         startdate: '22/02/2023',
    //         enddate: '22/02/2023',
    //         cuponlimit: '20',
    //         wallet: '100',
    //         rupees: '1,000'
    //     },
    //     {
    //         name: 'Premium ',
    //         img: 'assets/Image/subscriptionmodel.png',
    //         startdate: '22/02/2023',
    //         enddate: '22/02/2023',
    //         cuponlimit: '20',
    //         wallet: '100',
    //         rupees: '1,000'
    //     },

    // ]

    const [items, setItems] = useState([])
    const {  userId } = useContext(ProfileContext);

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
            <div className="expired-subscription">
                <div className="heading">
                    <h3>Expired</h3>
                </div>
                <div className="row">
                    {
                       items && items.map((i) => {

                            const now = new Date();
                            const endDate = new Date(i.end_date);

                            if (now >= endDate) {
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
                               return  null
                            }
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default ExpiredSubscription