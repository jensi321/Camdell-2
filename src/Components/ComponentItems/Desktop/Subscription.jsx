import React from 'react'
import { Link } from 'react-router-dom'

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Subscription = () => {
    
    const subscriptionplan = [
        {
            img: 'assets/Image/subscriptionmodel.png',
            name: 'Gold',
            duration: 'PER MONTH',
            Starting: '11/05/2024',
            End: '11/06/2024',
            Cat: 'Food  & Drinks',
            Sub: 'Dinners'
        },
        {
            img: 'assets/Image/subscriptionmodel.png',
            name: 'Gold',
            duration: 'PER MONTH',
            Starting: '11/05/2024',
            End: '11/06/2024',
            Cat: 'Food  & Drinks',
            Sub: 'Dinners'
        },
        {
            img: 'assets/Image/subscriptionmodel.png',
            name: 'Gold',
            duration: 'PER MONTH',
            Starting: '11/05/2024',
            End: '11/06/2024',
            Cat: 'Food  & Drinks',
            Sub: 'Dinners'
        }
    ]
    const options = {
        loop: true,
        responsiveClass: true,
        nav: false,
        dots: false,
        margin: 20,
        autoplay: false,
        responsive: {
            0: {
                items: 1,
            },
            767: {
                items: 2,
            },
            1200: {
                items: 3,
            },
        },
    };
    return (
        <>
            <div className="subscription-outer">
                <div className="container">
                    <div className="subscription-inner">
                        <div className="heading">
                            <h3>Subscription History</h3>
                        </div>

                        <div className="subscription-plan row">
                        <OwlCarousel className='owl-theme' {...options}>

                       
                            {
                                subscriptionplan.map((i) => {
                                    return (
                                        <div className="item">
                                            <div className="item-inner">
                                                <div className="sub-plan">
                                                    <span>Your Subscription plan</span>
                                                    <Link>View all</Link>
                                                </div>
                                                <div className="img-content">
                                                    <img src={i.img} alt="" />
                                                    <h4>{i.name}</h4>
                                                    <span>({i.duration})</span>
                                                </div>
                                                <div className="info row">
                                                    <div className="col-6">Starting Date : <b>{i.Starting}</b></div>
                                                    <div className="col-6">End Date : <b>{i.End}</b>
                                                    </div>
                                                    <div className="col-6">Cat : <b>{i.Cat}</b></div>
                                                    <div className="col-6">Sub - Cat : <b>{i.Sub}</b></div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                             </OwlCarousel>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Subscription
