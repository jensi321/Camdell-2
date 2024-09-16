import React from 'react'
import Slider from 'react-slick';

const OurCllient = () => {
    const settings = {
        slidesToShow: 6,
        rows: 3,
        responsive: [

            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    };
    const compny = [
        {
            img: 'assets/Image/amzon.png'
        },
        {
            img: 'assets/Image/louts-logo.png'
        },
        {
            img: 'assets/Image/louts-logo.png'
        },
        {
            img: 'assets/Image/realme.png'
        },
        {
            img: 'assets/Image/realme.png'
        },
        {
            img: 'assets/Image/flipkart.png'
        },
        {
            img: 'assets/Image/Naykaa.png'
        },
        {
            img: 'assets/Image/nike.png'
        },
        {
            img: 'assets/Image/nike.png'
        },
        {
            img: 'assets/Image/acer.png'
        },

        {
            img: 'assets/Image/udemy.png'
        },
        {
            img: 'assets/Image/boat.png'
        },
        {
            img: 'assets/Image/boat.png'
        },
        {
            img: 'assets/Image/acer.png'
        },

        {
            img: 'assets/Image/udemy.png'
        },
        {
            img: 'assets/Image/boat.png'
        },
        {
            img: 'assets/Image/boat.png'
        },
        {
            img: 'assets/Image/acer.png'
        },

        {
            img: 'assets/Image/udemy.png'
        },
        {
            img: 'assets/Image/boat.png'
        },
        {
            img: 'assets/Image/boat.png'
        },
    ]
    return (
        <>
            <div className="client-outer">
                <div className="container">
                    <div className="client-inner">
                        <Slider {...settings} className='our-partner'>
                            {
                                compny.map((i) => {
                                    return (
                                        <div className="item">
                                            <div className="item-inner">
                                                <div className="img-content">
                                                    <img src={i.img} alt="" />
                                                </div>
                                            </div>

                                        </div>
                                    )
                                })
                            }

                        </Slider>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurCllient