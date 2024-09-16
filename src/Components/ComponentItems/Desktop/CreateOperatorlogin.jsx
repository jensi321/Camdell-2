import React from 'react'
import { GoPlusCircle } from "react-icons/go";
import { FaRegEdit } from "react-icons/fa";
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const CreateOperatorlogin = () => {

    
    const options = {
        loop: true,
        responsiveClass: true,
        nav: false,
        dots: false,
        margin: 20,
        autoplay: false,
        responsive: {
            0: {
                items: 1,
            },

            576: {
                items: 2,
            },
            990: {
                items: 3,
            },
            1200: {
                items: 5,
            },

        },
    };

    const manager = [
        {
            img: 'assets/Image/manager.png',
            name: 'Sanjay',
            post: 'Manager',
            email: 'Sanjay4@gmail.com'
        },
        {
            img: 'assets/Image/manager.png',
            name: 'Sanjay',
            post: 'Manager',
            email: 'Sanjay4@gmail.com'
        },
        {
            img: 'assets/Image/manager.png',
            name: 'Sanjay',
            post: 'Manager',
            email: 'Sanjay4@gmail.com'
        },
        {
            img: 'assets/Image/manager.png',
            name: 'Sanjay',
            post: 'Manager',
            email: 'Sanjay4@gmail.com'
        },
        {
            img: 'assets/Image/manager.png',
            name: 'Sanjay',
            post: 'Manager',
            email: 'Sanjay4@gmail.com'
        },
    ]
    return (
        <>
            <div className="create-operator-login ">
                <div className="container">
                    <div className="create-operator-inner">
                        <div className="heading">

                            <Link to='/opertorslogin'><span><GoPlusCircle /></span> Create Operator Login</Link>
                            <Link to='/opertors'>View All</Link>
                        </div>
                        <div className="manager-outer">
                            <OwlCarousel className='owl-theme' {...options}>
                                {manager.map((i) => {
                                    return (
                                        <>
                                            <div className="item">
                                                <div className="item-inner">
                                                    <div className="img-content">
                                                        <img src={i.img} alt="" />
                                                        <div className="user-post">{i.post}</div>
                                                        <div className="edit"><FaRegEdit /></div>
                                                    </div>
                                                    <div className="text-content">
                                                        <div className="name">Name : {i.name}</div>
                                                        <div className="email">E-mail ID : {i.email}</div>
                                                    </div>
                                                    <div className="button-groups">
                                                        <Link className="delete">Delete</Link>
                                                        <Link className="button">View</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })}
                            </OwlCarousel>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreateOperatorlogin
