import React from 'react'
import { FaAngleRight, FaCirclePlus } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const DraftCupon = () => {

    const options = {
        loop: true,
        responsiveClass: true,
        nav: false,
        
        margin:20,
        autoplay: false,
        responsive: {
            0: {
                items: 1,
                dots : false,
            },
            767: {
                items: 2,
                dots : false,
            },
            1200: {
                items: 3,
                dots : true,
            },
        },
    };
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
            status:'pending',
        },
        {
            status:'approval',
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
            status:'approval',
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
            img: 'assets/Image/swiggy.png',
            name: 'Swiggy',
            mode: 'Online',
            cat: "Food  & Drinks",
            started: '08-feb-2024',
            sub: 'Dinners',
            ended: '30-feb-2024',
            deals: 'Discount',
            status:'pending',
        },
        {
            status:'approval',
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
            status:'approval',
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
            img: 'assets/Image/swiggy.png',
            name: 'Swiggy',
            mode: 'Online',
            cat: "Food  & Drinks",
            started: '08-feb-2024',
            sub: 'Dinners',
            ended: '30-feb-2024',
            deals: 'Discount',
            status:'pending',
        },
        {
            status:'approval',
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
            status:'approval',
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
  return (
    <>
      <div className="draft-cupon-outer">
        <div className="container">
            <div className="draft-cupon-inner">
                <div className="heading">
                    <h3>draft coupons</h3>
                    <Link to={'/draftcupon'}>View all <FaAngleRight/></Link>
                </div>
                <div className="cupon-row">
                    <OwlCarousel className='owl-theme' {...options}>
                        {
                            cupon.map((i) =>{
                                return(
                                    <div className="item">
                                    <div className="item-inner">
                                            <div className="top">
                                                <div className="img-content">
                                                    <img src={i.img} alt="" />
                                                    <h2>{i.name}</h2>
                                                </div>
                                                <div className="add-new">
                                                <Link  to={'/newdeals'}><FaCirclePlus /> Add new deals</Link>
                                                </div>

                                            </div>
                                            <div className="bottom row">
                                                <div className="col-6">Cat : {i.cat}</div>
                                                <div className="col-6">Started : {i.started}</div>
                                                <div className="col-6">Sub - Cat  : {i.sub}</div>
                                                <div className="col-6">Ended : {i.ended}</div>
                                                <div className="col-6">Deals : {i.deals}</div>
                                                <div className="col-6"><Link to={''}>View</Link></div>
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

export default DraftCupon
