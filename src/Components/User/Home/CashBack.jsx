import React from 'react'
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { FaAngleRight } from "react-icons/fa6";


const CashBack = () => {
    const settings = {
        slidesToShow: 5,
        rows: 2,
        nav: true,
        responsive: [

            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 990,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    const items = [
        {
            img: 'assets/Image/amzon.png',
            sale: 'up to 30% off',
            btn: 'Earn up to 30% rewards'
        },
        {
            img: 'assets/Image/Puma.png',
            sale: 'up to 30% off',
            btn: 'Earn up to 30% rewards'
        },
        {
            img: 'assets/Image/flipkart.png',
            sale: 'up to 50% off',
            btn: 'Earn up to 50% rewards'
        },
        {
            img: 'assets/Image/adidas.png',
            sale: 'END : 04:50:11',
            btn: 'Earn up to 30% rewards'
        },
        {
            img: 'assets/Image/Naykaa.png',
            sale: 'END : 04:50:11',
            btn: 'Earn up to 40% rewards'
        },
        {
            img: 'assets/Image/boat.png',
            sale: 'up to 30% off',
            btn: 'Earn up to 30% rewards'
        },
        {
            img: 'assets/Image/Naykaa.png',
            sale: 'END : 04:50:11',
            btn: 'Earn up to 40% rewards'
        },
        {
            img: 'assets/Image/boat.png',
            sale: 'up to 30% off',
            btn: 'Earn up to 30% rewards'
        },
        {
            img: 'assets/Image/Naykaa.png',
            sale: 'END : 04:50:11',
            btn: 'Earn up to 40% rewards'
        },

        {
            img: 'assets/Image/boat.png',
            sale: 'up to 30% off',
            btn: 'Earn up to 30% rewards'
        },

    ]

    return (
        <>
            <div className="cashback-outer">
                <div className="container">
                    <div className="cashback-inner">
                        <div className="heading">
                            <h3>Top cash back stores</h3>

                            <Link to="" className='viewall'>View All <FaAngleRight /></Link>
                        </div>
                        <Slider {...settings}>
                            {items.map((i, index) => {
                                return (

                                    <div className="item" key={index}>
                                        <div className="item-inner">

                                            <span className="offer-sale">
                                                {i.sale}
                                            </span>
                                            <div className="img-content">
                                                <img src={i.img} alt='' />
                                            </div>
                                            <div className="text-content">
                                                <Link to='' className='button'>{i.btn}</Link>
                                                <Link to='' className='rewards'>Rewards Rates & terms</Link>

                                            </div>

                                        </div>

                                    </div>

                                )

                            })}



                        </Slider>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CashBack