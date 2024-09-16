import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Link } from 'react-router-dom';

const DealofDay = () => {
    const options = {
        loop: true,
        responsiveClass: true,
        nav: true,
        dots: false,
        autoplay: false,
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1,
            },
            576: {
                items: 2,
            },
            767: {
                items: 3
            },
            990: {
                items: 4,
            },
            1200: {
                items: 5,
            }
        },
    };

    const items = [
        {
            img: 'assets/Image/redminotpro13.png',
            name: 'Redmi note 13 pro 5g',
            price: "25,999",
            originalprice: '30,999'
        },
        {
            img: 'assets/Image/FastTrack.png',
            name: 'FastTrack',
            price: "5,999",
            originalprice: '6,500'
        },
        {
            img: 'assets/Image/nikee.png',
            name: 'nike',
            price: "2,000",
            originalprice: '3,999'
        },
        {
            img: 'assets/Image/redminotpro13.png',
            name: 'Redmi note 13 pro 5g',
            price: "25,999",
            originalprice: '30,999'
        },
        {
            img: 'assets/Image/redminotpro13.png',
            name: 'Redmi note 13 pro 5g',
            price: "25,999",
            originalprice: '30,999'
        },

    ]
    return (
        <>
            <div className="deal-outer">
                <div className="container">
                    <div className="deal-inner">
                        <div className="heading">
                            <h3>Deal of the day</h3>
                        </div>
                        <OwlCarousel className='owl-theme' {...options}>
                            {items.map((i) => {
                                return (
                                    <div className="item">
                                        <div className="item-inner">
                                            <div className="text-content">
                                                <p>{i.name}</p>
                                            </div>
                                            <div className="img-content">
                                                <img src={i.img} alt={i.name} />
                                            </div>

                                            <div className="price">
                                                <span className='ruppes-icon'>₹ </span> {i.price}
                                                <span><strike>{i.originalprice}</strike></span></div>
                                            <Link to='' className='button'>Buy now</Link>
                                        </div>

                                    </div>
                                )

                            })}

                        </OwlCarousel>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DealofDay