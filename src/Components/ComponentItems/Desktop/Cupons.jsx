import React from 'react'
import { FaCirclePlus } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'


const Cupons = () => {

    const cupon = [
        {
            img: 'assets/Image/swiggy.png',
            name: 'Swiggy',
            mode: 'Online',
            cat: "Food  & Drinks",
            started: '08-feb-2024',
            sub: 'Dinners',
            ended: '30-feb-2024',
            deals: 'Discount',
            status: 'pending',
        },
        {
            status: 'approval',
            img: 'assets/Image/dominoz.png',
            name: 'MC Dominos',
            mode: 'Offline',
            cat: "Food  & Drinks",
            started: '08-feb-2024',
            sub: 'Dinners',
            ended: '30-feb-2024',
            deals: 'vouchers'
        },
        {
            status: 'approval',
            img: 'assets/Image/dominoz.png',
            name: 'MC Dominos',
            mode: 'Offline',
            cat: "Food  & Drinks",
            started: '08-feb-2024',
            sub: 'Dinners',
            ended: '30-feb-2024',
            deals: 'vouchers'
        },


    ]

    const options = {
        slidesToShow: 3,
        responsive: [

            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    };
 return (
        <>
            <div className="merchant-cupon">
                <div className="container">
                    <div className="merchant-cupon-inner">
                        <div className="heading">
                            <h3>Your coupons</h3>
                            <Link to={'/newdeals'}><FaCirclePlus /> Add new deals</Link>
                        </div>

                        <div className="cupon-row">
                            <Slider  {...options}>
                                {
                                    cupon.map((i) => {
                                        return (
                                            <div className="item">
                                                <div className="item-inner">
                                                    <div className="cupon-status"><span className={i.status}>{i.status}</span></div>
                                                    <div className="top">
                                                        <div className="img-content">
                                                            <img src={i.img} alt="" />
                                                            <h2>{i.name}</h2>
                                                        </div>
                                                        <div className="cupon-mode">
                                                            {i.mode}
                                                        </div>

                                                    </div>
                                                    <div className="bottom row">
                                                        <div className="col-6">Cat : {i.cat}</div>
                                                        <div className="col-6">Started : {i.started}</div>
                                                        <div className="col-6">Sub - Cat  : {i.sub}</div>
                                                        <div className="col-6">Ended : {i.ended}</div>
                                                        <div className="col-6">Deals : {i.deals}</div>
                                                        <div className="col-6"><Link to={'/mearchntstatics'}>View Statistics</Link></div>
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
            </div>
        </>
    )
}

export default Cupons
