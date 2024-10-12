import React from 'react'
import { GoPlusCircle } from "react-icons/go";
import { FaRegEdit } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

const CreateOperatorlogin = () => {


    const options = {
        slidesToShow: 5,
        responsive: [

            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
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
                            <Slider  {...options}>
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
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreateOperatorlogin
