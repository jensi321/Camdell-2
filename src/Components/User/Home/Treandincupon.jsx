import React from 'react'
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

const Treandincupon = () => {
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
                breakpoint: 991,
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
            sale: 'Up to 760% off + Extra 5% offer on EMI',

        },
        {
            img: 'assets/Image/realme.png',
            sale: 'Up to 760% off + Extra 5% offer on EMI',

        },
        {
            img: 'assets/Image/nike.png',
            sale: 'Up to 760% off + Extra 5% offer on EMI',

        },
        {
            img: 'assets/Image/acer-logo.png',
            sale: 'Up to 760% off + Extra 5% offer on EMI',

        },
        {
            img: 'assets/Image/acer-logo.png',
            sale: 'Up to 760% off + Extra 5% offer on EMI',

        },
        {
            img: 'assets/Image/drema.png',
            sale: 'Up to 760% off + Extra 5% offer on EMI',

        },
        {
            img: 'assets/Image/udemy.png',
            sale: 'Up to 760% off + Extra 5% offer on EMI',

        },
        {
            img: 'assets/Image/louts-logo.png',
            sale: 'Up to 760% off + Extra 5% offer on EMI',

        },
        {
            img: 'assets/Image/Naykaa.png',
            sale: 'Up to 760% off + Extra 5% offer on EMI',

        },
        {
            img: 'assets/Image/Naykaa.png',
            sale: 'Up to 760% off + Extra 5% offer on EMI',

        },
    ]
    return (
        <>
            <div className="tranding-outer">
                <div className="container">
                    <div className="tranding-inner">
                        <div className="heading">
                            <h3>Trending Coupons & Offer</h3>
                        </div>
                        <Slider {...settings}>
                            {items.map((i, index) => {
                                return (

                                    <div className="item" key={index}>
                                        <div className="item-inner">
                                            <div className="img-content">
                                                <img src={i.img} alt='' />
                                            </div>

                                            <div className="text-content">
                                                <p>{i.sale}</p>
                                                <div className="cupon-button">
                                                    <Link to='' className='cupon-code-button'><span className='cupon'>get Coupons</span><span className='code'>2511545614</span></Link>
                                                    
                                                </div>
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

export default Treandincupon