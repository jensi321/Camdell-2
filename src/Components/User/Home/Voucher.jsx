import React from 'react'
import { FaAngleRight } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'

const Voucher = () => {
    const settings = {
        slidesToShow: 4,
        rows: 2,
        nav: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 667,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };
    const items = [
        {
            img: "assets/Image/dominoz.png",
            name: "MC Dominos",
            rs: '5,000 - 6,000 ',
            cashback: 'Get Rs 100 Cashback',
            bgimg: "#A9D5B2",
            pcolor: '#002408',
            rscolor: "#E31837",
            cashcolor: "#046851",
            linkcolor: "#FFF",
        },
        {
            img: "assets/Image/swiggy.png",
            name: "Swiggy",
            rs: ' 5,000 - 6,000',
            cashback: 'Get Rs 500 Cashback',
            bgimg: '#002408',
            pcolor: '#FFF',
            rscolor: "#FFF",
            cashcolor: "#FF8702",
            linkcolor: "#002408",
        },
        {
            img: "assets/Image/dominoz.png",
            name: "MC Dominos",
            rs: '5,000 - 6,000 ',
            cashback: 'Get Rs 100 Cashback',
            bgimg: "#A9D5B2",
            pcolor: '#002408',
            rscolor: "#E31837",
            cashcolor: "#046851",
            linkcolor: "#FFF",
        },
        {
            img: "assets/Image/swiggy.png",
            name: "Swiggy",
            rs: ' 5,000 - 6,000',
            cashback: 'Get Rs 500 Cashback',
            bgimg: '#002408',
            pcolor: '#FFF',
            rscolor: "#FFF",
            cashcolor: "#FF8702",
            linkcolor: "#002408",
        },
        {
            img: "assets/Image/dominoz.png",
            name: "MC Dominos",
            rs: '5,000 - 6,000 ',
            cashback: 'Get Rs 100 Cashback',
            bgimg: "#A9D5B2",
            pcolor: '#002408',
            rscolor: "#E31837",
            cashcolor: "#046851",
            linkcolor: "#FFF",
        },
        {
            img: "assets/Image/swiggy.png",
            name: "Swiggy",
            rs: ' 5,000 - 6,000',
            cashback: 'Get Rs 500 Cashback',
            bgimg: '#002408',
            pcolor: '#FFF',
            rscolor: "#FFF",
            cashcolor: "#FF8702",
            linkcolor: "#002408",
        },
        {
            img: "assets/Image/dominoz.png",
            name: "MC Dominos",
            rs: '5,000 - 6,000 ',
            cashback: 'Get Rs 100 Cashback',
            bgimg: "#A9D5B2",
            pcolor: '#002408',
            rscolor: "#E31837",
            cashcolor: "#046851",
            linkcolor: "#FFF",
        },
        {
            img: "assets/Image/swiggy.png",
            name: "Swiggy",
            rs: ' 5,000 - 6,000',
            cashback: 'Get Rs 500 Cashback',
            bgimg: '#002408',
            pcolor: '#FFF',
            rscolor: "#FFF",
            cashcolor: "#FF8702",
            linkcolor: "#002408",
        },
    ]

    return (
        <>
            <div className="voucher-outer">
                <div className="container">
                    <div className="voucher-inner">
                        <div className="heading">
                            <h3>Vouchers coupons</h3>
                            <Link to="">View All <span><FaAngleRight /></span></Link>
                        </div>
                        <Slider {...settings}>
                            {
                                items.map((i) => {
                                    return (
                                        <div className="item" key={''}>
                                            <div className="item-inner" style={{ backgroundColor: `${i.bgimg}` }}>

                                                <div className="text-content">
                                                    <h3 style={{ color: `${i.pcolor}` }}>{i.name}</h3>
                                                    <span style={{ color: `${i.rscolor}` }}>Rs ( {i.rs} )</span>
                                                    <p className='cashback' style={{ color: `${i.cashcolor}` }}>{i.cashback}</p>
                                                    <p className="link-button">
                                                        <Link to={''} className='button' style={{ color: `${i.linkcolor} `, backgroundColor: `${i.pcolor}` }} >Get Now</Link>

                                                    </p>
                                                </div>
                                                <div className="img-content">
                                                    <img src={i.img} alt={i.name} />
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

export default Voucher