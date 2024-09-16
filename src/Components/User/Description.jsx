import React, { useContext, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import SubTermsCondition from './SubTermsCondition'
import { Modal } from 'react-bootstrap'
import ShareReview from './Dashbord/ShareReview'
import { PiFilesFill } from 'react-icons/pi'
import Slider from 'react-slick'
import { FaHeart } from "react-icons/fa";
import { ProfileContext } from '../Context/UserContext'
import { BaseUrl, ImageUrl } from '../BaseURL/BaseUrl'

const Description = () => {
    const { couponInfo } = useContext(ProfileContext);

    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    let sliderRef1 = useRef(null);
    let sliderRef2 = useRef(null);
    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState(null);

    const [showCupon, SetshowCupon] = useState(false)

    const handleClose = () => setShowModal(false);

    const handleSubterms = () => {
        setModalContent(<SubTermsCondition onClose={handleClose} />);
        setShowModal(true);
    };
    const [liked, setLiked] = useState(couponInfo.is_liked);


    useEffect(() => {
        setNav1(sliderRef1);
        setNav2(sliderRef2);
    }, []);


    useEffect(() => {

        setLiked(couponInfo.is_liked);

    }, [couponInfo.is_liked]);
    const handleHeartClick = () => {
        // Make API call to add/remove favorite
        fetch(`${BaseUrl}/addremovefavorite.php`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                // Add any required parameters for the API call
                // For example, you might need to pass the coupon ID or user ID
                coupon_id: couponInfo.id,
                user_id: couponInfo.user_id
            })
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            }
            )
            .catch(error => console.error(error));
    };

    console.log(couponInfo)
    // const slider = [
    //     {
    //         img: 'assets/Image/carservices.png'
    //     },
    //     {
    //         img: 'assets/Image/carservices.png'
    //     },
    //     {
    //         img: 'assets/Image/carservices.png'
    //     },

    // ]

    const SliderString = couponInfo.images;
    console.log(SliderString)
const sliderArray = SliderString.split(",");
const slider = sliderArray.map(item => item.replace(/[["\]{}]/g, ''));
console.log(slider)

    const items = [
        {
            heading: 'Categories',
            info: couponInfo.category
        },
        {
            heading: 'Sub - categories ',
            info: couponInfo.subcategory
        },
        {
            heading: 'No of year trading',
            info: `${couponInfo.subcategory} years`
        },
        {
            heading: 'Business type',
            info: couponInfo.business_type
        },
        {
            heading: 'Business Relationship',
            info: couponInfo.business_relationship
        },
        {
            heading: 'Restrictions',
            info: couponInfo.registration_number
        },
        {
            heading: 'Coupon Type',
            info: couponInfo.coupon_type
        },
        {
            heading: 'Coupons Used on',
            info: couponInfo.coupon_used
        },
        {
            heading: 'Available coupons',
            info: '150'
        },
        {
            heading: 'started  Deals',
            info: couponInfo.deal_start_date
        },
        {
            heading: 'Ended  Deals',
            info: couponInfo.deal_end_date
        },
        {
            heading: 'Used coupons',
            info: '150'
        },
        {
            heading: 'Get Discount',
            info: `${couponInfo.discount_amount} % Off`
        },
        {
            heading: 'Min-Purchace',
            info: couponInfo.minimum_amount

        },
        {
            heading: 'Max-Purchase',
            info: couponInfo.maximum_amount
        },
        {
            heading: 'Website link',
            info: couponInfo.website_link
        },

    ]

    return (
        <>
            <ShareReview />
            <div className="cupon-description-outer">
                <div className="container">
                    <div className="cupon-description-inner">
                        <div className="heading">
                            <h3>{couponInfo.business_name}</h3>
                            <Link className='button'>{couponInfo.coupon_used}</Link>
                        </div>

                        <div className="img-cupon-content row">
                            <div className="col-md-8 col-12  img-content">
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
                                            { slider && slider.map((i, index) => {
                                                return (
                                                    <div className="img-item" key={index}>
                                                        <div className="img-inner">
                                                            <img src={`${ImageUrl}/${i}`} alt="" />
                                                        </div>

                                                    </div>
                                                )

                                            })}
                                        </Slider>

                                    </div>
                                    <div className="col-12 col-lg-9 slider-img">
                                        <Slider asNavFor={nav2} ref={slider => (sliderRef1 = slider)} nextArrow='' prevArrow={''} dots={true}>
                                            {slider && slider.map((i, index) => {
                                                return (
                                                    <div className="img-item" key={index}>
                                                        <div className="img-inner">
                                                            <img src={`${ImageUrl}/${i}`} alt="" />
                                                        </div>

                                                    </div>
                                                )

                                            })}

                                        </Slider>

                                        <div className="wishlist-icon">

                                            <Link onClick={() => {
                                                handleHeartClick();
                                                setLiked(liked === 1 ? 0 : 1);
                                            }} style={{ color: liked === 1 ? "red" : "black" }}><FaHeart /></Link>
                                        </div>
                                    </div>


                                </div>
                            </div>
                            <div className="col-md-4 col-12 ">
                                <div className="item">
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

                                </div>
                                {
                                    showCupon ? (<div className="cupon-code">
                                        <div className="left">
                                            <h4>COUPON  CODE</h4>
                                            <div className="code">
                                                <span>code</span>
                                                <div className="icon">
                                                    <PiFilesFill />
                                                </div>
                                                <div className="code-number">
                                                    AAA-98546-254
                                                </div>
                                            </div>

                                        </div>

                                        <div className="rotate-text"> <span>COUPON  CODE</span></div>
                                    </div>) : (<div className="code-button">
                                        <Link to={''} className='code-button' onClick={() => SetshowCupon(true)}>Get Code</Link>

                                    </div>)
                                }


                            </div>
                        </div>

                        <div className="note">
                            <p><b>Note</b> : When you purchase this coupon you can get some loyalty point </p>
                        </div>

                        <ul className="services-info row">
                            {
                                items.map((i, index) => {
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
                            <p>{couponInfo.description}</p>
                        </div>

                        <div className="terms-condition row">
                            <div className="col-12 col-md-6 item">
                                <div className="heading">
                                    <h4>Terms & conditions </h4>
                                </div>
                                <ul>
                                    <li>{couponInfo.terms_condition}</li>
                                    <li>What limits to use and how to build an effective coupon journey</li>
                                    <li>Learn the best practices of all successful coupon campaigns</li>
                                </ul>
                            </div>
                            <div className="col-12 col-md-6 item">
                                <div className="heading">
                                    <h4>How to use</h4>
                                </div>
                                <p>{couponInfo.how_to_use_coupon}</p>
                            </div>
                        </div>

                        {couponInfo.couponUsed !== null ? (<div className="coupon-user-warning">
                            <p>Note : This coupons already used</p>
                        </div>) : (
                            ""
                        )}
                    </div>
                </div>
            </div>

            <Modal show={showModal} onHide={handleClose}>
                {modalContent}
            </Modal>
        </>
    )
}

export default Description