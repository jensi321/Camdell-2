import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { CategoryApi, ImageUrl } from '../BaseURL/BaseUrl';
import { ProfileContext } from '../Context/UserContext';

const SubscriptionPlan = () => {
    const [data, setData] = useState([]);
    const { setPlanId, setPlanName, setPlanPrice } = useContext(ProfileContext);



    useEffect(() => {
        fetch(`${CategoryApi}/getplan`)
            .then(response => response.json())
            .then(data => {// Access the data property of the API response
                setData(data.data)
                console.log(data.data)
            })
            .catch(error => console.error(error));
    }, []);

    const handleSubscribe = (plan) => {

        setPlanId(plan.id);

        setPlanName(plan.name);

        setPlanPrice(plan.price);

    };


    const color = [
        {
            color: "#9A08A7"
        },
        {
            color: "#094298"
        },
        {
            color: "#E36118"
        },
    ]

    return (
        <>
            <div className="sub-plan-outer">
                <div className="container">
                    <div className="sub-plan-inner">
                        <div className="heading">
                            <h3>Choose your best plan</h3>
                        </div>
                        <div className="row">
                            {
                                data && data.map((i, index) => {
                                    return (
                                        <>
                                            <div className="item col-lg-4 col-12" key={index}>
                                                <div className="item-inner">
                                                    <h3 style={{ color: color[index % color.length].color }}>{i.name}</h3>
                                                    <div className="img-content">
                                                        <img src={`${ImageUrl}/${i.icon}`} alt={i.name} />
                                                    </div>
                                                    <div className="rupees">
                                                        <span className='ruppes-icon'>₹ </span>
                                                        <span className='rupess-text'>{i.price}</span>
                                                        <span className='monthly-plan'> PER MONTH</span>
                                                    </div>
                                                    <ul className="plan-description">
                                                        <li><span><img src={`${ImageUrl}/${i.tick_icon}`} alt="" />
                                                        </span>Lorem Ipsum is simply dummy text </li>

                                                        <li><span><img src={`${ImageUrl}/${i.tick_icon}`} alt="" />
                                                        </span> Lorem Ipsum is simply dummy text </li>

                                                        <li><span><img src={`${ImageUrl}/${i.tick_icon}`} alt="" />
                                                        </span>Lorem Ipsum is simply dummy text </li>

                                                        <li><span><img src={`${ImageUrl}/${i.tick_icon}`} alt="" />
                                                        </span>Lorem Ipsum is simply dummy text </li>
                                                    </ul>


                                                    <Link to="/pymentdetails"
                                                        onClick={() => handleSubscribe(i)}
                                                        className="button"
                                                        style={{ backgroundColor: color[index % color.length].color }}>Subscribe</Link>                                                </div>
                                            </div>
                                        </>
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

export default SubscriptionPlan