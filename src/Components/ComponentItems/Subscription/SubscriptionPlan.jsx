import React from 'react'
import { FaCircleCheck } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const SubscriptionPlan = () => {
    const items = [
        {
            textcolor: '#050B3F',
            img: "assets/Image/gold.jpeg",
            plan: 'GOLD',
            name: "Basic",
            rupees: "500"
        },
        {
            textcolor: '#fff',
            img: "assets/Image/browns.jpeg",
            name: "Premium",
            rupees: "500",
            plan: 'BROWNS',
        },
        {
            textcolor: '#E36118',
            img: "assets/Image/silver.jpeg",
            name: "Pro",
            rupees: "500",
            plan: 'SILVER'
        },
    ]
    return (
        <>
            <div className="sub-plan-outer merchant-sub-plan">
                <div className="container">
                    <div className="sub-plan-inner">
                        <div className="heading">
                            <h3>Choose your best plan</h3>
                        </div>
                        <div className="row">
                            {
                                items.map((i) => {
                                    return (
                                        <>
                                            <div className="item col-lg-4 col-12">
                                                <div className="item-inner" style={{ backgroundImage: `url(${i.img})` }}>
                                                    <p>{i.plan}</p>
                                                    <h3 style={{ color: `${i.textcolor}` }}>{i.name}</h3>
                                                    <div className="rupees">
                                                        <span className='ruppes-icon'>₹ </span>
                                                        <span className='rupess-text'>{i.rupees}</span>
                                                        <span className='monthly-plan'> PER MONTH</span>
                                                    </div>
                                                    <ul className="plan-description">
                                                        <li><span style={{ color: `${i.textcolor}` }}><FaCircleCheck />

                                                        </span>Lorem Ipsum is simply dummy text </li>
                                                        <li><span style={{ color: `${i.textcolor}` }}><FaCircleCheck />

                                                        </span> Lorem Ipsum is simply dummy text </li>
                                                        <li><span style={{ color: `${i.textcolor}` }}><FaCircleCheck />

                                                        </span>Lorem Ipsum is simply dummy text </li>
                                                        <li><span style={{ color: `${i.textcolor}` }}><FaCircleCheck />

                                                        </span>Lorem Ipsum is simply dummy text </li>
                                                    </ul>

                                                    <Link to='/mearchntpayment' className="button" style={{ backgroundColor: `${i.textcolor}` }}>Subscribe</Link>
                                                </div>
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
