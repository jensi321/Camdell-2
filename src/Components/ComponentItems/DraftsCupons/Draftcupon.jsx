import React, { useEffect, useState } from 'react'
import { FaCirclePlus } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { BaseUrl } from '../../BaseURL/BaseUrl';

const Draftcupon = () => {
   

    const [cupon, setCupon] = useState();

    const tokenData = JSON.parse(sessionStorage.getItem('token'));
    const userId = (tokenData.id)
    console.log(userId);
    
    useEffect(() => {

        const formData = {
            user_id: userId
        }

        console.log(formData)
        fetch(`${BaseUrl}/getcouponcode.php`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                  },
                body: JSON.stringify(formData)
            })

            .then(response => response.json())

            .then(data => {

                setCupon(data.data);
                console.log(data.data);

            })

            .catch(error => {

                console.error('API error:', error);

            });

    }, [userId]);


    return (
        <>
            <div className="draft-cupon-page draft-cupon-outer">
                <div className="container">
                    <div className="draft-cupon-inner cupon-row">
                        <div className="row">
                            {
                               cupon && cupon.map((i, index) => {
                                    return (
                                        <div className="item col-12 col-md-6 col-xl-4" key={index}>
                                            <div className="item-inner">
                                                <div className="top">
                                                    <div className="img-content">
                                                        <img src={`https://www.demo603.amrithaa.com/camdell/public/${i.images}`} alt="" />
                                                        <h2>{i.business_name}</h2>
                                                        <span className='cupon-mode'>{i.mode}</span>
                                                    </div>
                                                   
                                                    <div className="add-new">
                                                        <Link to={'/operatornewdeal'}><FaCirclePlus /> Add new deals</Link>
                                                    </div>
                                                </div>
                                                <div className="bottom row">
                                                    <div className="col-6"><b>Cat : </b>{i.category}</div>
                                                    <div className="col-6"><b>Started :</b> {i.deal_start_date}</div>
                                                    <div className="col-6"><b>Sub - Cat  :</b> {i.subcategory}</div>
                                                    <div className="col-6"><b>Ended :</b> {i.deal_end_date}</div>
                                                    <div className="col-6"><b>Deals :</b> {i.coupon_type}</div>
                                                    <div className="col-6"><Link to={''}>View</Link></div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Draftcupon
