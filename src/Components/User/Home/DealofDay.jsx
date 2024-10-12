import React from 'react'
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

const DealofDay = () => {

    
    const options = {
        slidesToShow: 5,
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
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2
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
                        <Slider  {...options}>
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

                        </Slider>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DealofDay