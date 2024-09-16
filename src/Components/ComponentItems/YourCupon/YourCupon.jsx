import React from 'react'
import { Link } from 'react-router-dom'

const YourCupon = () => {
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
             coupons : '150' ,
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
            deals: 'vouchers',
            coupons : '150' ,
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
            deals: 'vouchers',
            coupons : '150' ,

        },
        {
            img: 'assets/Image/swiggy.png',
            name: 'Swiggy',
            mode: 'Online',
            cat: "Food  & Drinks",
            started: '08-feb-2024',
            sub: 'Dinners',
            ended: '30-feb-2024',
            deals: 'Discount',
            status: 'decline',
             coupons : '150' ,
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
            deals: 'vouchers',
            coupons : '150' ,
        },
        {
            status: 'decline',
            img: 'assets/Image/dominoz.png',
            name: 'MC Dominos',
            mode: 'Offline',
            cat: "Food  & Drinks",
            started: '08-feb-2024',
            sub: 'Dinners',
            ended: '30-feb-2024',
            deals: 'vouchers',
            coupons : '150' ,

        },
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
             coupons : '150' ,
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
            deals: 'vouchers',
            coupons : '150' ,
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
            deals: 'vouchers',
            coupons : '150' ,

        },
        {
            img: 'assets/Image/swiggy.png',
            name: 'Swiggy',
            mode: 'Online',
            cat: "Food  & Drinks",
            started: '08-feb-2024',
            sub: 'Dinners',
            ended: '30-feb-2024',
            deals: 'Discount',
            status: 'decline',
             coupons : '150' ,
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
            deals: 'vouchers',
            coupons : '150' ,
        },
        {
            status: 'decline',
            img: 'assets/Image/dominoz.png',
            name: 'MC Dominos',
            mode: 'Offline',
            cat: "Food  & Drinks",
            started: '08-feb-2024',
            sub: 'Dinners',
            ended: '30-feb-2024',
            deals: 'vouchers',
            coupons : '150' ,

        },


    ]
    return (
        <>
            <div className="your-cupon-outer">
                <div className="container">
                    <div className="your-cupon-inner cupon-row">
                        <div className=" row">
                            {
                                cupon.map((i) => {
                                    return (
                                        <div className="item col-12 col-md-6 col-xl-4 ">
                                            <div className="item-inner">
                                                <div className="cupon-status"><span className={i.status}>{i.status}</span></div>
                                                <div className="top">
                                                    <div className="img-content">
                                                        <img src={i.img} alt="" />
                                                        <h2>{i.name}</h2>
                                                        <div className="cupon-mode">
                                                        {i.mode}
                                                    </div>

                                                    </div>
                                                    <div className="add-new"><Link>View All</Link></div>
                                                </div>
                                                <div className="bottom row">
                                                    <div className="col-6">Cat : {i.cat}</div>
                                                    <div className="col-6">Started : {i.started}</div>
                                                    <div className="col-6">Sub - Cat  : {i.sub}</div>
                                                    <div className="col-6">Ended : {i.ended}</div>
                                                    <div className="col-6">Deals : {i.deals}</div>
                                                    <div className="col-6">Used coupons  : {i.coupons}</div>
                                                    <div className="col-12 text-end"><Link to={'/'} className=''>View Statistics</Link></div>
                                                </div>

                                            </div>
                                        </div>

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

export default YourCupon
