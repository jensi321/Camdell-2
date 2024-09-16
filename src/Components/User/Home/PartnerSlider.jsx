import React from 'react'
import Slider from 'react-slick';

const PartnerSlider = () => {
    const settings = {
        slidesToShow: 5,
        rows: 4,
        responsive: [

            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 420,
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
            <Slider {...settings} className='our-partner'>
                {
                    compny.map((i,index) => {
                        return (
                            <div className="item" key={index}>
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
        </>
    )
}

export default PartnerSlider