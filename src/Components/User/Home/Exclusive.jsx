import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


const Exclusive = () => {
    const options = {
        loop: true,
        responsiveClass: true,
        nav: false,
        dots: false,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1,
            },
            576: {
                items: 2,
            },
            767: {
                items: 3
            },
            1024: {
                items: 4,

            }
        },
    };
    const items = [
        {
            img: 'assets/Image/exclusive-1.jpeg',
            des: '£50 Off £500+ Orders + Up to 50% Off in the Sale Oak Furniture Superstore Discount Code'
        },
        {
            img: 'assets/Image/exclusive-2.jpg',
            des: '£50 Off £500+ Orders + Up to 50% Off in the Sale Oak Furniture Superstore Discount Code'
        },
        {
            img: 'assets/Image/exclusive-3.jpg',
            des: '£50 Off £500+ Orders + Up to 50% Off in the Sale Oak Furniture Superstore Discount Code'
        },
        {
            img: '/assets/Image/exclusive-4.jpg',
            des: '£50 Off £500+ Orders + Up to 50% Off in the Sale Oak Furniture Superstore Discount Code'
        },

    ]
    return (
        <>
            <div className="exclusive-outer">
                <div className="container">
                    <div className="exclusive-inner">
                        <OwlCarousel className='owl-theme' {...options}>
                            {items.map((i , index) => {
                                return (
                                    <div className="item" key={index}>
                                        <div className="item-inner">
                                            <div className="img-content">
                                                <img src={i.img} alt="" />
                                            </div>
                                            <div className="text-content">
                                                <p><span>EXCLUSIVE</span> {i.des}</p>
                                            </div>

                                        </div>

                                    </div>
                                )

                            })}

                        </OwlCarousel>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Exclusive