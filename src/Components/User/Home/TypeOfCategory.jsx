import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import { CategoryApi, ImageUrl } from '../../BaseURL/BaseUrl';


const TypeOfCategory = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get( `${CategoryApi}/getcategory`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
        })
            .then(function (response) {
                console.log(response.data.data);
                setCategories(response.data.data);
            })
            .catch(function (error) {
                console.error('There was an error making the request:', error);
            });
    }, []);

    const settings = {
        slidesToShow: 7,
        nav: true,
        loop: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 7,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 574,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    };


    return (
        <>
            <div className="category-outer">
                <div className="container">
                    <div className="category-inner">
                        <div className="heading">
                            <h3>TYPES OF CATEGORIES</h3>
                        </div>
                        <Slider {...settings}>
                            {categories && categories.map((category) => {
                                return (
                                    <div className="item" key={category.id}>
                                        <Link to={`/${category.name}`} className="item-inner">
                                            <div className="img-content">
                                                <img src={`${ImageUrl}/${category.icon}`} alt={category.name} />
                                            </div>
                                            <div className="text-content">
                                                <p >{category.name}</p>
                                            </div>

                                        </Link>

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

export default TypeOfCategory