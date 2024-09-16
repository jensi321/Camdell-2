import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
// import { Modal } from 'react-bootstrap';
import { FaDownload } from 'react-icons/fa6';
// import SubTermsCondition from '../../User/SubTermsCondition';
import Slider from 'react-slick'
const CuponDescription = () => {

    // const [showModal, setShowModal] = useState(false);
    // const [modalContent, setModalContent] = useState(null);

    // const handleClose = () => setShowModal(false);

    // const handleSubterms = () => {
        // setModalContent(<SubTermsCondition onClose={handleClose} />);
    //     setShowModal(true);
    // };
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    let sliderRef1 = useRef(null);
    let sliderRef2 = useRef(null);  



    useEffect(() => {
        setNav1(sliderRef1);
        setNav2(sliderRef2);
    }, []);
    const slider = [
        {
            img: 'assets/Image/carservices.png'
        },
        {
            img: 'assets/Image/carservices.png'
        },
        {
            img: 'assets/Image/carservices.png'
        },

    ]
    const items = [
        {
            heading: 'Categories',
            info: 'Automotive'
        },
        {
            heading: 'Sub - categories ',
            info: 'Car washing'
        },
        {
            heading: 'No of year trading',
            info: '22 years'
        },
        {
            heading: 'Business type',
            info: 'Car service'
        },
        {
            heading: 'Business Relationship',
            info: 'E-commerce'
        },
        {
            heading: 'Restrictions',
            info: '32456GIMS444'
        },
        {
            heading: 'Coupon Type',
            info: 'Discount'
        },
        {
            heading: 'Coupons Used on',
            info: 'Online'
        },
        {
            heading: 'Available coupons',
            info: '150'
        },
        {
            heading: 'started  Deals',
            info: ' Feb 15'
        },
        {
            heading: 'Ended  Deals',
            info: 'Feb 30'
        },
        {
            heading: 'Used coupons',
            info: '150'
        },
        {
            heading: 'Get Discount',
            info: '50 % Off'
        },
        {
            heading: 'Min-Purchace',
            info: '1,000'
        },
        {
            heading: 'Max-Purchase',
            info: '30,000'
        },
        {
            heading: 'Website link',
            info: ' https://www.w3.org/Provider/Style/dummy.htmlAutomotive'
        },

    ]


    return (
        <>
            <div className="cupon-description-outer">
                <div className="container">
                    <div className="cupon-description-inner">
                        <div className="heading">
                            <h3>Car service & Washing</h3>
                            <Link className='button'>Online</Link>
                        </div>

                        <div className="img-cupon-content row">
                            <div className="col-md-8 col-12  img-content">
                                <div className="row">
                                <div className="row">
                                    <div className="col-3 img-group">
                                        <Slider
                                            asNavFor={nav1}
                                            ref={slider => (sliderRef2 = slider)}
                                            slidesToShow={2}
                                            swipeToSlide={true}
                                            focusOnSelect={true}
                                            vertical={true}
                                            verticalSwiping={true}
                                            nextArrow=''
                                            prevArrow={''}
                                        >
                                            {slider.map((i,index) => {
                                                return (
                                                    <div className="img-item" key={index}>
                                                        <div className="img-inner">
                                                            <img src={i.img} alt="" />
                                                        </div>

                                                    </div>
                                                )

                                            })}
                                        </Slider>

                                    </div>
                                    <div className="col-12 col-lg-9 slider-img">
                                        <Slider asNavFor={nav2} ref={slider => (sliderRef1 = slider)} nextArrow='' prevArrow={''} dots={true}>
                                            {slider.map((i,index) => {
                                                return (
                                                    <div className="img-item" key={index}>
                                                        <div className="img-inner">
                                                            <img src={i.img} alt="" />
                                                        </div>

                                                    </div>
                                                )

                                            })}

                                        </Slider>


                                    </div>


                                </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-12 ">

                                            <div className="adspromotion-card">
                                                <div className="adpromotion-inner">
                                                    <div className="heading">
                                                        <h3>Ads promotion</h3>
                                                    </div>
                                                    <p>Did you want first preference for your coupons sale</p>

                                                    <div className="apply-button">
                                                            <Link className='button'>Apply</Link>
                                                    </div>
                                                </div>
                                            </div>

                                {/* <div className="item">
                                    <div className="item-inner">
                                        <span className="offer-sale">up to 30% off</span>
                                        <div className="img-content">
                                            <img src="assets/Image/white.png" alt="" />
                                        </div>
                                        <div className="text-content">
                                            <Link className="button" to="/">Earn up to 30% Offers</Link>
                                            <Link className="rewards" to="" onClick={handleSubterms}>Rewards Rates &amp; terms</Link>
                                        </div>

                                    </div>

                                </div> */}
                            </div>
                        </div>

                        <div className="note">
                            <p><b>Note</b> : When you purchase this coupon you can get some loyalty point </p>
                        </div>

                        <ul className="services-info row">
                            {
                                items.map((i,index) => {
                                    return (
                                        <li className="col-12 col-md-4" key={index}>
                                            <p><b>{i.heading}</b> : <span>{i.info}</span></p>
                                        </li>
                                    )
                                })
                            }
                        </ul>

                        <div className="description">
                            <div className="heading">
                                <h4>Description</h4>
                            </div>
                            <p>A car wash, or auto wash, is a facility used to clean the exterior, and in some cases the interior, of cars. Car washes can be self-service, full-service (with attendants who wash the vehicle), or fully automated (possibly connected to a filling station)</p>
                        </div>

                        <div className="terms-condition row">
                            <div className="col-12 col-md-6 item">
                                <div className="heading">
                                    <h4>Terms & conditions </h4>
                                </div>
                                <ul>
                                    <li>How to propel your business growth with discount coupons</li>
                                    <li>What limits to use and how to build an effective coupon journey</li>
                                    <li>Learn the best practices of all successful coupon campaigns</li>
                                </ul>
                            </div>
                            <div className="col-12 col-md-6 item">
                                <div className="heading">
                                    <h4>How to use</h4>
                                </div>
                                <p>If you receive an online store coupon, you can enter in the coupon code at check out on the merchants online store. When you redeem a coupon, your card statement may initially show a pending charge for the full transaction amount</p>
                            </div>
                        </div>

                        <div className="button-group">
                            <Link className="download-button"><span><FaDownload /></span>Download Coupons</Link>
                            <Link className="used-button"><span><FaDownload /></span>Used Coupons </Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Modal show={showModal} onHide={handleClose}>
                {modalContent}
            </Modal> */}
        </>
    )
}

export default CuponDescription
